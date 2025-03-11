import React from "react";
import Home from "./Home/Home";
import About from "./About";
import { Routes, Route } from "react-router-dom";

const Router: React.FC = () => {
  return (
    <Routes>
      <Route path="/about" element={<About />} />
      <Route path="/home" element={<Home />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default Router;
