import React from "react";
import { Navbar } from "../Components/Navbar";
import Home from "../Components/Home/Home";
import AboutMe from "../Components/About_Me/AboutMe";

const Layout = () => {
  return (
    <div>
      <header>
        <Navbar  />
      </header>
      <main>
        <Home />
        <AboutMe />
      </main>
      {/* <footer>
        <p>Copyright © 2023 My Portfolio</p>
      </footer> */}
    </div>
  );
};

export default Layout;
