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
const { error } = require("console");

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

app.use("/uploads/pdfs", express.static(path.join(__dirname, "uploads/pdfs")));
app.use(express.static(path.join(__dirname, "public")));

app.post("/scan", (req, res) => {
  const url = req.body.url;

  if (!validator.isURL(url)) {
    return res.status(400).json({ error: "Invalid URL" });
  }

  incrementUrlScanCount();

  const pythonProcess = spawn("python", [
    path.join(__dirname, "predict.py"),
    url,
  ]);

  let responseSent = false;
  pythonProcess.stdout.on("data", (data) => {
    if (responseSent) return;
    const prediction = data.toString().trim();
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
    res.status(500).json({ error: "An error occurred during prediction" });
    responseSent = true;
  });

  pythonProcess.on("close", (code) => {
    if (responseSent) return;
    if (code !== 0) {
      res.status(500).json({ error: "An error occurred during prediction" });
    }
    responseSent = true;
  });
});

app.post("/report", (req, res) => {
  const { url, result } = req.body;

  if (!validator.isURL(url)) {
    return res.status(400).json({ error: "Invalid URL" });
  }

  if (!["Phishing", "Legitimate"].includes(result)) {
    return res.status(400).json({ error: "Invalid result" });
  }

  const sanitizedUrl = url
    .replace("https://", "")
    .replace("http://", "")
    .replace("www.", "")
    .replace("/", "_")
    .replace(/(\.com|\.net|\.org)$/, "")
    .concat(".pdf");

  const pdfFile = path.join(__dirname, "uploads/pdfs", sanitizedUrl);
  const pythonProcess = spawn("python", [
    path.join(__dirname, "GenReport.py"),
    url,
    result,
  ]);

  let responseSent = false;
  pythonProcess.stdout.on("data", (data) => {
    if (responseSent) return;
    const output = data.toString().trim();
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
    res
      .status(500)
      .json({ error: "An error occurred during report generation" });
    responseSent = true;
  });

  pythonProcess.on("close", (code) => {
    if (responseSent) return;
    if (code !== 0) {
      res
        .status(500)
        .json({ error: "An error occurred during report generation" });
    }
    responseSent = true;
  });
});

app.get("/scan/count", (req, res) => {
  res.json({ count: getUrlScanCount() });
});
app.get("/scan/phishingCount", (req, res) => {
  res.json({ phishingCount: getPhishingCount() });
});

app.get("/scan/legitimateCount", (req, res) => {
  res.json({ legitimateCount: getLegitimateCount() });
});

app.get("/scan/urls", (req, res) => {
  res.json({ urls: getUrls() });
});

app.get("/feeds", (req, res) => {
  const file = path.join(__dirname, "trained.txt");
  res.download(file);
});

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
