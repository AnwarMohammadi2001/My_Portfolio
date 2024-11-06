import React from "react";
import { Navbar } from "../Components/Navbar";
import Home from "../Components/Home/Home";
import AboutMe from "../Components/About_Me/AboutMe";
import Project from "../Components/Projects/Project";
import Skills from "../Components/Skills/Skills";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";

const Layout = () => {
  return (
    <div className="bg-gray-200  dark:bg-[#1E293B]">
      <header>
        <Navbar />
      </header>
      <main>
        <Home />
        <AboutMe />
        <Project />
        <Skills />
        <Contact />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
