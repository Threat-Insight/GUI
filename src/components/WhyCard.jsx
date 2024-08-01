import React from "react";
import PropTypes from "prop-types";
import "../css/components-css/WhyCard.css"; // Assuming you have a CSS file for styling

const WhyCard = ({ source, alt, heading, content }) => {
  return (
    <div className="whycard">
      <div className="card-content">
        <img src={source} alt={alt} className="why-image" />
        <h2>{heading}</h2>
        <p>{content}</p>
      </div>
    </div>
  );
};

WhyCard.propTypes = {
  heading: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default WhyCard;
