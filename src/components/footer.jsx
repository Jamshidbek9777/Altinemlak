import React, { useContext } from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { getText } from "../languages";
import { LanguageContext } from "../context/lang";

const Footer = () => {
  const { selectedLanguage, selectedFlag, changeLanguage } =
    useContext(LanguageContext);
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-4 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h2 className="text-2xl font-bold text-yellow-400 mb-4">
              {getText("companyName")}
            </h2>
            <p className="text-gray-300">{getText("companyDescription")}</p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-semibold text-yellow-400 mb-3">
              {getText("quickLinks")}
            </h3>
            <ul>
              <li>
                <Link to="/" className="hover:text-yellow-400 transition">
                  {getText("home")}
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-yellow-400 transition">
                  {getText("aboutUs")}
                </Link>
              </li>
              <li>
                <Link
                  to="/properties"
                  className="hover:text-yellow-400 transition"
                >
                  {getText("properties")}
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-yellow-400 transition"
                >
                  {getText("contactUs")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-yellow-400 mb-3">
              {getText("contact")}
            </h3>
            <ul>
              <li className="mb-1">
                <span className="font-bold">{getText("phone")}:</span> +998 90
                277 73 66
              </li>
              <li className="mb-1">
                <span className="font-bold">{getText("email")}:</span>{" "}
                <a
                  href="mailto:info@eduagency.uz"
                  className="hover:text-yellow-400 transition"
                >
                  info@eduagency.uz
                </a>
              </li>
              <li>
                <span className="font-bold">{getText("address")}:</span>{" "}
                {getText("tashkent")}
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold text-yellow-400 mb-3">
              {getText("followUs")}
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
            &copy; {new Date().getFullYear()} {getText("copyright")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
