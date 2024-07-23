const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const { spawn } = require("child_process");
const validator = require("validator");
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

const corsOptions = {
  origin: "*",
  methods: "GET,POST",
  allowedHeaders: "Content-Type,Authorization",
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(bodyParser.json());

// Serve static files from 'uploads/pdfs'
app.use("/uploads/pdfs", express.static(path.join(__dirname, "uploads/pdfs")));

// Route to handle URL scanning
app.post("/scan", (req, res) => {
  const url = req.body.url;

  if (!validator.isURL(url)) {
    console.log("Invalid URL received:", url);
    return res.status(400).json({ error: "Invalid URL" });
  }

  incrementUrlScanCount();
  console.log(
    `URL received for scanning: ${url}. Total count: ${getUrlScanCount()}`
  );

  const pythonProcess = spawn("python", [
    path.join(__dirname, "predict.py"),
    url,
  ]);

  let responseSent = false;
  pythonProcess.stdout.on("data", (data) => {
    if (responseSent) return;
    const prediction = data.toString().trim();
    console.log(`Prediction: ${prediction}`);
    if (prediction === "Phishing") {
      incrementPhishingCount();
      addUrl(url, "Phishing");
    } else if (prediction === "Legitimate") {
      incrementLegitimateCount();
      addUrl(url, "Legitimate");
    }

    res.json({ prediction });
    responseSent = true;
  });

  pythonProcess.stderr.on("data", (data) => {
    if (responseSent) return;
    console.error(`stderr: ${data.toString()}`);
    res.status(500).json({ error: "An error occurred during prediction" });
    responseSent = true;
  });

  pythonProcess.on("close", (code) => {
    if (responseSent) return;
    console.log(`Child process exited with code ${code}`);
    if (code !== 0) {
      res.status(500).json({ error: "An error occurred during prediction" });
    }
    responseSent = true;
  });
});

// Route to handle reporting and screenshot capturing
app.post("/report", (req, res) => {
  const { url, result } = req.body;

  if (!validator.isURL(url)) {
    console.log("Invalid URL received:", url);
    return res.status(400).json({ error: "Invalid URL" });
  }

  if (!["Phishing", "Legitimate"].includes(result)) {
    console.log("Invalid result received:", result);
    return res.status(400).json({ error: "Invalid result" });
  }

  // Sanitize URL for file naming
  const sanitizedUrl = url
    .replace("https://", "")
    .replace("http://", "")
    .replace("www.", "")
    .replace("/", "_")
    .replace(/(\.com|\.net|\.org)$/, "")
    .concat(".png");

  const screenshotFile = path.join(
    __dirname,
    "uploads/screenshots",
    sanitizedUrl
  );
  const textFile = path.join(
    __dirname,
    "uploads/TextFiles",
    sanitizedUrl.replace(".png", ".txt")
  );
  const pdfFile = path.join(
    __dirname,
    "uploads/pdfs",
    sanitizedUrl.replace(".png", ".pdf")
  );

  // Spawn Python process to capture screenshot and interpret image
  const pythonProcess = spawn("python", [
    path.join(__dirname, "GenReport.py"),
    url,
    result,
  ]);

  let responseSent = false;
  pythonProcess.stdout.on("data", (data) => {
    if (responseSent) return;
    const output = data.toString().trim();
    console.log(`stdout: ${output}`);

    // Check if the output is the path of the PDF
    if (output.startsWith("uploads/pdfs")) {
      res.json({
        message: "Report generated successfully",
        pdfFilePath: `/${output}`,
      });
    } else if (output === "DONE") {
      res.json({
        message: "Report generated successfully",
        pdfFilePath: pdfFile,
      });
    } else {
      res
        .status(500)
        .json({ error: "Unexpected output from the Python script" });
    }
    responseSent = true;
  });

  pythonProcess.stderr.on("data", (data) => {
    if (responseSent) return;
    console.error(`stderr: ${data.toString()}`);
    res
      .status(500)
      .json({ error: "An error occurred during report generation" });
    responseSent = true;
  });

  pythonProcess.on("close", (code) => {
    if (responseSent) return;
    console.log(`Child process exited with code ${code}`);
    if (code !== 0) {
      res
        .status(500)
        .json({ error: "An error occurred during report generation" });
    }
    responseSent = true;
  });
});

// Route to get the count of URLs scanned
app.get("/scan/count", (req, res) => {
  res.json({ count: getUrlScanCount() });
});

// Route to get the count of phishing URLs
app.get("/scan/phishingCount", (req, res) => {
  res.json({ phishingCount: getPhishingCount() });
});

// Route to get the count of legitimate URLs
app.get("/scan/legitimateCount", (req, res) => {
  res.json({ legitimateCount: getLegitimateCount() });
});

// Route to get the list of scanned URLs
app.get("/scan/urls", (req, res) => {
  res.json({ urls: getUrls() });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
