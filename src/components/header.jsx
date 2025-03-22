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
              A TRUE LEADER IN REAL ESTATE SECTOR WITH ITS OFFICES OPERATING IN
              TURKEY!
            </h2>
            <h3 className="text-lg lg:text-2xl font-light mb-6">
              Discover your dream property today!
            </h3>
            <div>
              <button className="bg-yellow-500 text-xl p-4 px-6 rounded-lg">
                Discover
              </button>
            </div>
            {/* <div className="bg-white/90 rounded-lg shadow-lg p-4 lg:p-6">
              <form className="flex flex-col lg:flex-row items-center gap-4 lg:gap-2">
                <select className="w-full h-12 px-4 text-black rounded-lg border border-gray-300 outline-none focus:border-blue-500">
                  <option value="" disabled selected>
                    Select Location
                  </option>
                  <option value="istanbul">Istanbul</option>
                  <option value="ankara">Ankara</option>
                  <option value="antalya">Antalya</option>
                </select>

                <select className="w-full h-12 px-4 text-black rounded-lg border border-gray-300 outline-none focus:border-blue-500">
                  <option value="" disabled selected>
                    Select Property Type
                  </option>
                  <option value="apartment">Apartment</option>
                  <option value="villa">Villa</option>
                  <option value="commercial">Commercial</option>
                </select>

                <select className="w-full h-12 px-4 text-black rounded-lg border border-gray-300 outline-none focus:border-blue-500">
                  <option value="" disabled selected>
                    Select Budget Range
                  </option>
                  <option value="50-100k">$50,000 - $100,000</option>
                  <option value="100-200k">$100,000 - $200,000</option>
                  <option value="200k-plus">$200,000+</option>
                </select>

                <div className="w-full">
                  <button
                    type="submit"
                    className="w-full lg:w-40 h-12 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300"
                  >
                    Search
                  </button>
                </div>
              </form>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
