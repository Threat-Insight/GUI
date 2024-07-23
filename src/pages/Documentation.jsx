import React from "react";
import { Helmet } from "react-helmet";
import "../css/global.css";
import Navbar from "../components/Navbar";
import Docs from "../components/Docs";

export default function Documentation() {
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
        <title>Documentation | ProjectSafeLink</title>
      </Helmet>
      <Navbar links={links} />
      <Docs />
    </>
  );
}
