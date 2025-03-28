import React from "react";
import { getText } from "../languages";

const RealEstateTech = () => {
  return (
    <section className="py-12 px-6 bg-gray-100 pt-40">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">
          {getText("realEstateTechTitle")}
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          {getText("realEstateTechSubtitle")}
        </p>
      </div>

      {/* Services */}
      <div className="max-w-4xl mx-auto space-y-4">
        <div className="p-4 bg-white rounded-lg shadow">
          <h3 className="text-xl font-semibold text-gray-800">
            {getText("crmSystemTitle")}
          </h3>
          <p className="text-gray-600">{getText("crmSystemDescription")}</p>
        </div>

        <div className="p-4 bg-white rounded-lg shadow">
          <h3 className="text-xl font-semibold text-gray-800">
            {getText("webMobileTitle")}
          </h3>
          <p className="text-gray-600">{getText("webMobileDescription")}</p>
        </div>

        <div className="p-4 bg-white rounded-lg shadow">
          <h3 className="text-xl font-semibold text-gray-800">
            {getText("digitalMarketingTitle")}
          </h3>
          <p className="text-gray-600">
            {getText("digitalMarketingDescription")}
          </p>
        </div>

        <div className="p-4 bg-white rounded-lg shadow">
          <h3 className="text-xl font-semibold text-gray-800">
            {getText("investmentTitle")}
          </h3>
          <p className="text-gray-600">{getText("investmentDescription")}</p>
        </div>

        <div className="p-4 bg-white rounded-lg shadow">
          <h3 className="text-xl font-semibold text-gray-800">
            {getText("portfolioTitle")}
          </h3>
          <p className="text-gray-600">{getText("portfolioDescription")}</p>
        </div>
      </div>

      {/* Extra Features */}
      <div className="mt-6 text-center">
        <p className="text-gray-700">{getText("extraFeatures")}</p>
      </div>
    </section>
  );
};

export default RealEstateTech;
