import React, { useState } from "react";
import URLClassificationPieChart from "./PieChart";
import { GiFishingHook } from "react-icons/gi";
import axios from "axios";
import URLCount from "./URLCount";
import PhishingCount from "./PhishingCount";
import LegitimateCount from "./LegitimateCount";

const URLScan = () => {
  const [url, setUrl] = useState("");
  const [prediction, setPrediction] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await axios.post("http://localhost:5000/api/v1/scan", {
        url,
      });
      setPrediction(response.data.prediction);
      console.log(response.data);
    } catch (error) {
      console.error("Error making prediction:", error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <>
      <section className="scan">
        <div className="main-dashboard">
          <div className="scan-dashboard">
            <div className="dashboard-counters">
              <URLCount />
              <PhishingCount />
              <LegitimateCount />
            </div>
            <div className="scan-details">
              <div className="App">
                <header className="scan-header">
                  <p className="scan-heading">Being Tricked ?</p>
                  <GiFishingHook className="absolute-icon" />
                  <div className="scan-describe">
                    <p className="scan-describe-one">
                      Doubting the Legitimacy of Links?
                    </p>
                    <p className="scan-describe-two">
                      Just enter the URL, and our advanced technology will
                      swiftly analyze it for potential threats. Stay secure and
                      browse confidently.
                    </p>
                  </div>
                  <form onSubmit={handleSubmit} className="scan-form">
                    <input
                      className="scan-url"
                      type="text"
                      value={url}
                      onChange={(e) => setUrl(e.target.value)}
                      placeholder="Let us secure you"
                    />
                    <button type="submit" className="check-btn">
                      check
                    </button>
                  </form>
                  {prediction !== null && (
                    <p className="scanned-result">
                      {prediction === "Legitimate" ? (
                        <span className="message">
                          Hurray! You are{" "}
                          <strong className="safe-text">Safe.</strong>
                        </span>
                      ) : (
                        <span className="message">
                          Oops! You are at{" "}
                          <strong className="risk-text">Risk.</strong>{" "}
                        </span>
                      )}
                    </p>
                  )}
                </header>
              </div>
              <URLClassificationPieChart />
            </div>
            {isLoading && (
              <div className="loading-overlay">
                <div className="spinner"></div>
                <p>umm .? Technology is at Work</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default URLScan;
