import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import SingleComponent from "./SingleComponent";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/single-component/:id" element={<SingleComponent />} />
    </Routes>
  );
};

export default App;
