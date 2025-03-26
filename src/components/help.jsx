import React from "react";

const Help = () => {
  return (
    <section className="w-full py-12 bg-gray-50">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">
          How can we help you ?
        </h2>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
        <div className="text-center p-6 bg-white rounded-lg shadow-lg">
          <div className="mb-4">
            <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-pink-100 text-pink-600 text-xl font-bold">
              01
            </span>
          </div>
          <h3 className="text-lg font-bold text-gray-700 mb-2">
            I want to establish a Real Estate Business
          </h3>
          <p className="text-gray-500 text-sm">
            I am entrepreneur wishing to establish my real estate business
            through Franchising system.
          </p>
        </div>

        <div className="text-center p-6 bg-white rounded-lg shadow-lg">
          <div className="mb-4">
            <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-100 text-green-600 text-xl font-bold">
              02
            </span>
          </div>
          <h3 className="text-lg font-bold text-gray-700 mb-2">
            I want to open my business on a contract
          </h3>
          <p className="text-gray-500 text-sm">
            I am entrepreneur wishing to engage in real estate business on a
            contract.
          </p>
        </div>

        <div className="text-center p-6 bg-white rounded-lg shadow-lg">
          <div className="mb-4">
            <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-orange-100 text-orange-600 text-xl font-bold">
              03
            </span>
          </div>
          <h3 className="text-lg font-bold text-gray-700 mb-2">
            Real Estate Agency Course, approved by the Ministry of National
            Education
          </h3>
          <p className="text-gray-500 text-sm">
            I would like to take Real Estate Agency Course, approved by the
            Ministry of National Education within the scope of the Regulation on
            Real Estate Business.
          </p>
        </div>

        <div className="text-center p-6 bg-white rounded-lg shadow-lg">
          <div className="mb-4">
            <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 text-xl font-bold">
              04
            </span>
          </div>
          <h3 className="text-lg font-bold text-gray-700 mb-2">
            Certificate of Professional Competence
          </h3>
          <p className="text-gray-500 text-sm">
            I would like to obtain Responsible Real Estate Agent (Level 5) and
            Real Estate Consultancy (Level 4) based on the national
            qualifications.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Help;
