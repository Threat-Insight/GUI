import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import CustomModal from "./CustomModal";
import "../css/components-css/ScanSummary.css";
import { BsArrowRight } from "react-icons/bs";

const ScanSummary = () => {
  const [urls, setUrls] = useState([]);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [loading, setLoading] = useState(false);
  const [loadingIndex, setLoadingIndex] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(true);
  const [pdfUrl, setPdfUrl] = useState("");

  const extractBaseDomain = (url) => {
    const regex = /^(?:https?:\/\/)?(?:www\.)?([^/]+)/;
    const match = url.match(regex);
    return match ? match[1].split(".")[0] : null;
  };

  const fetchUrls = useCallback(async () => {
    try {
      const response = await axios.get("http://localhost:5000/scan/urls");
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
      const response = await axios.post("http://localhost:5000/report", {
        url,
        result,
      });

      const { pdfFilePath, message } = response.data;

      if (message === "Report generated successfully") {
        setUrls((prevUrls) =>
          prevUrls.map((entry, i) =>
            i === index ? { ...entry, reportStatus: "Report generated" } : entry
          )
        );

        setPdfUrl(`http://localhost:5000${pdfFilePath}`);
        setModalIsOpen(true);
      } else {
        setError("Unexpected report status: " + message);
      }
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

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const downloadPdf = () => {
    window.open(pdfUrl, "_blank");
    setModalIsOpen(false);
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
                    <span
                      style={{
                        display: "inline-block",
                        width: "16px",
                        height: "16px",
                        border: "2px solid rgba(0, 0, 0, 0.1)",
                        borderRadius: "50%",
                        borderTopColor: "#333",
                        animation: "spin 1s linear infinite",
                      }}
                    ></span>
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

      <CustomModal isOpen={modalIsOpen} onRequestClose={closeModal}>
        <h2 className="sucess-modal">Success</h2>
        <p className="success-para">
          A comprehensive phishing analysis has been generated. Hit the button
          below to download your detailed report and secure your insights!
        </p>
        <div className="modal-btns">
          <button onClick={downloadPdf} className="modal-btn green">
            Get Report
          </button>
          <button onClick={closeModal} className="modal-btn red">
            Close
          </button>
        </div>
      </CustomModal>
    </div>
  );
};

export default ScanSummary;
