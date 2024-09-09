import React from "react";
import cover from "../../assets/images/cover_2.png";
const AboutMe = () => {
  return (
    <div className="pt-16">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="flex justify-center items-center">
          <div className=" w-[400px] flex justify-center  rounded-xl z-10 shadow-[0px_0px_10px_5px_#de0029]">
            <img src={cover} className="h-[450px] rounded-xl  " alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
