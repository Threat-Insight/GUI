import React, { useState } from "react";
import axios from "axios";
import DashBoardCard from "../components/DashboardCard"; // Ensure the path is correct
import "../css/components-css/Scan.css";

function Scan() {
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
      <DashBoardCard />
      <div className="App">
        <header className="App-header">
          <h1>Phishing URL Detection</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="Enter URL"
            />
            <button type="submit">Check URL</button>
          </form>
          {prediction !== null && (
            <p>
              The URL is{" "}
              {prediction === "Legitimate" ? "Legitimate" : "Phishing"}.
            </p>
          )}
        </header>
      </div>
      {isLoading && (
        <div className="loading-overlay">
          <div className="spinner"></div>
          <p>Scanning your URL...</p>
        </div>
      )}
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
