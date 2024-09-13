import React from "react";
import { Navbar } from "../Components/Navbar";
import Home from "../Components/Home/Home";
import AboutMe from "../Components/About_Me/AboutMe";
import Project from "../Components/Projects/Project";
import Skills from "../Components/Skills";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";

const Layout = () => {
  return (
    <div>
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
