import React from "react";
import { motion } from "framer-motion"; // Import framer-motion
import cover from "../../assets/images/cover_2.png";

const AboutMe = () => {
  return (
    <div id="aboutme" className="py-16 mt-5 container">
      <div className="grid grid-cols-1 md:gap-8 md:grid-cols-2">
        {/* Image Section with Framer Motion */}
        <motion.div
          className="flex justify-center order-2 md:order-1 mt-5 md:pt-0  items-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <div className="w-[400px] flex justify-center rounded-xl z-10 border border-black shadow-lg shadow-white">
            <img src={cover} className="h-[500px] rounded-xl" alt="Cover" />
          </div>
        </motion.div>

        {/* Text Content with Framer Motion */}
        <motion.div
          className="pt-10 px-5 md:px-0 order-1 md:order-2 "
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut", delay: 0.3 }}
        >
          <motion.h1
            className="text-slate-900 dark:text-gray-100 font-bold px-5 md:px-0 text-2xl"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            About Me
          </motion.h1>
          <motion.p
            className="lg:w-[500px]  mt-7  text-slate-900 dark:text-gray-100 text-md font-semibold"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          >
            I'm Anwar Mohammadi, a Web Developer from Kabul, with a strong focus
            on frontend. I love to get new experiences and always learn from my
            surroundings.
          </motion.p>
          <motion.p
            className="lg:w-[550px]  mt-5 text-slate-900 dark:text-gray-100 text-md text-justify font-semibold"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
          >
            I'm a passionate and skilled web developer with a Bachelor's degree
            in Computer Science from Kabul Polytechnic University, graduated in
            2024. Since starting my journey in web development in 2020, I have
            gained extensive experience in front-end technologies such as HTML,
            CSS, Tailwind CSS, Bootstrap, JavaScript, and React.js.
          </motion.p>

          {/* Button Animation */}
          <div className="flex justify-center md:justify-end lg:justify-start">
            <motion.button
              className="bg-[#ff014f] text-slate-900 dark:text-gray-100 mt-7 font-bold text-lg px-3 hover:bg-[#930d35] py-1.5 rounded-md"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.8 }}
            >
              Download Resume
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutMe;
