import React from "react";

const Trainings = () => {
  return (
    <section className="py-12 px-6 bg-gray-100 pt-40">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">
          Eğitim ve Sertifikasyon
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          Uluslararası Geçerli Sertifikalarla Profesyonel Emlak Kariyerine Adım
          Atın
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-4">
        <div className="p-4 bg-white rounded-lg shadow">
          <h3 className="text-xl font-semibold text-gray-800">
            Emlakçılık Mesleki Eğitim Programı
          </h3>
          <p className="text-gray-600">Online ve Yüz yüze seçenekleriyle.</p>
        </div>

        <div className="p-4 bg-white rounded-lg shadow">
          <h3 className="text-xl font-semibold text-gray-800">
            Brokerlik ve Danışmanlık Sertifikası
          </h3>
          <p className="text-gray-600">Official & Freelance seçenekleriyle.</p>
        </div>

        <div className="p-4 bg-white rounded-lg shadow">
          <h3 className="text-xl font-semibold text-gray-800">
            Emlak Hukuku, Satış Psikolojisi, Portföy Yönetimi
          </h3>
          <p className="text-gray-600">Modüller halinde sunulmaktadır.</p>
        </div>

        <div className="p-4 bg-white rounded-lg shadow">
          <h3 className="text-xl font-semibold text-gray-800">
            Altınemlak Sertifikası + Uluslararası Geçerlilik (ISO – CPD)
          </h3>
          <p className="text-gray-600">
            Başarıya göre franchise lisansı alma imkanı.
          </p>
        </div>
      </div>

      <div className="mt-6 text-center">
        <p className="text-gray-700">
          ✅ Kurumlar için özel içerikli eğitimler <br />✅ Yeni başlayanlar ve
          deneyimli danışmanlar için iki ayrı seviye
        </p>
      </div>
    </section>
  );
};

export default Trainings;
