import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./App";
import Scan from "./pages/Scan";
import Teams from "./components/MeetOurTeam";
import Documentation from "./pages/Documentation";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Routes>
      <Route exact path="/" element={<App />} />
      <Route exact path="/scan" element={<Scan />} />
      <Route exact path="/meet-the-team" element={<Teams />} />
      <Route exact path="/documentation" element={<Documentation />} />
    </Routes>
  </Router>
);
