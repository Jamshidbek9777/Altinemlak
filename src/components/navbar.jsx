import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Wrapper from "./wrapper.jsx";

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);

  //scroll usage
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className={`fixed w-screen z-[999] transition-all duration-300 ${
          scrolling ? "bg-white shadow-md" : "bg-[#00000075]"
        }`}
      >
        <div className="flex h-16 items-center">
          <Wrapper>
            <div className="flex justify-between">
              <div className="text-xl font-bold text-yellow-400">
                <Link to={"/"}>
                  <img
                    src={
                      scrolling
                        ? "/img/altinemlak_logo_dark.png"
                        : "/img/altinemlak_logo.png"
                    }
                    alt="Logo"
                    className="h-12 object-contain cursor-pointer transition-transform duration-300"
                  />
                </Link>
              </div>
              <div className="hidden lg:flex gap-4 2xl:gap-8 text-sm items-center">
                <a
                  href="/trainings"
                  className={`transition text-base font-bold ${
                    scrolling
                      ? "text-black hover:text-yellow-400"
                      : "text-white hover:text-yellow-400"
                  }`}
                >
                  Certificate
                </a>
                <a
                  href="/franchize"
                  className={`transition text-base font-bold ${
                    scrolling
                      ? "text-black hover:text-yellow-400"
                      : "text-white hover:text-yellow-400"
                  }`}
                >
                  Franchize
                </a>
                <a
                  href="/tech"
                  className={`transition text-base font-bold ${
                    scrolling
                      ? "text-black hover:text-yellow-400"
                      : "text-white hover:text-yellow-400"
                  }`}
                >
                  Emlak Teknolojileri
                </a>
                <a
                  href="/about-us"
                  className={`transition text-base font-bold ${
                    scrolling
                      ? "text-black hover:text-yellow-400"
                      : "text-white hover:text-yellow-400"
                  }`}
                >
                  About us
                </a>
              </div>
              <div
                className={`flex items-center ${
                  scrolling ? "text-black" : "text-white"
                }`}
              >
                <div className="relative">
                  <div className="flex items-center gap-[5px] outline-none border-none cursor-pointer">
                    <img
                      // src={selectedFlag}
                      style={{ width: "20px", objectFit: "cover" }}
                    />
                    <select
                      className="bg-transparent border-none outline-none cursor-pointer"
                      // onChange={(e) => changeLanguage(e.target.value)}
                      // value={selectedLanguage}
                    >
                      <option
                        className="dark:bg-[#fafbfd] text-black border-none"
                        value="uz"
                      >
                        Oʻzbek
                      </option>
                      <option
                        className="dark:bg-[#fafbfd] text-black border-none"
                        value="en"
                      >
                        English
                      </option>
                      <option
                        className="dark:bg-[#fafbfd] text-black border-none"
                        value="tr"
                      >
                        Türkçe
                      </option>
                      <option
                        className="dark:bg-[#fafbfd] text-black border-none"
                        value="ru"
                      >
                        Русский
                      </option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </Wrapper>
        </div>
      </div>
    </>
  );
};

export default Navbar;
