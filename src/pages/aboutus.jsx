import React from "react";

const AboutUs = () => {
  return (
      <div className="w-full">
        {/* Hero Section */}
        <div
            className="relative h-screen bg-cover bg-center flex items-center justify-center"
            style={{
              backgroundImage: "url('/img/main-bg.jpg')",
            }}
        >
          <div className="text-center text-white bg-black bg-opacity-70 p-8 rounded-md max-w-2xl">
            <h1 className="text-5xl font-extrabold tracking-tight">About Us</h1>
            <p className="text-xl mt-4">
              Your trusted partner in finding the perfect property. Passion,
              innovation, and trust define us.
            </p>
          </div>
        </div>

        {/* Who We Are Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6 lg:px-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* Text Content */}
              <div>
                <h2 className="text-4xl font-bold text-gray-800 mb-4">
                  LONG-STANDING BACKGROUND
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  ALTIN EMLAK was founded by Nuri ÖZELMACIKLI who worked as the manager in corporate firms for many years and established real-estate-construction departments of those firms in 1998
                </p>
              </div>
              {/* Image */}
              <div>
                <img
                    src="/img/aboutus_page.jpeg"
                    alt="Who We Are"
                    className="rounded-lg shadow-lg w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="py-20">
          <div className="container mx-auto px-6 lg:px-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* Mission Image */}
              <div>
                <img
                    src="/img/misson.jpg"
                    alt="Our Mission"
                    className="rounded-lg shadow-lg w-full"
                />
              </div>
              {/* Mission Text */}
              <div>
                <h3 className="text-4xl font-bold text-gray-800 mb-4">
                  Our Mission
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  To connect people with their ideal homes and investments in
                  Turkey, delivering expert advice, unmatched service, and an
                  effortless experience.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6 lg:px-20">
            <h3 className="text-4xl font-bold text-center text-gray-800 mb-12">
              Our Values
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Value Card 1 */}
              <div className="group overflow-hidden rounded-lg shadow-lg bg-white">
                <img
                    src="/img/global.jpg"
                    alt="Global Reach"
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="p-6">
                  <h4 className="text-2xl font-bold text-gray-800 mb-2">
                    Global Reach
                  </h4>
                  <p className="text-gray-600">
                    We serve clients worldwide, offering expert services and
                    comprehensive solutions.
                  </p>
                </div>
              </div>

              {/* Value Card 2 */}
              <div className="group overflow-hidden rounded-lg shadow-lg bg-white">
                <img
                    src="/img/trust.jpeg"
                    alt="Trust"
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="p-6">
                  <h4 className="text-2xl font-bold text-gray-800 mb-2">Trust</h4>
                  <p className="text-gray-600">
                    We prioritize transparency and honesty to build lasting
                    relationships.
                  </p>
                </div>
              </div>

              {/* Value Card 3 */}
              <div className="group overflow-hidden rounded-lg shadow-lg bg-white">
                <img
                    src="/img/innovation.jpeg"
                    alt="Innovation"
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="p-6">
                  <h4 className="text-2xl font-bold text-gray-800 mb-2">
                    Innovation
                  </h4>
                  <p className="text-gray-600">
                    We leverage cutting-edge technology to simplify and elevate
                    your real estate journey.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
  );
};

export default AboutUs;
