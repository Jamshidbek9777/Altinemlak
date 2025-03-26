import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactUs = () => {
  return (
      <section className="pb-6 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-20">
          {/* Header Section */}
          <div className="text-center mb-0 lg:mb-16">
            <h2 className="text-4xl font-bold text-gray-800">Contact Us</h2>
            <p className="text-lg text-gray-600 mt-2">
              We’re here to help! Feel free to reach out with any questions or
              concerns.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Image Section */}
            <div className="flex justify-center">
              <img
                  src={"/img/contactus.png"}
                  alt="Contact Us"
                  className="w-[550px] h-auto rounded-lg hidden lg:block"
              />
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                Send Us a Message
              </h3>
              <form className="space-y-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Your Name
                  </label>
                  <input
                      type="text"
                      placeholder="Enter your name"
                      className="w-full border border-gray-300 rounded-md py-3 px-4 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Email Address
                  </label>
                  <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full border border-gray-300 rounded-md py-3 px-4 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Your Message
                  </label>
                  <textarea
                      rows="3"
                      placeholder="Write your message here..."
                      className="w-full border border-gray-300 rounded-md py-3 px-4 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  ></textarea>
                </div>

                <button
                    type="submit"
                    className="w-full bg-yellow-500 text-white py-3 rounded-md text-lg font-medium hover:bg-yellow-600 transition"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Contact Information Section */}
          <div className="mt-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Contact Info Card */}
              <div className="flex items-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
                <div className="bg-yellow-500 p-3 rounded-full text-white">
                  <FaPhoneAlt size={24} />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-gray-800">
                    Call Us
                  </h4>
                  <p className="text-gray-600">+998 93 205 97 77</p>
                </div>
              </div>

              <div className="flex items-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
                <div className="bg-yellow-500 p-3 rounded-full text-white">
                  <FaEnvelope size={24} />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-gray-800">
                    Email Us
                  </h4>
                  <p className="text-gray-600">info@eduagency.uz</p>
                </div>
              </div>

              <div className="flex items-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
                <div className="bg-yellow-500 p-3 rounded-full text-white">
                  <FaMapMarkerAlt size={24} />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-gray-800">
                    Visit Us
                  </h4>
                  <p className="text-gray-600">Tashkent, Uzbekistan</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default ContactUs;
