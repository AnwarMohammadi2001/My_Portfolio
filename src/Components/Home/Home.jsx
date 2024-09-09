import React from "react";
import cover from "../../assets/images/cover1.png";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Home = () => {
  return (
    <div>
      <div className="container min-h-[600px] pt-10  grid grid-cols-1 md:grid-cols-2">
        <div className="flex flex-col pt-10 items-start">
          <h1 className="text-md font-bold text-white">
            Welcome to My World !
          </h1>
          <h1 className="text-4xl font-bold mt-8 text-white">
            Hi , I'm <span className="text-[#ff014f]">Mohammad Anwar</span>
          </h1>
          <p className="text-3xl text-white font-bold mt-3  tracking-wider">
            a Professional Web <br />{" "}
            <span className="text-[#ff014f]">Developer !</span>
          </p>
          <p className="mt-10 text-gray-300 text-lg text-justify">
            I'm passionate about building modern, user-friendly websites using
            JavaScript, React, and Tailwind CSS. My experience includes working
            on various projects, from small startups to large corporations.
            <br />
          </p>

          {/* scoial media logo */}
          <div className="mt-10">
            <h1 className="text-white font-bold text-xl">Find With ME !</h1>
            <div className="flex space-x-5 mt-5 text-gray-400 ">
              <FaFacebook
                className="cursor-pointer shadow-md shadow-gray-300 hover:shadow-none"
                size={28}
              />
              <FaLinkedin
                className="cursor-pointer shadow-md shadow-gray-300 hover:shadow-none"
                size={28}
              />
              <FaGithub
                className="cursor-pointer shadow-md shadow-gray-300 hover:shadow-none"
                size={28}
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="h-[550x] w-[400px]   rounded-xl z-10 shadow-[0px_0px_10px_5px_#de0029]">
            <img src={cover} className="h-[550px] rounded-xl  " alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
