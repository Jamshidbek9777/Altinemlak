import React, { useContext } from "react";
import { getText } from "../languages/index"; // Adjust the import path if needed
import { LanguageContext } from "../context/lang";

const Header = () => {
  const { selectedLanguage, selectedFlag, changeLanguage } =
    useContext(LanguageContext);
  return (
    <div className="w-full h-screen relative overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/img/vi.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 flex items-center justify-center p-6">
        <div className="text-center text-white max-w-6xl px-4">
          <h2 className="text-2xl lg:text-4xl font-extrabold animate-fade-in mb-4">
            🌐 {getText("header_title")}
          </h2>
          <h3 className="text-lg lg:text-2xl font-light mb-6">
            {getText("header_subtitle")}
          </h3>
          <div>
            <h1>{getText("header_description")}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
