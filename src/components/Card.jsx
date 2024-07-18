import React from "react";
import "../css/components-css/Card.css";
import "../css/global.css";

export default function Cards(props) {
  return (
    <div className="card">
      <div className="icon">
        <img src={props.urlToImage} alt="Icon" />
      </div>
      <div className="title">{props.title}</div>
      <div className="description">{props.author}</div>
      <div className="detail">{props.details}</div>
      <a href={props.href} target="_blank" rel="noreferrer" className="score">
        Read More
      </a>
    </div>
  );
}
