import React from "react";
import Navbar from "./Navbar";
export default function Documentation() {
    const links = [
        {
          title: "Home",
          redirect: "/",
        },
        {
          title: "About",
          redirect: "/about",
        },
        // {
        //   title: "Documentation",
        //   redirect: "/documentation",
        // },
        {
          title: "Contribute",
          redirect: "https://github.com/syncattacker/ProjectSafeLink",
        },
        {
          title: "Team",
          redirect: "/meet-the-team",
        },
      ];
    
    return <Navbar links={links}/>
    
}