import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import Wrapper from "./wrapper.jsx";
import { getText } from "../languages/index.js";
import { Dropdown, Menu } from "antd";
import { LanguageContext } from "../context/lang.jsx";
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  const { selectedLanguage, selectedFlag, changeLanguage } =
    useContext(LanguageContext);

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

  const languageMenu = (
    <Menu
      onClick={({ key }) => changeLanguage(key)}
      items={[
        {
          key: "uz",
          label: (
            <div className="flex items-center gap-2">
              <img
                src="/img/flag-uz.svg"
                alt="O'zbek"
                className="w-5 h-5 object-cover"
              />
              Oʻzbek
            </div>
          ),
        },
        {
          key: "en",
          label: (
            <div className="flex items-center gap-2">
              <img
                src="/img/flag-en.svg"
                alt="English"
                className="w-5 h-5 object-cover"
              />
              English
            </div>
          ),
        },
        {
          key: "tr",
          label: (
            <div className="flex items-center gap-2">
              <img
                src="/img/flag-tr.png"
                alt="Türkçe"
                className="w-5 h-5 object-cover"
              />
              Türkçe
            </div>
          ),
        },
        {
          key: "ru",
          label: (
            <div className="flex items-center gap-2">
              <img
                src="/img/flag-ru.svg"
                alt="Русский"
                className="w-5 h-5 object-cover"
              />
              Русский
            </div>
          ),
        },
      ]}
    />
  );

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
                  {getText("nav1")}
                </a>
                <a
                  href="/franchize"
                  className={`transition text-base font-bold ${
                    scrolling
                      ? "text-black hover:text-yellow-400"
                      : "text-white hover:text-yellow-400"
                  }`}
                >
                  {getText("nav2")}
                </a>
                <a
                  href="/tech"
                  className={`transition text-base font-bold ${
                    scrolling
                      ? "text-black hover:text-yellow-400"
                      : "text-white hover:text-yellow-400"
                  }`}
                >
                  {getText("nav3")}
                </a>
                <a
                  href="/about-us"
                  className={`transition text-base font-bold ${
                    scrolling
                      ? "text-black hover:text-yellow-400"
                      : "text-white hover:text-yellow-400"
                  }`}
                >
                  {getText("nav4")}
                </a>
              </div>
              <div
                className={`flex items-center ${
                  scrolling ? "text-black" : "text-white"
                }`}
              >
                <div className="relative">
                  <Dropdown
                    overlay={languageMenu}
                    trigger={["click"]}
                    placement="bottom"
                  >
                    <div className="flex items-center gap-[5px] cursor-pointer">
                      <img
                        src={selectedFlag}
                        style={{ width: "20px", objectFit: "cover" }}
                        alt="Selected Language"
                      />
                      <span className=" text-sm font-bold">
                        {selectedLanguage.toUpperCase()}
                      </span>
                      <IoIosArrowDown className=" text-sm" size={15} />
                    </div>
                  </Dropdown>
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
