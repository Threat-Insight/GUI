import React, { useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import URLCount from "../components/URLCount";
import PhishingCount from "../components/PhishingCount";
import LegitimateCount from "../components/LegitimateCount";
import "../css/components-css/Scan.css";
import DashboardPanel from "../components/DashboardPanel";
import URLClassificationPieChart from "../components/PieChart";
import { GiFishingHook } from "react-icons/gi";

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
  const [url, setUrl] = useState("");
  const [prediction, setPrediction] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await axios.post("http://localhost:5000/scan", { url });
      setPrediction(response.data.prediction);
      console.log(response.data);
    } catch (error) {
      console.error("Error making prediction:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Navbar links={links} />
      <section className="scan">
        <div className="main-dashboard">
          <DashboardPanel />
          <div className="scan-dashboard">
            <div className="dashboard-counters">
              <URLCount />
              <PhishingCount />
              <LegitimateCount />
            </div>
            <div className="scan-details">
              <div className="App">
                <header className="scan-header">
                  <p className="scan-heading">Being Tricked ?</p>
                  <GiFishingHook className="absolute-icon" />
                  <div className="scan-describe">
                    <p className="scan-describe-one">
                      Doubting the Legitimacy of Links?
                    </p>
                    <p className="scan-describe-two">
                      Just enter the URL, and our advanced technology will
                      swiftly analyze it for potential threats. Stay secure and
                      browse confidently.
                    </p>
                  </div>
                  <form onSubmit={handleSubmit} className="scan-form">
                    <input
                      className="scan-url"
                      type="text"
                      value={url}
                      onChange={(e) => setUrl(e.target.value)}
                      placeholder="Let us Secure You"
                    />
                    <button type="submit" className="check-btn">
                      check
                    </button>
                  </form>
                  {prediction !== null && (
                    <p>
                      The URL is{" "}
                      {prediction === "Legitimate" ? "Legitimate" : "Phishing"}.
                    </p>
                  )}
                </header>
              </div>
              <URLClassificationPieChart />
            </div>
            {isLoading && (
              <div className="loading-overlay">
                <div className="spinner"></div>
                <p>Scanning your URL...</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default Scan;

// import React, { useState } from "react";
// import axios from "axios";
// import "../css/components-css/Scan.css";

// function Scan() {
//   const [url, setUrl] = useState("");
//   const [prediction, setPrediction] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);
//     try {
//       const response = await axios.post("http://localhost:5000/scan", {
//         url,
//       });
//       setPrediction(response.data.prediction);
//       console.log(response.data);
//     } catch (error) {
//       console.error("Error making prediction:", error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <>
//       <div className="App">
//         <header className="App-header">
//           <h1>Phishing URL Detection</h1>
//           <form onSubmit={handleSubmit}>
//             <input
//               type="text"
//               value={url}
//               onChange={(e) => setUrl(e.target.value)}
//               placeholder="Enter URL"
//             />
//             <button type="submit">Check URL</button>
//           </form>
//           {prediction !== null && (
//             <p>
//               The URL is{" "}
//               {prediction === "Legitimate" ? "Legitimate" : "Phishing"}.
//             </p>
//           )}
//         </header>
//       </div>
//       {isLoading && (
//         <div className="loading-overlay">
//           <div className="spinner"></div>
//           <p>Scanning your URL...</p>
//         </div>
//       )}
//     </>
//   );
// }

// export default Scan;
