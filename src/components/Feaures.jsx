import React from "react";
import "../css/global.css";
import "../css/components-css/Features.css";
import FeaturesCard from "./FeaturesCard";
import sslImage from "../img/backimages/ssl-protection.png";
import AI from "../img/backimages/AI.jpg";
import Dashboard from "../img/backimages/dashboard.png";
import stats from "../img/backimages/stats.png";
import Education from "../img/backimages/education.png";
import Learning from "../img/backimages/learning.png";

export default function Features() {
  const features = [
    {
      title: "Real-Time URL Analysis",
      description:
        "Instantly scans and evaluates URLs to detect phishing attempts before they can cause harm.",
      image: sslImage,
    },
    {
      title: "Machine Learning Detection",
      description:
        "Utilizes advanced machine learning algorithms to identify and block phishing attacks based on patterns and behaviors.",
      image: AI,
    },
    {
      title: "User-Friendly Dashboard",
      description:
        "Provides an intuitive interface for users to monitor and manage detected threats easily.",
      image: Dashboard,
    },
    {
      title: "Comprehensive Reporting",
      description:
        "Generates detailed reports on phishing attempts, including source, type, and potential impact.",
      image: stats,
    },
    {
      title: "Educational Resources",
      description:
        "Provides a library of educational materials, including articles and tutorials, to help users understand phishing tactics and how to stay protected online.",
      image: Education,
    },
    {
      title: "Continuous Learning",
      description:
        "Regularly updates its detection capabilities by learning from new phishing techniques and incorporating the latest threat intelligence.",
      image: Learning,
    },
  ];
  return (
    <section className="section">
      <div className="container">
        <div className="section-heading">
          <p className="small-text" style={{ textAlign: "center" }}>
            Next-Gen AI Phishing Defense
          </p>
          <p
            className="big-text"
            style={{ textAlign: "center", marginBottom: "12px" }}
          >
            A Phishing Detection System <br />
            <strong className="special-text">
              {" "}
              Designed to Protect Every User
            </strong>
          </p>
          <p
            className="description-text"
            style={{ textAlign: "center", margin: "8px" }}
          >
            Lightning-speed, automated, and highly secure.
          </p>
        </div>
        <div
          className="grid grid-three features"
          style={{ justifyItems: "center", rowGap: "25px" }}
        >
          {features.map((feature) => (
            <FeaturesCard
              title={feature.title}
              description={feature.description}
              imageURL={feature.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
