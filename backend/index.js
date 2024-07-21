const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { spawn } = require("child_process");
const path = require("path");
const validator = require("validator");

const {
  getUrlScanCount,
  incrementUrlScanCount,
  getPhishingCount,
  incrementPhishingCount,
  getLegitimateCount,
  incrementLegitimateCount,
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
    } else if (prediction === "Legitimate") {
      incrementLegitimateCount();
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
    console.log(`Child process exited with code ${code}`);
    res.status(500).json({ error: "An error occurred during prediction" });
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

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
