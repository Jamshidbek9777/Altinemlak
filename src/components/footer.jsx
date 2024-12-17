import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-4 lg:px-20">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Branding Section */}
          <div>
            <h2 className="text-2xl font-bold text-yellow-400 mb-4">
              Our Company
            </h2>
            <p className="text-gray-300">
              Discover your dream property in Turkey with us. Reliable services
              and trusted solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-yellow-400 mb-3">
              Quick Links
            </h3>
            <ul>
              <li>
                <Link to="/" className="hover:text-yellow-400 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-yellow-400 transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/properties"
                  className="hover:text-yellow-400 transition"
                >
                  Properties
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-yellow-400 transition"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-lg font-semibold text-yellow-400 mb-3">
              Contact
            </h3>
            <ul>
              <li className="mb-1">
                <span className="font-bold">Phone:</span> +90 123 456 78 90
              </li>
              <li className="mb-1">
                <span className="font-bold">Email:</span>{" "}
                <a
                  href="mailto:info@realestate.com"
                  className="hover:text-yellow-400 transition"
                >
                  info@realestate.com
                </a>
              </li>
              <li>
                <span className="font-bold">Address:</span> Istanbul, Turkey
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold text-yellow-400 mb-3">
              Follow Us
            </h3>
            <div className="flex gap-4">
              <a href="#" className="hover:text-yellow-400 transition">
                <FaFacebookF size={20} />
              </a>
              <a href="#" className="hover:text-yellow-400 transition">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="hover:text-yellow-400 transition">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="hover:text-yellow-400 transition">
                <FaLinkedinIn size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} Real Estate Co. All Rights
            Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
