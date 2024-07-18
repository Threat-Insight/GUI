import React from "react";
import { useNavigate } from "react-router-dom";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Globe from "./GlobeComponent";
import "../css/components-css/Hero.css";
import "../css/global.css";

export default function Hero() {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate("/scan");
  };

  return (
    <section className="section">
      <div
        style={{ maxWidth: "1300px", margin: "0 auto" }}
        className="grid grid-two"
      >
        <div className="text-box">
          <p className="small-text">ai-powered phishing detection</p>
          <p className="big-text">
            Pinpoint pivotal threats <br />
            <strong className="special-text">in Phishing Detection.</strong>
          </p>
          <p className="description-text">
            AI-driven phishing URL detection uses machine learning to
            autonomously identify and block malicious links.
          </p>
          <button type="button" className="button" onClick={handleRedirect}>
            Scan now
            <MdOutlineKeyboardArrowRight />
          </button>
        </div>
        <div>
          <Globe />
        </div>
      </div>
    </section>
  );
}
