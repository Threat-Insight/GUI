import React from "react";
import "../css/components-css/TeamsCard.css"
import "../css/global.css";

export default function TeamsCard(props) {
  return (
    <div className="card-spl">
      <div className="icon-div">
        <img src={props.urlToImage} alt="Icon" className="icon" />
      </div>
      <div className="title">{props.title}</div>
      <div className="description">{props.author}</div>
      <div className="detail">{props.details}</div>
      <a href={props.href} target="_blank" rel="noreferrer" className="score">
        Content
      </a>
    </div>
  );
}