import React from "react";
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
      <Navbar links={links} />
      <Docs />
    </>
  );
}
