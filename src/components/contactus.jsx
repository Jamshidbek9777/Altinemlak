import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactUs = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 lg:px-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">Get In Touch</h2>
          <p className="text-gray-600 mt-2">
            We'd love to hear from you! Reach out to us with any questions or
            inquiries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Contact Details
            </h3>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-center gap-4">
                <FaPhoneAlt className="text-yellow-500" size={20} />
                <span>+90 123 456 78 90</span>
              </li>
              <li className="flex items-center gap-4">
                <FaEnvelope className="text-yellow-500" size={20} />
                <span>
                  <a
                    href="mailto:info@realestate.com"
                    className="hover:text-yellow-500 transition"
                  >
                    info@eduagency.com
                  </a>
                </span>
              </li>
              <li className="flex items-center gap-4">
                <FaMapMarkerAlt className="text-yellow-500" size={20} />
                <span>Istanbul, Turkey</span>
              </li>
            </ul>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Send a Message
            </h3>
            <form className="space-y-6">
              <div>
                <label className="block text-gray-600 font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full border rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </div>

              <div>
                <label className="block text-gray-600 font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full border rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </div>

              <div>
                <label className="block text-gray-600 font-medium mb-2">
                  Your Message
                </label>
                <textarea
                  rows="5"
                  placeholder="Write your message here..."
                  className="w-full border rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-yellow-500 text-white py-2 px-6 rounded-md hover:bg-yellow-600 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
