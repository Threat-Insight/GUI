const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "counterData.json");

const loadCounters = () => {
  try {
    if (fs.existsSync(filePath)) {
      const data = fs.readFileSync(filePath, "utf8");
      return JSON.parse(data);
    } else {
      return { urlScanCount: 0, phishingCount: 0, legitimateCount: 0 };
    }
  } catch (error) {
    console.error("Error loading counters:", error);
    return { urlScanCount: 0, phishingCount: 0, legitimateCount: 0 };
  }
};

const saveCounters = (counters) => {
  try {
    fs.writeFileSync(filePath, JSON.stringify(counters, null, 2), "utf8");
  } catch (error) {
    console.error("Error saving counters:", error);
  }
};

let counters = loadCounters();

const getUrlScanCount = () => counters.urlScanCount;
const incrementUrlScanCount = () => {
  counters.urlScanCount++;
  saveCounters(counters);
};

const getPhishingCount = () => counters.phishingCount;
const incrementPhishingCount = () => {
  counters.phishingCount++;
  saveCounters(counters);
};

const getLegitimateCount = () => counters.legitimateCount;
const incrementLegitimateCount = () => {
  counters.legitimateCount++;
  saveCounters(counters);
};

module.exports = {
  getUrlScanCount,
  incrementUrlScanCount,
  getPhishingCount,
  incrementPhishingCount,
  getLegitimateCount,
  incrementLegitimateCount,
};
