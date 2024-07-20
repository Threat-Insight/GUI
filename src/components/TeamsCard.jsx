import React from "react";
import "../css/components-css/TeamsCard.css";
import "../css/global.css";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export default function TeamsCard(props) {
  return (
    <div className="card-spl">
      <div className="icon-div">
        <img src={props.urlToImage} alt="Icon" className="icon" />
      </div>
      <div className="title">{props.title}</div>
      <div className="description">{props.author}</div>
      <div className="detail">{props.details}</div>
      <div className="icons">
        <a href={props.icontoLnURL}>
          <FaLinkedinIn />
        </a>
        <a href={props.icontoGbURL}>
          <FaGithub />
        </a>
      </div>
    </div>
  );
}
