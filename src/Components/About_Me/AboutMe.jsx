import React from "react";
import { motion } from "framer-motion"; // Import framer-motion
import cover from "../../assets/images/cover_2.png";

const AboutMe = () => {
  return (
    <div id="aboutme" className="py-16 overflow-x-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Image Section with Framer Motion */}
        <motion.div
          className="flex justify-center  items-center"
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
          className="pt-10"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut", delay: 0.3 }}
        >
          <motion.h1
            className="text-white font-bold text-2xl"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            About Me
          </motion.h1>
          <motion.p
            className="w-[500px] mt-7 text-gray-300 text-md font-semibold"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          >
            I'm Anwar Mohammadi, a Web Developer from Kabul, with a strong focus
            on frontend. I love to get new experiences and always learn from my
            surroundings.
          </motion.p>
          <motion.p
            className="w-[550px] mt-5 text-gray-300 text-md font-semibold"
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
          <motion.button
            className="bg-[#ff014f] text-white mt-7 font-bold text-lg px-3 hover:bg-[#930d35] py-1.5 rounded-md"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.8 }}
          >
            Download Resume
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutMe;
