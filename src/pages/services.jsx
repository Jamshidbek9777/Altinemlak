import React from "react";

const Services = () => {
  return (
    <div className="w-full min-h-screen bg-gray-100">
      {/* Hero Section */}
      <div
        className="relative w-full h-[500px] flex items-center justify-center text-white text-center bg-cover bg-center"
        style={{
          backgroundImage: "url('/img/srbg.jpg')",
        }}
      >
        <div className="bg-black bg-opacity-50 w-full h-full flex flex-col items-center justify-center p-6">
          <h1 className="text-4xl font-bold">Hizmetlerimiz</h1>
          <p className="text-lg mt-2">
            Profesyonel emlak hizmetleriyle tanışın
          </p>
        </div>
      </div>

      {/* Services List */}
      <div className="container mx-auto p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {servicesData.map((service, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h2 className="text-xl font-semibold mb-2">{service.title}</h2>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const servicesData = [
  {
    title: "Emlak Satış ve Kiralama Danışmanlığı",
    description: "Ev, işyeri ve arsa alım satımı için profesyonel danışmanlık.",
    image:
      "https://odakyonetim.com/Uploads/af9bc0e4-1333-4571-b734-34bb31323caf.jpg",
  },
  {
    title: "Gayrimenkul Değerleme ve Ekspertiz",
    description:
      "Mülkünüzün doğru değerlemesini öğrenin ve en iyi yatırımı yapın.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4UnEVwx1TewYyyUfzMa0owmXFB5-JrXvNgg&s",
  },
  {
    title: "Ticari ve Yatırım Amaçlı Emlak Çözümleri",
    description: "Yatırımcılar için karlı ticari emlak fırsatları.",
    image:
      "https://www.emlakdergisi.net.tr/wp-content/uploads/2024/12/Konut-Kredisi-ve-Yeni-Finansman-Cozumleri-Emlak-Piyasasina-Etkiler.webp",
  },
  {
    title: "Yabancı Yatırımcı Danışmanlığı",
    description: "Türkistan’a yatırım yapmak isteyenler için özel hizmetler.",
    image:
      "https://www.oznurpartners.com/wp-content/uploads/2025/03/Yabanci-Yatirim-Danismanligi.jpg",
  },
];

export default Services;
