import React from "react";

const Recommended = () => {
  const realEstates = [
    {
      id: 1,
      title: "Luxury Villa in Istanbul",
      description: "A spacious luxury villa with a sea view in Istanbul.",
      price: "$1,200,000",
      img: "/img/main-bg.jpg", // Replace with real image URL
    },
    {
      id: 2,
      title: "Modern Apartment in Antalya",
      description:
        "A fully furnished modern apartment near the beach in Antalya.",
      price: "$350,000",
      img: "/img/main-bg.jpg",
    },
    {
      id: 3,
      title: "Sea-view Penthouse in Izmir",
      description: "Penthouse with stunning sea views located in Izmir.",
      price: "$750,000",
      img: "/img/main-bg.jpg",
    },
    {
      id: 4,
      title: "Family House in Ankara",
      description:
        "Perfect family house with a garden in a peaceful neighborhood.",
      price: "$500,000",
      img: "/img/main-bg.jpg",
    },
    {
      id: 5,
      title: "Studio Apartment in Bodrum",
      description: "Affordable studio apartment ideal for vacation in Bodrum.",
      price: "$150,000",
      img: "/img/main-bg.jpg",
    },
    {
      id: 6,
      title: "Elegant Mansion in Bursa",
      description: "A grand mansion surrounded by nature in Bursa.",
      price: "$2,000,000",
      img: "/img/main-bg.jpg",
    },
    {
      id: 7,
      title: "Cozy Duplex in Fethiye",
      description: "A cozy duplex home near the mountains in Fethiye.",
      price: "$450,000",
      img: "/img/main-bg.jpg",
    },
    {
      id: 8,
      title: "Luxury Condo in Alanya",
      description: "Modern luxury condo close to the beach in Alanya.",
      price: "$600,000",
      img: "/img/main-bg.jpg",
    },
  ];

  return (
    <section className="w-full py-12 bg-gray-50">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">
          Recommended Real Estate in Turkey
        </h2>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
        {realEstates.map((estate) => (
          <div
            key={estate.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <img
              src={estate.img}
              alt={estate.title}
              className="w-full h-48 object-cover"
            />

            <div className="p-4">
              <h3 className="text-lg font-bold text-gray-800 mb-2">
                {estate.title}
              </h3>
              <p className="text-sm text-gray-600 mb-4">{estate.description}</p>
              <p className="text-md font-semibold text-green-600">
                {estate.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Recommended;
