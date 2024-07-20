import React, { useState, useRef, useEffect } from "react";
import "../css/global.css";
import "../css/components-css/SidePanel.css";
import Documentation from "../img/documentation/documentation.png";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import AbstractContent from "../content/AbstractContent";
import WhatsPhishingContent from "../content/WhatsPhishingContent";
import DetectionAndPreventionContent from "../content/DetectionAndPreventionContent";
import MotiveContent from "../content/MotiveContent";
import Abstract from "../img/documentation/phishing-content.png";
import WhatContent from "../img/documentation/what-content.png";
import Detection from "../img/documentation/detection-content.png";
import Motive from "../img/documentation/motive-content.png";

export default function Docs() {
  const [selectedSection, setSelectedSection] = useState("Introduction");
  const [selectedSubtopic, setSelectedSubtopic] = useState("Abstract");
  const [expandedSections, setExpandedSections] = useState({
    Introduction: true,
  });

  const headers = [
    {
      text: "Introduction",
      subtopics: [
        {
          image: Abstract,
          name: "Abstract",
          content: AbstractContent,
        },
        {
          image: WhatContent,
          name: "What's Phishing ?",
          content: WhatsPhishingContent,
        },
        {
          image: Detection,
          name: "Detect & Prevent",
          content: DetectionAndPreventionContent,
        },
        {
          image: Motive,
          name: "Motive",
          content: MotiveContent,
        },
      ],
    },
    {
      text: "Model",
      subtopics: [
        { name: "Benefits", content: "Content for Benefits" },
        { name: "Features", content: "Content for Features" },
      ],
    },
    {
      text: "Model Diagram",
      subtopics: [{ name: "Diagram", content: "Content for Diagram" }],
    },
    {
      text: "Site Mapping",
      subtopics: [{ name: "Site Map", content: "Content for Site Map" }],
    },
  ];

  const subtopicRefs = useRef({});
  headers.forEach((header) => {
    header.subtopics.forEach((subtopic) => {
      if (!subtopicRefs.current[subtopic.name]) {
        subtopicRefs.current[subtopic.name] = React.createRef();
      }
    });
  });

  useEffect(() => {
    if (subtopicRefs.current[selectedSubtopic]) {
      subtopicRefs.current[selectedSubtopic].current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [selectedSubtopic]);

  const handleSectionClick = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const handleSubtopicClick = (section, subtopic) => {
    setSelectedSection(section);
    setSelectedSubtopic(subtopic);
  };

  return (
    <div className="side-container">
      <div className="side-panel">
        <div className="docs">
          <img
            src={Documentation}
            alt="Documentation Of Next Gen AI For Phishing Detection"
            className="docs-image"
          />
          <div className="info">
            <h1 className="docs-text-heading">docs</h1>
            <p className="version">
              <span className="release">Release</span> 1.0
            </p>
          </div>
        </div>
        <div className="panel">
          {headers.map((header, index) => (
            <div key={index}>
              <div
                className={`panel-header ${
                  expandedSections[header.text] ? "expanded" : ""
                }`}
                onClick={() => handleSectionClick(header.text)}
              >
                <div className="arrow">
                  {expandedSections[header.text] ? (
                    <FaChevronDown />
                  ) : (
                    <FaChevronUp />
                  )}
                </div>
                <h2 className="panel-headings">{header.text}</h2>
              </div>
              <ul
                className={`subtopics ${
                  expandedSections[header.text] ? "show" : ""
                }`}
              >
                {header.subtopics.map((subtopic, idx) => (
                  <li
                    key={idx}
                    onClick={() =>
                      handleSubtopicClick(header.text, subtopic.name)
                    }
                    className={
                      selectedSubtopic === subtopic.name &&
                      selectedSection === header.text
                        ? "list-hover selected"
                        : "list-hover"
                    }
                  >
                    {subtopic.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="content">
        {headers.map((header) =>
          header.subtopics.map((subtopic) => (
            <div
              key={subtopic.name}
              ref={subtopicRefs.current[subtopic.name]}
              className="main-content"
            >
              <div className="style-docs">
                <div>
                  <p className="subtopics-name">{subtopic.name}</p>
                </div>
                <div>
                  <img
                    src={subtopic.image}
                    alt="Phishing Example"
                    className="docs-content-image"
                  />
                </div>
              </div>
              <p className="main-para">{subtopic.content}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
