import React from "react";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import cover from "../../assets/images/cover1.png";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Home = () => {
  const sentence = "Mohammad Anwar";
  const letters = sentence.split("");
  const [isInView, setIsInView] = useState(false);
  const textRef = useRef(null); // Reference to the text
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true); // Set to true when in view
        } else {
          setIsInView(false); // Reset to false when out of view (optional)
        }
      },
      { threshold: 0.1 } // Adjust the threshold as per your needs
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current);
      }
    };
  }, []);
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.09, // Stagger each child (letter) by 0.08s
      },
    },
  };
  const child = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div>
      <div
        id="home"
        className="container  mx-auto min-h-[600px] pt-10  grid grid-cols-1 md:gap-8 lg:gap-5 md:grid-cols-2"
      >
        <div className="flex flex-col pt-10 items-center md:items-start">
          <h1 className="text-md font-bold text-white">
            Welcome to My World !
          </h1>
          <motion.h1
            ref={textRef} // Reference to observe this element
            className="text-4xl font-bold mt-8 text-white"
            variants={container}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"} // Play animation when in view
          >
            {"Hi, I'm "}
            {letters.map((letter, index) => (
              <motion.span
                key={index}
                className={
                  letter === "Mohammad Anwar"
                    ? "text-[#ff014f]"
                    : "text-[#ff014f]"
                }
                variants={child}
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </motion.h1>
          <p className="text-3xl text-white font-bold mt-3  tracking-wider">
            a Professional Web <br />{" "}
            <span className="text-[#ff014f]">
              Developer{" "}
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5, scale: 2 }}
                transition={{
                  duration: 0.5,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatDelay: 1,
                }}
              >
                !
              </motion.span>
            </span>
          </p>
          <p className="mt-10 text-gray-300 text-lg text-justify">
            I'm passionate about building modern, user-friendly websites using
            JavaScript, React, and Tailwind CSS. My experience includes working
            on various projects, from small startups to large corporations.
            <br />
          </p>

          {/* scoial media logo */}
          <div className="mt-10">
            <h1 className="text-white font-bold text-xl">Follow ME !</h1>
            <div className="flex space-x-5 mt-5 text-gray-400 ">
              <a
                href="https://www.facebook.com/anwar.lashkari.5"
                target="_blanck"
              >
                <FaFacebook
                  className="cursor-pointer shadow-md shadow-gray-300 hover:shadow-none"
                  size={28}
                />
              </a>
              <a
                href="https://www.linkedin.com/in/anwar-mohammadi/"
                target="_blanck"
              >
                <FaLinkedin
                  className="cursor-pointer shadow-md shadow-gray-300 hover:shadow-none"
                  size={28}
                />
              </a>
              <a href="https://github.com/AnwarMohammadi2001" target="_blanck">
                <FaGithub
                  className="cursor-pointer shadow-md shadow-gray-300 hover:shadow-none"
                  size={28}
                />
              </a>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center mt-10 md:mt-0">
          <div className="h-[550x] w-[400px]   rounded-xl z-10 shadow-[0px_0px_10px_5px_#de0029]">
            <img src={cover} className="h-[550px] rounded-xl  " alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
