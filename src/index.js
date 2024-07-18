import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./App";
import Scan from "./pages/Scan";
import Card from "./components/Card";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Routes>
      <Route exact path="/" element={<App />} />
      <Route exact path="/scan" element={<Scan />} />
      <Route exact path="/cards" element={<Card />} />
    </Routes>
  </Router>
);
