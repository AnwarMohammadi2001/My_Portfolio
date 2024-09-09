import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./Components/Navbar";
import Layout from "./Layout/Layout";
import Home from "./Components/Home/Home";
import AboutMe from "./Components/About_Me/AboutMe";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/aboutme" element={<AboutMe />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
