import React from "react";
import "../css/global.css";
import "../css/components-css/ResourceCard.css";

export default function ResourceCard(props) {
  return (
    <div className="resource-card">
      <div className="resource-logo">
        <img src={props.logo} alt="" className="logo-re" />
      </div>
      <p className="resource-title">{props.title}</p>
      <p className="description">{props.describe}</p>
      <a
        href={props.redirect}
        target="_blank"
        rel="noreferrer"
        className="resource-link"
      >
        Explore
      </a>
    </div>
  );
}
