import React from "react";
import Navbar from "./Navbar";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Team() {
  const links = [
    {
      title: "Home",
      redirect: "/",
    },
    {
      title: "About",
      redirect: "/about",
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
  return <Navbar links={links} />;
}
