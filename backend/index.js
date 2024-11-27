const fs = require("fs");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const { spawn } = require("child_process");
const validator = require("validator");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
const xssClean = require("xss-clean");

const {
  getUrlScanCount,
  incrementUrlScanCount,
  getPhishingCount,
  incrementPhishingCount,
  getLegitimateCount,
  incrementLegitimateCount,
  addUrl,
  getUrls,
} = require("./counterStorage");

const app = express();
const port = 5000;

const allowedOrigins = ["http://localhost:3000"];

const checkOrigin = (req, res, next) => {
  const origin = req.get("Origin");

  if (origin && !allowedOrigins.includes(origin)) {
    return res.status(403).json({ error: "Forbidden: Invalid Origin" });
  }
  next();
};

app.use(checkOrigin);
const corsOptions = {
  origin: "http://localhost:3000",
  methods: "GET,POST",
  allowedHeaders: "Content-Type,Authorization",
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(helmet());
app.use(xssClean());
app.use(express.json());
app.use(bodyParser.json());

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  message: "Too many requests, please try again later.",
});

const conditionalRateLimit = (req, res, next) => {
  const origin = req.get("Origin");

  if (origin === "http://localhost:3000") {
    return next();
  } else {
    limiter(req, res, next);
  }
};

app.use(conditionalRateLimit);

app.use("/uploads/pdfs", express.static(path.join(__dirname, "uploads/pdfs")));
app.use(express.static(path.join(__dirname, "public")));

function logs(request, accessPoint) {
  const time = new Date().toISOString().replace("T", " ").replace("Z", "");
  const userAgent = request.headers["user-agent"];
  const ipAddress = request.ip || request.connection.remoteAddress;
  const type = request.method;
  const format = `${time} - INFO - Accessed ${accessPoint} - User Agent: ${userAgent}, IP Address: ${ipAddress}, Request Type: ${type}`;
  const accessLogFile = path.join(__dirname, "logs", "access.log");

  fs.appendFile(accessLogFile, format + "\n", (error) => {
    if (error) {
      console.error(`Failed to log access: ${error}`);
    }
  });
}

function prediction(path, args = []) {
  return new Promise((resolve, reject) => {
    const pythonScript = spawn("python", [path, ...args]);
    let result = "";

    pythonScript.stdout.on("data", (data) => {
      result += data.toString();
    });

    pythonScript.stderr.on("data", (err) => {
      reject(err.toString());
    });

    pythonScript.on("close", (code) => {
      if (code !== 0) {
        return reject(`Python script exited with code ${code}`);
      }
      resolve(result.trim());
    });
  });
}

function validateURLs(request, response, next) {
  let { url } = request.body;

  if (!url || !validator.isURL(url)) {
    return response.status(400).json({ error: "Invalid URL." });
  }
  if (!/^https?:\/\//i.test(url)) {
    url = `http://${url}`;
  }
  console.log(url);
  url = url.replace(/^https?:\/\/(www\.)/, "https://");
  console.log(url);
  url = url.replace(/\/$/, "");
  console.log(url);
  try {
    const parsed = new URL(url);
    console.log(parsed);
    if (!parsed.hostname) {
      return response.status(400).json({ error: "Invalid URL hostname." });
    }
    request.parsedURL = url;
    next();
  } catch (error) {
    console.log(error);
    return response.status(400).json({ error: "Invalid URL format." });
  }
}

function validateResponse(request, response, next) {
  const { result } = request.body;
  if (!["Phishing", "Legitimate"].includes(result)) {
    return response.status(400).json({ error: "Invalid Result" });
  }
  request.result = result;
  next();
}

app.post("/api/v1/scan", validateURLs, async (request, response) => {
  const { parsedURL } = request;
  try {
    incrementUrlScanCount();
    const predictionResult = await prediction(
      path.join(__dirname, "predict.py"),
      [parsedURL]
    );

    if (predictionResult === "Phishing") {
      incrementPhishingCount();
      addUrl(parsedURL, "Phishing");
    } else if (predictionResult === "Legitimate") {
      incrementLegitimateCount();
      addUrl(parsedURL, "Legitimate");
    } else {
      throw new Error("Unexpected prediction output");
    }

    response.status(200).json({ prediction: predictionResult });
  } catch (error) {
    console.error(`Error in /api/v1/scan: ${error}`);
    response.status(500).json({ error: "Error making prediction." });
  }
});

app.get("/api/v1/scan/count", (request, response) => {
  logs(request, "/api/v1/scan/count");
  response.json({
    scannedURLs: getUrlScanCount(),
    message: "The total number of URLs scanned.",
  });
});

app.get("/api/v1/scan/phishing", (request, response) => {
  logs(request, "/api/v1/scan/phishing");
  response.json({
    phishingURLs: getPhishingCount(),
    message: "The total number of Phishing URLs out of total scanned URLs",
  });
});

app.get("/api/v1/scan/legitimate", (request, response) => {
  logs(request, "/api/v1/scan/legitimate");
  response.json({
    legitimateURLs: getLegitimateCount(),
    message: "The total number of Legitimate URLs out of total scanned URLs",
  });
});

app.get("/api/v1/scan/urls", (request, response) => {
  logs(request, "/api/v1/scan/urls");
  const urls = getUrls();
  response.json({
    URLs: urls,
    count: urls.length,
    message: "All the URLs that are scanned by the users.",
  });
});

app.listen(port, () => {
  console.log(`Server running on https://localhost:${port}`);
});
