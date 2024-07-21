import React, { useState, useEffect } from "react";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import "../css/components-css/DashBoardCard.css";

const LegitimateCount = () => {
  const [legitCount, setLegitCount] = useState(0);

  useEffect(() => {
    const fetchUrlCount = async () => {
      try {
        const response = await fetch(
          "http://localhost:5000/scan/legitimateCount"
        );
        const data = await response.json();
        setLegitCount(data.legitimateCount);
      } catch (error) {
        console.error("Error fetching URL count:", error);
      }
    };

    fetchUrlCount();
    const intervalId = setInterval(fetchUrlCount, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="dashboard-card" style={{ backgroundColor: "#36b78e" }}>
      <div className="dashboard-card-content">
        <p className="dashboard-card-title">Legitimate</p>
        <p className="dashboard-card-number">{legitCount}</p>
      </div>
      <div className="dashboard-card-icon">
        <AiOutlineSafetyCertificate className="dashboard-icon" />
      </div>
    </div>
  );
};

export default LegitimateCount;
