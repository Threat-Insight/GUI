import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import "../css/components-css/ScanSummary.css";
import { BsArrowRight } from "react-icons/bs";
import { Spinner } from "react-bootstrap"; // Assuming you have react-bootstrap installed

const ScanSummary = () => {
  const [urls, setUrls] = useState([]);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [loading, setLoading] = useState(false);
  const [loadingIndex, setLoadingIndex] = useState(null);

  const extractBaseDomain = (url) => {
    const regex = /^(?:https?:\/\/)?(?:www\.)?([^/]+)/;
    const match = url.match(regex);
    return match ? match[1].split(".")[0] : null;
  };

  const fetchUrls = useCallback(async () => {
    try {
      const response = await axios.get("http://localhost:8000/scan/urls");
      if (Array.isArray(response.data.urls)) {
        const trimmedUrls = response.data.urls.map((entry) => ({
          ...entry,
          domain: extractBaseDomain(entry.url),
          reportStatus: "Draft Report",
        }));
        setUrls(trimmedUrls);
      } else {
        setError("Unexpected response format.");
      }
    } catch (error) {
      setError("Error fetching URLs: " + error.message);
    }
  }, []);

  useEffect(() => {
    fetchUrls();
    const intervalId = setInterval(fetchUrls, 2000);
    return () => clearInterval(intervalId);
  }, [fetchUrls]);

  const handleReport = async (url, result, index) => {
    setLoading(true);
    setLoadingIndex(index);
    try {
      const response = await axios.post("http://localhost:8000/report", {
        url,
        result,
      });

      const { reportStatus } = response.data;

      // Check the reportStatus from backend
      if (reportStatus === "Report generated") {
        // Update the reportStatus for the specific URL
        setUrls((prevUrls) =>
          prevUrls.map((entry, i) =>
            i === index ? { ...entry, reportStatus } : entry
          )
        );

        // Display success alert
        alert("Report generated successfully!");

        // Download the PDF file
        const pdfUrl = `http://localhost:8000/uploads/pdfs/${extractBaseDomain(
          url
        )}.pdf`;
        window.open(pdfUrl, "_blank");
      } else {
        setError("Unexpected report status: " + reportStatus);
      }

      setSuccess("Report generation requested.");
      setError(null);
      setLoading(false);
      setLoadingIndex(null);
    } catch (error) {
      setError("Failed to request report generation: " + error.message);
      setSuccess(null);
      setLoading(false);
      setLoadingIndex(null);
    }
  };

  return (
    <div>
      <h2 className="logs-header">Scan Logs</h2>
      {error && <p className="error-message">{error}</p>}
      {success && <p className="success-message">{success}</p>}
      {urls.length > 0 ? (
        <ul className="logs-entry">
          {urls.map((entry, index) => (
            <li
              key={index}
              className={
                entry.result === "Legitimate" ? "logs-legit" : "logs-phish"
              }
            >
              <div className="logs-information">
                <a href={entry.url} target="_blank" rel="noopener noreferrer">
                  {entry.domain}
                </a>{" "}
                <BsArrowRight className="logs-icon" />
                <span>{entry.result}</span>
              </div>
              <div className="generate-report">
                <p className="report-text">
                  {loading && loadingIndex === index ? (
                    <Spinner animation="border" size="sm" />
                  ) : (
                    entry.reportStatus
                  )}
                </p>
                <button
                  type="button"
                  className="logs-btn"
                  onClick={() => handleReport(entry.url, entry.result, index)}
                  disabled={loading && loadingIndex === index}
                >
                  Report
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        !error && !success && <p>No URLs scanned yet.</p>
      )}
    </div>
  );
};

export default ScanSummary;
