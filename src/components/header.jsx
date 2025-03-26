import React from "react";

const Header = () => {
  return (
    <div className="w-full h-screen">
      <div
        className="relative h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/img/main-bg.jpg')",
        }}
      >
        <div className="bg-black/50 h-full flex items-center justify-center p-6">
          <div className="text-center text-white max-w-6xl px-4">
            <h2 className="text-2xl lg:text-4xl font-extrabold animate-fade-in mb-4">
              🌐 ALTINEMLAK TURKISTAN – New Era in International Real Estate
              Systems
            </h2>
            <h3 className="text-lg lg:text-2xl font-light mb-6">
              Discover your dream property today!
            </h3>
            <div>
              <h1>
                Güvenin Temsilcisi, Geleceğin Emlak Modeli ALTINEMLAK TÜRKİSTAN,
                Türkiye’nin en köklü emlak markası ALTINEMLAK’ın Orta Asya’daki
                resmi temsilcisi olarak; modern, sistematik ve uluslararası
                standartlarda emlak hizmetlerini Kazakistan, Özbekistan,
                Kırgızistan ve çevre ülkelerde sunmak için yola çıktı.
                Uluslararası sertifikalı eğitimlerden teknolojik altyapı
                çözümlerine, franchise fırsatlarından yatırım danışmanlığına
                kadar her adımda sizinleyiz.
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
