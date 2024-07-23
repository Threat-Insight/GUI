import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "../components/Navbar";
import "../css/global.css";
import Hero from "../components/Hero";
import CVE from "../components/News";
import Features from "../components/Features";
import Education from "../components/Education";
import Footer from "../components/Footer";

const Home = () => {
  const links = [
    {
      title: "Home",
      redirect: "/",
    },
    {
      title: "Documentation",
      redirect: "/documentation",
    },
    {
      title: "Contribute",
      redirect: "https://github.com/syncattacker/ProjectSafeLink",
    },
    {
      title: "Team",
      redirect: "/meet-the-team",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Threat Insight | AI Based Phishing Detection</title>
      </Helmet>
      <Navbar links={links} />
      <Hero />
      <CVE />
      <Features />
      <Education />
      <Footer />
    </>
  );
};

export default Home;
