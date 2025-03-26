import React from "react";

const Franchize = () => {
  return (
    <div className="w-full min-h-screen bg-gray-100">
      {/* Hero Section */}
      <div
        className="relative w-full h-[500px] flex items-center justify-center text-white text-center bg-cover bg-center"
        style={{ backgroundImage: "url('/img/fr.jpg')" }}
      >
        <div className="bg-black bg-opacity-50 w-full h-full flex flex-col items-center justify-center p-6">
          <h1 className="text-4xl font-bold">Franchise Sistemi</h1>
          <p className="text-lg mt-2">Emlak sektöründe benzersiz fırsatlar</p>
          <button className="mt-4 bg-yellow-500 text-black px-6 py-2 rounded-md font-semibold hover:bg-yellow-600">
            Hemen Başvur
          </button>
        </div>
      </div>

      {/* Content Sections */}
      <div className="container mx-auto p-6">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">
            Altın Emlak Franchise Nedir?
          </h2>
          <p>
            Altın Emlak, 1998 yılında kurulmuş, Türkiye'nin en köklü emlak
            zincirlerinden biridir. Ofis açmak isteyen girişimcilere gelişmiş
            emlak altyapısını minimum maliyetlerle sunar.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">
            Türkistan’da Emlak Sektöründe Yatırım Fırsatları
          </h2>
          <p>
            Türkistan, jeopolitik avantajları ve yatırımcı dostu politikaları
            ile büyük fırsatlar sunmaktadır.
          </p>
          <img
            src={"/img/emlak.jpeg"}
            alt="Emlak"
            className="mt-4 rounded-lg shadow-md"
          />
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">
            Master Franchise Olmanın Avantajları
          </h2>
          <p>
            Altın Emlak, franchise sahiplerine pazarlamadan performans
            değerlendirmeye kadar tüm ihtiyaçlara yanıt verebilen gelişmiş bir
            sistem sunar.
          </p>
        </section>

        <section className="mb-8 bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-2">Başvuru Formu</h2>
          <p>Franchise başvurusu yapmak için aşağıdaki butona tıklayın.</p>
          <a
            href="https://altinemlak.com.tr/franchise-emlak-bayilik"
            className="mt-4 inline-block bg-blue-600 text-white px-6 py-2 rounded-md font-semibold hover:bg-blue-700"
          >
            Başvur
          </a>
        </section>
      </div>
    </div>
  );
};

export default Franchize;
