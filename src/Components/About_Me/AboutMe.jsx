import React from "react";
import cover from "../../assets/images/cover_2.png";
const AboutMe = () => {
  return (
    <div className="py-16">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="flex justify-center items-center">
          <div className=" w-[400px] flex justify-center  rounded-xl z-10 border border-black shadow-lg shadow-white ">
            <img src={cover} className="h-[500px] rounded-xl  " alt="" />
          </div>
        </div>
        <div className="pt-10">
          <h1 className="text-white font-bold text-2xl">About Me</h1>
          <p className="w-[500px] mt-7 text-gray-300 text-md font-semibold">
            I'm Anwar Mohammadi A Web Developer from Kabul, with a strong focus
            in frontend. I Love to get new experiance and always learn from my
            surroundings.
          </p>
          <p className="w-[550px] mt-5 text-gray-300 text-md font-semibold">
            I'm a passionate and skilled web developer with a Bachelor's degree
            in Computer Science from Kabul Polytechnic University, graduated in
            2024. Since starting my journey in web development in 2020, I have
            gained extensive experience in front-end technologies such as HTML,
            CSS, Tailwind CSS, Bootstrap, JavaScript, and React.js.
          </p>
          <p className="w-[550px] mt-5 text-gray-300 text-md font-semibold">
            I enjoy creating responsive, user-friendly web applications and have
            a keen eye for design. My proficiency in React and Tailwind CSS
            allows me to build modern and dynamic web interfaces.
          </p>
          <button className="bg-[#ff014f] text-white mt-7 font-bold text-lg px-3 hover:bg-[#930d35] py-1.5 rounded-md">
            Download Resume
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
