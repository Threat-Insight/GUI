import React from "react";
import Navbar from "./Navbar";
import TeamsCard from "./TeamsCard";
import Rahul from "../img/team-members/rahul.jpeg";
import Kushagra from "../img/team-members/Kushagra.jpeg";
import AsheeshSir from "../img/team-members/asheeshsir.jpg";
import ArvindSir from "../img/team-members/ArvindSir.jpeg";

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
  const Faculty = [
    {
      name: "Dr. Asheesh Tiwari",
      description:
        "Dr. Asheesh Tiwari is an Associate Professor at GLA University with a Ph.D. in Computer Science. He specializes in cybersecurity and is dedicated to mentoring students and advancing research in the field.",
      image: AsheeshSir,
    },
    {
      name: "Mr. Arvind Prasad",
      description:
        "Mr. Arvind Prasad is a Professor and researcher specializing in cybersecurity and machine learning. He is recognized for his contributions to both fields and his commitment to integrating theoretical concepts with practical applications.",
      image: ArvindSir,
    },
  ];
  const Students = [
    {
      name: "Rahul Dixit",
      description:
        "Enthusiastic Cybersecurity & Forensics Student | GLA University 📚 | Cyber Awareness Advocate | Creator of MacSpoofer",
      image: Rahul,
    },
    {
      name: "Kushagra Varshney",
      description:
        "I'm a passionate Computer Science & Engineering student specializing in Cybersecurity at GLA University, Mathura, with a top 5% ranking on TryHackMe",
      image: Kushagra,
    },
    {
      name: "",
    },
  ];
  return (
    <>
      {" "}
      <Navbar links={links} />
      <section style={{ padding: "36px 18px" }}>
        <div className="team-heading">
          <p
            className="big-text"
            style={{
              textAlign: "center",
              marginBottom: "18px",
              fontWeight: "600",
              textTransform: "uppercase",
            }}
          >
            Meet The Team
          </p>
          <p
            className="special-text"
            style={{
              fontSize: "20px",
              textAlign: "center",
              marginBottom: " 42px ",
            }}
          >
            The Faculty Mentors
          </p>
        </div>
        <div
          className="grid grid-two teammembers"
          style={{ justifyItems: "center", rowGap: "50px", margin: "0 250px" }}
        >
          {Faculty.map((teammember) => (
            <TeamsCard
              title={teammember.name}
              author={teammember.description}
              urlToImage={teammember.image}
            />
          ))}
        </div>
        <p
            className="special-text"
            style={{
              fontSize: "20px",
              textAlign: "center",
              margin: " 76px 0 ",
            }}
          >
            Student Contributors
          </p>
        <div
          className="grid grid-three teammembers"
          style={{ justifyItems: "center", rowGap: "50px" ,margin:"0 50px" }}
        >
          {Students.map((teammember) => (
            <TeamsCard
              title={teammember.name}
              author={teammember.description}
              urlToImage={teammember.image}
            />
          ))}
        </div>
      </section>
    </>
  );
}
