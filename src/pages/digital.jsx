import React from "react";

const RealEstateTech = () => {
  return (
    <section className="py-12 px-6 bg-gray-100 pt-40">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">
          Emlak Teknolojileri ve Danışmanlık
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          Geleceğin Emlakçılığı, Dijitalle Başlar
        </p>
      </div>

      {/* Services */}
      <div className="max-w-4xl mx-auto space-y-4">
        <div className="p-4 bg-white rounded-lg shadow">
          <h3 className="text-xl font-semibold text-gray-800">
            Profesyonel Emlak Yönetim Sistemi (CRM)
          </h3>
          <p className="text-gray-600">Emlak süreçlerinizi dijitalleştirin.</p>
        </div>

        <div className="p-4 bg-white rounded-lg shadow">
          <h3 className="text-xl font-semibold text-gray-800">
            Web Sitesi + Mobil Uygulama + İlan Entegrasyonu
          </h3>
          <p className="text-gray-600">Tüm dijital platformlarda yer alın.</p>
        </div>

        <div className="p-4 bg-white rounded-lg shadow">
          <h3 className="text-xl font-semibold text-gray-800">
            Dijital Pazarlama & Reklam Otomasyonu
          </h3>
          <p className="text-gray-600">Emlak portföyünüzü büyütün.</p>
        </div>

        <div className="p-4 bg-white rounded-lg shadow">
          <h3 className="text-xl font-semibold text-gray-800">
            Proje Geliştirme & Yatırım Danışmanlığı
          </h3>
          <p className="text-gray-600">Yatırımlarınızı optimize edin.</p>
        </div>

        <div className="p-4 bg-white rounded-lg shadow">
          <h3 className="text-xl font-semibold text-gray-800">
            Portföy Yönetimi & Gelir-Gider Optimizasyonu
          </h3>
          <p className="text-gray-600">Verimliliği artırın.</p>
        </div>
      </div>

      {/* Extra Features */}
      <div className="mt-6 text-center">
        <p className="text-gray-700">
          🔍 Yapay zekâ destekli analizler <br />
          📈 Raporlama ve satış verimliliği modülleri
        </p>
      </div>
    </section>
  );
};

export default RealEstateTech;
