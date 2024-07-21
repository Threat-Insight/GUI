import React, { useState } from "react";
import "../css/components-css/DashboardPanel.css";
import DashboardLogo from "../img/dashboard/dashboard-logo.png";

const DashboardPanel = () => {
  const [activeSection, setActiveSection] = useState("scan");

  const handleLinkClick = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="left-panel">
      <div className="dashboard-logo">
        <img src={DashboardLogo} alt="Logo" />
        <p className="dashboard-text">dashboard</p>
      </div>
      <nav className="linker">
        <ul>
          <li className={activeSection === "scan" ? "active" : ""}>
            <a href="#scan" onClick={() => handleLinkClick("scan")}>
              Scan URL
            </a>
          </li>
          <li className={activeSection === "summary" ? "active" : ""}>
            <a href="#summary" onClick={() => handleLinkClick("summary")}>
              Scan Summary
            </a>
          </li>
          <li className={activeSection === "transaction" ? "active" : ""}>
            <a
              href="#transaction"
              onClick={() => handleLinkClick("transaction")}
            >
              URL Base
            </a>
          </li>
          <li className={activeSection === "statistics" ? "active" : ""}>
            <a href="#statistics" onClick={() => handleLinkClick("statistics")}>
              Regulations
            </a>
          </li>
          <li className={activeSection === "product" ? "active" : ""}>
            <a href="#product" onClick={() => handleLinkClick("product")}>
              Hall Of Fames
            </a>
          </li>
          <li className={activeSection === "category" ? "active" : ""}>
            <a href="#category" onClick={() => handleLinkClick("category")}>
              Contribution Regulations
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default DashboardPanel;
