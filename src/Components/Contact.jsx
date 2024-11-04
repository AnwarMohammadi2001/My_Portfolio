import React from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const Contact = () => {
  const sectionAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const iconStyle = "text-5xl mr-4 bg-gray-700 p-2 text-[#2bb987] rounded-md";
  const infoStyle = "text-md font-semibold text-gray-200  ";
  const textStyle = "text-gray-600";

  return (
    <div id="contact" className="container mx-auto md:px-20 py-12">
      <motion.div
        className="container grid grid-cols-1 lg:grid-cols-3 gap-12"
        initial="hidden"
        animate="visible"
        variants={sectionAnimation}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        {/* Contact Form Section */}
        <div className="bg-gray-700 rounded-lg col-span-2 shadow-lg p-5 md:p-10">
          <h2 className="text-3xl font-semibold mb-6 text-[#2bb987] ">
            Let's Work together
          </h2>
          <form action="#" method="Post" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* Floating Label for Name  */}
              <div className="relative group">
                <input
                  required
                  type="text"
                  className="border-2 w-full  text-gray-300 px-3 focus:text-[#2bb987] text-lg py-2 focus:outline-none bg-transparent rounded-md focus:border-[#2bb987] peer"
                />
                <span className="absolute left-0 top-3 px-2 text-md uppercase text-white peer-focus:text-[#2bb987] pointer-events-none peer-focus:text-sm peer-focus:-translate-y-5  duration-200 peer-focus:border-r-2 peer-focus:border-[#2bb987] peer-focus:border-l-2 bg-gray-700 peer-valid:text-sm peer-valid:-translate-y-5 ml-4">
                  Enter Your Name
                </span>
              </div>
              {/* Floating Label for Email */}
              <div className="relative group">
                <input
                  required
                  type="email"
                  className="border-2 w-full  text-gray-300 px-3 focus:text-[#2bb987] text-lg py-2 focus:outline-none bg-transparent rounded-md focus:border-[#2bb987] peer"
                />
                <span className="absolute left-0 top-3 px-2 text-md uppercase text-white peer-focus:text-[#2bb987] pointer-events-none peer-focus:text-sm peer-focus:-translate-y-5 duration-200 peer-focus:border-r-2 peer-focus:border-[#2bb987] peer-focus:border-l-2 bg-gray-700 peer-valid:text-sm peer-valid:-translate-y-5 ml-4">
                  Enter Your Email
                </span>
              </div>
            </div>

            {/* Message Textarea */}
            <div>
              <label htmlFor="message" className="block text-gray-700 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="6"
                required
                className="w-full px-4 py-2 border-2 border-gray-300 text-gray-300 rounded-lg focus:border-[#2bb987] focus:outline-none bg-transparent max-[400]"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center md:justify-start lg:justify-end">
              <button
                type="submit"
                className=" bg-[#2bb987] text-white py-2 px-4 rounded-lg font-bold hover:bg-[#45ecb2] transition duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>

        {/* Contact Information Section */}
        <div className="bg-transparent rounded-lg flex items-center  p-8">
          <div className="space-y-6">
            <motion.div
              className="flex items-center"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              <FaEnvelope className={` ${iconStyle}`} />
              <div className="">
                <h3 className={infoStyle}>Email</h3>
                <p className={textStyle}>anwarmohammadi1390@gmail.com</p>
              </div>
            </motion.div>

            <motion.div
              className="flex items-center"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut", delay: 0.2 }}
            >
              <FaPhone className={` ${iconStyle}`} />
              <div>
                <h3 className={infoStyle}>Phone</h3>
                <p className={textStyle}>+93772387935</p>
              </div>
            </motion.div>

            <motion.div
              className="flex items-center"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut", delay: 0.4 }}
            >
              <FaMapMarkerAlt className={`${iconStyle}`} />
              <div>
                <h3 className={infoStyle}>Address</h3>
                <p className={textStyle}>Barchi, Kabul, Afghanistan</p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
