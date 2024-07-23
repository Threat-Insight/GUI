import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import ReactModal from "react-modal";
import "../css/components-css/ScanSummary.css";
import { BsArrowRight } from "react-icons/bs";

ReactModal.setAppElement("#root"); // Set this to the root element of your app

const ScanSummary = () => {
  const [urls, setUrls] = useState([]);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [loading, setLoading] = useState(false);
  const [loadingIndex, setLoadingIndex] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
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
        // Update the reportStatus for the specific URL
        setUrls((prevUrls) =>
          prevUrls.map((entry, i) =>
            i === index ? { ...entry, reportStatus: "Report generated" } : entry
          )
        );

        // Set the PDF URL and open the modal
        setPdfUrl(`http://localhost:5000${pdfFilePath}`); // Ensure URL is properly formatted
        setModalIsOpen(true);
      } else {
        setError("Unexpected report status: " + message);
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

      <ReactModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Download PDF"
        style={{
          content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
          },
        }}
      >
        <h2>Report Generated</h2>
        <p>Click the button below to download the PDF report.</p>
        <button onClick={downloadPdf}>Download PDF</button>
        <button onClick={closeModal} style={{ marginLeft: "10px" }}>
          Close
        </button>
      </ReactModal>
    </div>
  );
};

export default ScanSummary;
