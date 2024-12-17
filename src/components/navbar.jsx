import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Wrapper from "./wrapper.jsx";

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);

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
                    src="/img/logo.png"
                    alt="Logo"
                    className="h-12 object-contain cursor-pointer"
                  />
                </Link>
              </div>
              <div className="hidden lg:flex gap-4 2xl:gap-8 text-sm items-center">
                <a
                  href="/"
                  className={`transition text-base font-bold ${
                    scrolling
                      ? "text-black hover:text-yellow-400"
                      : "text-white hover:text-yellow-400"
                  }`}
                >
                  Home
                </a>
                <a
                  href="/"
                  className={`transition text-base font-bold ${
                    scrolling
                      ? "text-black hover:text-yellow-400"
                      : "text-white hover:text-yellow-400"
                  }`}
                >
                  About us
                </a>
                <a
                  href="/labaratories"
                  className={`transition text-base font-bold ${
                    scrolling
                      ? "text-black hover:text-yellow-400"
                      : "text-white hover:text-yellow-400"
                  }`}
                >
                  Properties
                </a>
                <a
                  href="/"
                  className={`transition text-base font-bold ${
                    scrolling
                      ? "text-black hover:text-yellow-400"
                      : "text-white hover:text-yellow-400"
                  }`}
                >
                  Offices
                </a>
                <a
                  href="/"
                  className={`transition text-base font-bold ${
                    scrolling
                      ? "text-black hover:text-yellow-400"
                      : "text-white hover:text-yellow-400"
                  }`}
                >
                  Contact us
                </a>
              </div>
              <div
                className={`flex items-center ${
                  scrolling ? "text-black" : "text-white"
                }`}
              >
                Lang
              </div>
            </div>
          </Wrapper>
        </div>
      </div>
    </>
  );
};

export default Navbar;
