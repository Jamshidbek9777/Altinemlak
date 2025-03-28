import React, { useContext } from "react";
import { getText } from "../languages";
import { LanguageContext } from "../context/lang";

const Help = () => {
  const { selectedLanguage, selectedFlag, changeLanguage } =
    useContext(LanguageContext);
  return (
    <section className="w-full py-12 bg-gray-50">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">
          {getText("help_title")}
        </h2>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
        {["help_option1", "help_option2", "help_option3", "help_option4"].map(
          (key, index) => (
            <div
              key={index}
              className="text-center p-6 bg-white rounded-lg shadow-lg"
            >
              <div className="mb-4">
                <span
                  className={`inline-flex items-center justify-center w-12 h-12 rounded-full text-xl font-bold ${
                    [
                      "bg-pink-100 text-pink-600",
                      "bg-green-100 text-green-600",
                      "bg-orange-100 text-orange-600",
                      "bg-blue-100 text-blue-600",
                    ][index]
                  }`}
                >
                  {`0${index + 1}`}
                </span>
              </div>
              <h3 className="text-lg font-bold text-gray-700 mb-2">
                {getText(`${key}_title`)}
              </h3>
              <p className="text-gray-500 text-sm">{getText(`${key}_desc`)}</p>
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default Help;
