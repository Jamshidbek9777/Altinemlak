import React from "react";
import { getText } from "../languages";

const Trainings = () => {
  return (
    <section className="py-12 px-6 bg-gray-100 pt-40">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">
          {getText("trainings")}
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          {getText("trainingsDescription")}
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-4">
        <div className="p-4 bg-white rounded-lg shadow">
          <h3 className="text-xl font-semibold text-gray-800">
            {getText("course1")}
          </h3>
          <p className="text-gray-600">{getText("course1Desc")}</p>
        </div>

        <div className="p-4 bg-white rounded-lg shadow">
          <h3 className="text-xl font-semibold text-gray-800">
            {getText("course2")}
          </h3>
          <p className="text-gray-600">{getText("course2Desc")}</p>
        </div>

        <div className="p-4 bg-white rounded-lg shadow">
          <h3 className="text-xl font-semibold text-gray-800">
            {getText("course3")}
          </h3>
          <p className="text-gray-600">{getText("course3Desc")}</p>
        </div>

        <div className="p-4 bg-white rounded-lg shadow">
          <h3 className="text-xl font-semibold text-gray-800">
            {getText("course4")}
          </h3>
          <p className="text-gray-600">{getText("course4Desc")}</p>
        </div>
      </div>

      <div className="mt-6 text-center">
        <p className="text-gray-700">{getText("additionalInfo")}</p>
      </div>
    </section>
  );
};

export default Trainings;
