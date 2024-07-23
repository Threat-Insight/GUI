const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "counterData.json");

const loadCounters = () => {
  try {
    if (fs.existsSync(filePath)) {
      const data = fs.readFileSync(filePath, "utf8");
      return JSON.parse(data);
    } else {
      return {
        urlScanCount: 0,
        phishingCount: 0,
        legitimateCount: 0,
        urls: [],
      };
    }
  } catch (error) {
    console.error("Error loading counters and URLs:", error);
    return {
      urlScanCount: 0,
      phishingCount: 0,
      legitimateCount: 0,
      urls: [],
    };
  }
};

const saveCounters = (counters) => {
  try {
    fs.writeFileSync(filePath, JSON.stringify(counters, null, 2), "utf8");
  } catch (error) {
    console.error("Error saving counters and URLs:", error);
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

const addUrl = (url, result) => {
  if (!Array.isArray(counters.urls)) {
    counters.urls = [];
  }
  counters.urls.push({ url, result });
  saveCounters(counters);
};

const getUrls = () => counters.urls;

module.exports = {
  getUrlScanCount,
  incrementUrlScanCount,
  getPhishingCount,
  incrementPhishingCount,
  getLegitimateCount,
  incrementLegitimateCount,
  addUrl,
  getUrls,
};
