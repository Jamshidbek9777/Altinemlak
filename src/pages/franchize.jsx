import React from "react";
import { getText } from "../languages";

const Franchize = () => {
  return (
    <div className="w-full min-h-screen bg-gray-100">
      {/* Hero Section */}
      <div
        className="relative w-full h-[500px] flex items-center justify-center text-white text-center bg-cover bg-center"
        style={{ backgroundImage: "url('/img/fr.jpg')" }}
      >
        <div className="bg-black bg-opacity-50 w-full h-full flex flex-col items-center justify-center p-6">
          <h1 className="text-4xl font-bold">{getText("franchiseTitle")}</h1>
          <p className="text-lg mt-2">{getText("franchiseSubtitle")}</p>
          <button className="mt-4 bg-yellow-500 text-black px-6 py-2 rounded-md font-semibold hover:bg-yellow-600">
            {getText("applyNow")}
          </button>
        </div>
      </div>

      {/* Content Sections */}
      <div className="container mx-auto p-6">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">
            {getText("whatIsFranchise")}
          </h2>
          <p>{getText("franchiseDescription")}</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">
            {getText("investmentOpportunities")}
          </h2>
          <p>{getText("investmentDescription")}</p>
          <img
            src={"/img/emlak.jpeg"}
            alt="Emlak"
            className="mt-4 rounded-lg shadow-md"
          />
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">
            {getText("masterFranchiseBenefits")}
          </h2>
          <p>{getText("franchiseBenefits")}</p>
        </section>
      </div>
    </div>
  );
};

export default Franchize;
