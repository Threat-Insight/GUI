import React, { useState } from "react";
import "../css/components-css/DashboardPanel.css";
import DashboardLogo from "../img/dashboard/dashboard-logo.png";
import URLScan from "./URLScan";
import ScanSummary from "./ScanSummary";
import URLBase from "./URLBase";
import Regulations from "./Regulations";
import HallOfFame from "./HallOfFame";
import "../css/components-css/Scan.css";
import Contributions from "./Contributions";

const DashboardPanel = () => {
  const [activeSection, setActiveSection] = useState("scan");

  const handleLinkClick = (section) => {
    setActiveSection(section);
  };

  const renderPanel = () => {
    switch (activeSection) {
      case "scan":
        return <URLScan />;
      case "summary":
        return <ScanSummary />;
      case "urlbase":
        return <URLBase />;
      case "regulations":
        return <Regulations />;
      case "hof":
        return <HallOfFame />;
      case "contribution":
        return <Contributions />;
      default:
        return <URLScan />;
    }
  };

  return (
    <div className="dashboard-container">
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
                Scan Logs
              </a>
            </li>
            <li className={activeSection === "urlbase" ? "active" : ""}>
              <a href="#urlbase" onClick={() => handleLinkClick("urlbase")}>
                URL Base
              </a>
            </li>
            <li className={activeSection === "regulations" ? "active" : ""}>
              <a
                href="#regulations"
                onClick={() => handleLinkClick("regulations")}
              >
                Regulations
              </a>
            </li>
            <li className={activeSection === "hof" ? "active" : ""}>
              <a href="#hof" onClick={() => handleLinkClick("hof")}>
                Hall Of Fames
              </a>
            </li>
            <li className={activeSection === "contribution" ? "active" : ""}>
              <a
                href="#contribution"
                onClick={() => handleLinkClick("contribution")}
              >
                Contribution Regulations
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div
        className="right-panel"
        style={{ minWidth: "1080px", marginLeft: "350px", padding: "30px" }}
      >
        {renderPanel()}
      </div>
    </div>
  );
};

export default DashboardPanel;
