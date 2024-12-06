"use client";
import Image from "next/image";

// import Link from "next/link";
import { useState, useEffect } from "react";
function Topbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const buttonClass =
    "px-4 py-2 mx-3 text-base font-medium text-gray-700 rounded-xl hover:text-primary hover:bg-primary hover:bg-opacity-5 transition duration-300 ease-in-out";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${
        isScrolled
          ? "bg-white bg-opacity-90 h-20 shadow-sm"
          : "bg-transparent h-24"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center h-full px-4">
        {/* Left Buttons */}
        <div className="flex flex-1 justify-center">
          {["خانه",   "کارخانه ها و شعبات فروش", "اخبار", "امور مجامع و سهام"].map(
            (label, index) => (
              <button
                key={index}
                className={buttonClass}>
                {label}
              </button>
            )
          )}
        </div>

        {/* Logo */}
        <div className="flex justify-center items-center">
          <Image
            src="/logo.png" // Replace with your logo path
            alt="Logo"
            className="transition-all duration-300 ease-in-out"
            width={isScrolled ? 60 : 80}
            height={isScrolled ? 60 : 80}
          />
        </div>

        {/* Right Buttons */}
        <div className="flex flex-1 justify-center">
          {["حاکمیت شرکتی", "استخدام", "درباره شرکت", "تماس با ما"].map(
            (label, index) => (
              <button key={index} className={buttonClass}>
                {label}
              </button>
            )
          )}
        </div>
      </div>
    </header>
  );
}

export default Topbar;
