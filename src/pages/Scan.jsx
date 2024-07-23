import { Helmet } from "react-helmet";

import Navbar from "../components/Navbar";

import "../css/components-css/Scan.css";

import DashboardFooter from "../components/DashboardFooter";
import DashboardPanel from "../components/DashboardPanel";

function Scan() {
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
        <title>Scan Dashboard</title>
      </Helmet>
      <Navbar links={links} />
      <DashboardPanel />
      <DashboardFooter />
    </>
  );
}

export default Scan;
