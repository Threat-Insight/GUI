const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { spawn } = require("child_process");
const path = require("path");
const validator = require("validator");

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

let urlScanCount = 0; // Counter to keep track of URLs scanned

app.post("/scan", (req, res) => {
  const url = req.body.url;

  if (!validator.isURL(url)) {
    console.log("Invalid URL received:", url);
    return res.status(400).json({ error: "Invalid URL" });
  }

  urlScanCount++;
  console.log(
    `URL received for scanning: ${url}. Total count: ${urlScanCount}`
  );

  const pythonProcess = spawn("python", [
    path.join(__dirname, "predict.py"),
    url,
  ]);

  pythonProcess.stdout.on("data", (data) => {
    const prediction = data.toString().trim();
    console.log(`Prediction: ${prediction}`);
    res.json({ prediction });
  });

  pythonProcess.stderr.on("data", (data) => {
    console.error(`stderr: ${data}`);
    res.status(500).json({ error: "An error occurred during prediction" });
  });

  pythonProcess.on("close", (code) => {
    console.log(`Python process exited with code ${code}`);
  });
});

// New endpoint to get the URL scan count
app.get("/scan/count", (req, res) => {
  console.log(`URL scan count requested. Current count: ${urlScanCount}`);
  res.json({ count: urlScanCount });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
