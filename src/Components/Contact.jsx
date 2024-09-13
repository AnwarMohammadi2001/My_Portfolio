import React from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div className=" mx-auto px-4 py-12">
      <div className="container">
        {/* Contact Form Section */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Contact Form */}
          <div className="flex-1">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              Contact Form
            </h2>
            <form
              action="#"
              method="POST"
              className="p-6 rounded-lg shadow-lg"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
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
              <div className="mb-4">
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

          {/* Contact Information */}
          <div className="flex-1">
            <h2 className="text-2xl font-semibold mb-4 text-gray-300">
              Contact Details
            </h2>
            <div className="p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <FaEnvelope className="text-blue-500 text-2xl mr-4" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Email</h3>
                  <p className="text-gray-600">anwarmohammadi1390@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center mb-4">
                <FaPhone className="text-green-500 text-2xl mr-4" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Phone</h3>
                  <p className="text-gray-600">+93772387935</p>
                </div>
              </div>
              <div className="flex items-center">
                <FaMapMarkerAlt className="text-red-500 text-2xl mr-4" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    Address
                  </h3>
                  <p className="text-gray-600">Baraki, Kabul, Afghanistan</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
