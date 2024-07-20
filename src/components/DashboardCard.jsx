import React, { useState, useEffect } from "react";
import "../css/components-css/DashBoardCard.css"; // Ensure the correct path to your CSS file

const DashBoardCard = () => {
  const [urlCount, setUrlCount] = useState(0);

  useEffect(() => {
    const fetchUrlCount = async () => {
      try {
        const response = await fetch("http://localhost:5000/scan/count"); // Ensure this matches your server's endpoint
        const data = await response.json();
        setUrlCount(data.count);
      } catch (error) {
        console.error("Error fetching URL count:", error);
      }
    };

    const intervalId = setInterval(fetchUrlCount, 1000); // Fetch every 5 seconds

    // Initial fetch
    fetchUrlCount();

    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, []);

  return (
    <div className="dashboard-card">
      <div className="dashboard-card-content">
        <h2 className="dashboard-card-title">URLs Scanned</h2>
        <p className="dashboard-card-number">{urlCount}</p>
      </div>
      <div className="dashboard-card-icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="#ffffff"
          height="48"
          viewBox="0 96 960 960"
          width="48"
        >
          <path d="M479.859 506Q435 506 402.5 473.425 370 440.85 370 396q0-44.859 32.575-77.36Q435.15 286 480 286q44.859 0 77.36 32.575Q590 351.15 590 396q0 44.859-32.575 77.425Q523.85 506 479.859 506ZM278 746q-29.634 0-49.317-19.683Q208 706.634 208 677v-6q0-29.443 13.098-53.221Q234.195 594 258 578q57-34 116-51.5t106-17.5q54 0 112.5 18T713 578q23.805 16 36.902 39.779Q763 641.558 763 671v6q0 29.634-19.683 49.317Q723.634 746 694 746H278Zm557-51q-20.783 0-35.391-14.609Q785 665.783 785 645t14.609-35.391Q814.217 595 835 595t35.391 14.609Q885 624.217 885 645t-14.609 35.391Q855.783 695 835 695Zm0-128q-20.783 0-35.391-14.609Q785 537.783 785 517t14.609-35.391Q814.217 467 835 467t35.391 14.609Q885 496.217 885 517t-14.609 35.391Q855.783 567 835 567ZM146 695q-20.783 0-35.391-14.609Q96 665.783 96 645t14.609-35.391Q125.217 595 146 595t35.391 14.609Q196 624.217 196 645t-14.609 35.391Q166.783 695 146 695Zm0-128q-20.783 0-35.391-14.609Q96 537.783 96 517t14.609-35.391Q125.217 467 146 467t35.391 14.609Q196 496.217 196 517t-14.609 35.391Q166.783 567 146 567Z" />
        </svg>
      </div>
    </div>
  );
};

export default DashBoardCard;
