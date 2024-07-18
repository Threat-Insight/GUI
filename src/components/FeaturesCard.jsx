import React from "react";
import "../css/global.css";
import "../css/components-css/Features.css";

export default function FeaturesCard(props) {
  return (
    <div className="card-container">
      <p className="title">{props.title}</p>
      <p className="description">{props.description}</p>
      <div
        className="backimage"
        style={{
          backgroundImage: `url(${props.imageURL})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          width: "100%",
          paddingBottom: "100%",
        }}
      ></div>
    </div>
  );
}
