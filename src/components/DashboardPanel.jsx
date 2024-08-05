import React, { useState } from "react";
import "../css/components-css/DashboardPanel.css";
import DashboardLogo from "../img/dashboard/dashboard-logo.png";
import URLScan from "./URLScan";
import ScanSummary from "./ScanSummary";
import URLBase from "./URLBase";
import Terms from "./Terms";
import "../css/components-css/Scan.css";
import { GoChecklist } from "react-icons/go";
import { FaClipboardCheck, FaDatabase } from "react-icons/fa";
import { MdBugReport } from "react-icons/md";
import { VscHeartFilled } from "react-icons/vsc";
import Regulations from "./Regulations";

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
      case "terms":
        return <Terms />;
      default:
        return <URLScan />;
    }
  };

  return (
    <section style={{ backgroundColor: "#f1f1fb" }}>
      <div className="dashboard-container">
        <div className="left-panel">
          <div className="dashboard-logo">
            <img src={DashboardLogo} alt="Logo" />
            <p className="dashboard-text">dashboard</p>
          </div>
          <nav className="linker">
            <ul>
              <li className={activeSection === "scan" ? "active" : ""}>
                <a
                  href="#scan"
                  onClick={() => handleLinkClick("scan")}
                  className="linker-link"
                >
                  <FaClipboardCheck /> Scan URL
                </a>
              </li>
              <li className={activeSection === "summary" ? "active" : ""}>
                <a
                  href="#summary"
                  onClick={() => handleLinkClick("summary")}
                  className="linker-link"
                >
                  <GoChecklist /> Scan Logs
                </a>
              </li>
              <li className={activeSection === "urlbase" ? "active" : ""}>
                <a
                  href="#urlbase"
                  onClick={() => handleLinkClick("urlbase")}
                  className="linker-link"
                >
                  <FaDatabase />
                  URL Base
                </a>
              </li>
              <li className={activeSection === "regulations" ? "active" : ""}>
                <a
                  href="#regulations"
                  onClick={() => handleLinkClick("regulations")}
                  className="linker-link"
                >
                  <MdBugReport />
                  Report
                </a>
              </li>
              <li className={activeSection === "terms" ? "active" : ""}>
                <a
                  href="#terms"
                  onClick={() => handleLinkClick("terms")}
                  className="linker-link"
                >
                  <VscHeartFilled />
                  Terms Of Use
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
    </section>
  );
};

export default DashboardPanel;
