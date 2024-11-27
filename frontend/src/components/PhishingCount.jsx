import React, { useState, useEffect } from "react";
import { GiFishingHook } from "react-icons/gi";
import "../css/components-css/DashBoardCard.css";

const PhishingCount = () => {
  const [phishingCount, setphishingCount] = useState(0);

  useEffect(() => {
    const fetchUrlCount = async () => {
      try {
        const response = await fetch(
          "http://localhost:5000/api/v1/scan/phishing"
        );
        const data = await response.json();
        setphishingCount(data.phishingURLs);
      } catch (error) {
        console.error("Error fetching URL count:", error);
      }
    };

    const intervalId = setInterval(fetchUrlCount, 5000);
    fetchUrlCount();

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="dashboard-card" style={{ backgroundColor: "#f43755" }}>
      <div className="dashboard-card-content">
        <p className="dashboard-card-title">Phishing</p>
        <p className="dashboard-card-number">{phishingCount}</p>
      </div>
      <div className="dashboard-card-icon">
        <GiFishingHook className="dashboard-icon" />
      </div>
    </div>
  );
};

export default PhishingCount;
