import React from "react";
import "../css/global.css";
import "../css/components-css/Education.css";
import ResourceCard from "./ResourceCard";
import BurpSuite from "../img/platforms/burpsuite.png";
import thm from "../img/platforms/thm.png";
import cybrary from "../img/platforms/cybrary.png";
import courseera from "../img/platforms/coursera.png";
import overthewire from "../img/platforms/overthewire.png";
import vulnhub from "../img/platforms/vulnhub.png";
import ctfl from "../img/platforms/ctfl.png";
import hts from "../img/platforms/hts.png";

export default function Education() {
  const learning = [
    {
      logo: BurpSuite,
      title: "PortSwigger Academy",
      description:
        "Master the art of web security through practical, hands-on labs and tutorials. PortSwigger Academy offers a comprehensive curriculum that covers essential topics and advanced techniques in cybersecurity.",
      href: "https://portswigger.net/web-security",
    },
    {
      logo: thm,
      title: "TryHackMe",
      description:
        "An interactive platform that provides guided exercises and challenges in cybersecurity. From introductory lessons to advanced scenarios, TryHackMe is perfect for learners at all levels.",
      href: "https://tryhackme.com/",
    },
    {
      logo: cybrary,
      title: "Cybrary",
      description:
        "Cybrary offers a wide range of cybersecurity courses, including certifications and specialized training. Enhance your skills with their structured learning paths and hands-on labs.",
      href: "https://www.cybrary.it/career-path",
    },
    {
      logo: courseera,
      title: "Coursera",
      description:
        "Partnering with top universities and institutions, Coursera provides courses on cybersecurity fundamentals, ethical hacking, and more.",
      href: "https://www.coursera.org/",
    },
    {
      logo: overthewire,
      title: "OverTheWire",
      description:
        "Engage in practical challenges and war games designed to teach fundamental and advanced cybersecurity concepts. OverTheWire offers a variety of games that simulate real-world security scenarios.",
      href: "https://overthewire.org/wargames/",
    },
    {
      logo: vulnhub,
      title: "VulnHub",
      description:
        "Download and practice on vulnerable virtual machines with VulnHub. This platform provides a collection of challenges designed to help you test and improve your penetration testing skills.",
      href: "https://www.vulnhub.com/",
    },
    {
      logo: ctfl,
      title: "CTFlearn",
      description:
        "Participate in Capture The Flag (CTF) challenges that test your knowledge in various cybersecurity domains. CTFlearn provides a supportive community and a range of challenges to enhance your skills.",
      href: "https://ctflearn.com/",
    },
    {
      logo: hts,
      title: "Hack This Site",
      description:
        "An educational platform offering practical hacking challenges and missions to improve your ethical hacking skills. Hack This Site is ideal for learners who enjoy solving realistic security problems.",
      href: "https://www.hackthissite.org/",
    },
  ];
  return (
    <section className="section">
      <div className="container">
        <p className="small-text" style={{ textAlign: "center" }}>
          Education
        </p>
        <p className="big-text" style={{ textAlign: "center" }}>
          Explore The
          <br />
          <strong className="special-text"> Educational Resources.</strong>
        </p>
      </div>
      <div className="container">
        <div
          className="grid grid-two-sp"
          style={{ margin: "0 90px", justifyItems: "center" }}
        >
          {learning.map((resource) => (
            <ResourceCard
              logo={resource.logo}
              title={resource.title}
              describe={resource.description}
              redirect={resource.href}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
