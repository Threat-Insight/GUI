import React from "react";
import "../css/components-css/DashboardFooter.css";

export default function DashboardFooter() {
  return (
    <>
      <div className="dashboard-footer">
        <p className="dashboard-footer-text">
          This is the <span>beta</span> version and is under development. For
          any mistakes reach us at{" "}
          <a
            href="mailto:connect.cipherrats@gmail.com"
            className="dashboard-footer-link"
          >
            report here.
          </a>
        </p>
        <p className="dashboard-footer-text">
          For contribution kindly look at the{" "}
          <a href="/documentation" className="dashboard-footer-link">
            documentation.
          </a>{" "}
          and{" "}
          <a
            href="https://github.com/ProjectSafeLink"
            className="dashboard-footer-link"
          >
            contribute here.
          </a>
        </p>
        <p className="dashboard-footer-text">
          This project is developed and maintained by{" "}
          <a
            href="https://github.com/Threat-Insight"
            className="dashboard-footer-link"
          >
            Team Threat Insight.
          </a>
        </p>
      </div>
    </>
  );
}
