import React, { useState, useEffect } from "react";
import { HiOutlineLink } from "react-icons/hi2";
import "../css/components-css/DashBoardCard.css";

const URLCount = () => {
  const [urlCount, setUrlCount] = useState(0);

  useEffect(() => {
    const fetchUrlCount = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/v1/scan/count");
        const data = await response.json();
        setUrlCount(data.scannedURLs);
      } catch (error) {
        console.error("Error fetching URL count:", error);
      }
    };

    const intervalId = setInterval(fetchUrlCount, 1000);
    fetchUrlCount();

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="dashboard-card">
      <div className="dashboard-card-content">
        <p className="dashboard-card-title">Scanned</p>
        <p className="dashboard-card-number">{urlCount}</p>
      </div>
      <div className="dashboard-card-icon">
        <HiOutlineLink className="dashboard-icon" />
      </div>
    </div>
  );
};

export default URLCount;
