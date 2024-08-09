import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "../components/Navbar";
import TeamsCard from "../components/TeamsCard";
import Rahul from "../img/team-members/Rahul.jpg";
import Kushagra from "../img/team-members/Kushagra.jpg";
import AsheeshSir from "../img/team-members/asheeshsir.jpg";
import ArvindSir from "../img/team-members/ArvindSir.jpeg";
import Abhinav from "../img/team-members/Abhinav.jpg";
import Krishna from "../img/team-members/krishna.jpeg"
export default function Team() {
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
  const Faculty = [
    {
      name: "Dr. Asheesh Tiwari",
      description:
        "Associate Professor | GLA University 🎓 | Cybersecurity Specialist 🔐 | Dedicated Mentor 👨‍🏫 | Ph.D. in Computer Science",
      image: AsheeshSir,
    },
    {
      name: "Mr. Arvind Prasad",
      description:
        "Professor & Researcher 👨‍🏫 | Cybersecurity & Machine Learning Expert 🤖🔐 | Advancing Research & Practical Applications 📊",
      image: ArvindSir,
    },
  ];
  const Students = [
    {
      name: "Rahul Dixit",
      description:
        "Enthusiastic Cybersecurity & Forensics Student | GLA University 📚 | Cyber Awareness Advocate | Creator of MacSpoofer | CNSP",
      image: Rahul,
      LNiconlink: "https://www.linkedin.com/in/secproof/",
      GBiconlink: "https://github.com/syncattacker",
    },
    {
      name: "Kushagra Varshney",
      description:
        "Passionate Computer Science & Engineering Student | GLA University, Mathura 🎓 | Cybersecurity Specialist 🔐 | Top 5% on TryHackMe 🏆 | CCTv1 📜",
      image: Kushagra,
      LNiconlink: "https://www.linkedin.com/in/hacksprob/",
      GBiconlink: "https://github.com/kushagravarshney101",
    },
    {
      name: "Abhinav Singh",
      description:
        "Computer Science Student | Specializing in Cybersecurity & Forensics 🔍🔐 | Top 9% on TryHackMe 🏆 | Cybersecurity Instructor 👨‍🏫 ",
      image: Abhinav,
      LNiconlink: "https://www.linkedin.com/in/abhinav-singh-aba043283/",
      GBiconlink: "https://github.com/secfreaky",
    },
    {
      name: "Krishna Agrawal",
      description:
        "Cybersecurity Enthusiast 🔐 | Cyber Crime Cell Agra 🛡️ | CCNA Certified 📜 | Top 8% @TryHackMe 🏆 | Cyber Crime Investigator Intern ",
      image: Krishna,
      LNiconlink: "https://www.linkedin.com/in/krishna-agrawal-550a4b238/",
      GBiconlink: "https://github.com/securesecy",
    }
  ];
  return (
    <>
      <Helmet>
        <title>Meet The Team</title>
      </Helmet>
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
          Student Contributors
        </p>
        <div
          className="grid grid-two teammembers"
          style={{
            justifyItems: "center",
            gridTemplateColumns: "auto auto",
            rowGap: "50px",
            margin: "0 200px",
          }}
        >
          {Students.map((teammember) => (
            <TeamsCard
              key={teammember.name}
              title={teammember.name}
              author={teammember.description}
              urlToImage={teammember.image}
              icontoLnURL={teammember.LNiconlink}
              icontoGbURL={teammember.GBiconlink}
            />
          ))}
        </div>
        {/* <p
            className="special-text"
            style={{
              fontSize: "20px",
              textAlign: "center",
              margin: " 76px 0 ",
            }}
          >
            The Faculty Mentors
          </p>
        </div>
        <div
          className="grid grid-two teammembers"
          style={{ justifyItems: "center", rowGap: "50px", margin: "0 200px" }}
        >
          {Faculty.map((teammember) => (
            <TeamsCard
              key={teammember.name}
              title={teammember.name}
              author={teammember.description}
              urlToImage={teammember.image}
              icontoLnURL={teammember.LNiconlink}
              icontoGbURL={teammember.GBiconlink}
            />
          ))} */}
        </div>
      </section>
    </>
  );
}
