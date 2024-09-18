import React from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const Contact = () => {
  const sectionAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const iconStyle = "text-2xl mr-4";
  const infoStyle = "text-lg font-semibold text-gray-800";
  const textStyle = "text-gray-600";

  return (
    <div id="contact" className="container mx-auto px-4 py-12">
      <motion.div
        className="container grid grid-cols-1 lg:grid-cols-2 gap-8"
        initial="hidden"
        animate="visible"
        variants={sectionAnimation}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        {/* Contact Form Section */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-semibold mb-6 text-gray-800">
            Contact Form
          </h2>
          <form action="#" method="POST" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Information Section */}
        <div className="bg-gray-100 rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-semibold mb-6 text-gray-800">
            Contact Details
          </h2>
          <div className="space-y-6">
            <motion.div
              className="flex items-center"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              <FaEnvelope className={`text-blue-500 ${iconStyle}`} />
              <div>
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
              <FaPhone className={`text-green-500 ${iconStyle}`} />
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
              <FaMapMarkerAlt className={`text-red-500 ${iconStyle}`} />
              <div>
                <h3 className={infoStyle}>Address</h3>
                <p className={textStyle}>Baraki, Kabul, Afghanistan</p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
