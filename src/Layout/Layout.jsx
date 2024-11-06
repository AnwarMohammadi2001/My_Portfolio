import React, { useState, useEffect } from "react";
import { Navbar } from "../Components/Navbar";
import Home from "../Components/Home/Home";
import AboutMe from "../Components/About_Me/AboutMe";
import Project from "../Components/Projects/Project";
import Skills from "../Components/Skills/Skills";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";
import { IoMdArrowRoundUp } from "react-icons/io";

const Layout = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Function to handle scroll event
  const handleScroll = () => {
    if (window.scrollY > 200) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  // Add scroll event listener when the component is mounted
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Function to scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="bg-gray-200 relative dark:bg-[#1E293B]">
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

      {/* Scroll to Top Button */}
      {isScrolled && (
        <div className="fixed bottom-10 right-10">
          <button
            onClick={scrollToTop}
            className="bg-slate-900 text-white dark:bg-gray-100 dark:text-slate-900 p-3 rounded-full shadow-lg hover:bg-slate-700 transition duration-300"
          >
            <IoMdArrowRoundUp size={24} />
          </button>
        </div>
      )}
    </div>
  );
};

export default Layout;
