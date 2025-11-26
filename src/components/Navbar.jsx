"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBars, FaTimes, FaSearch, FaUserPlus } from "react-icons/fa";
import { useState, useMemo, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";
import JoinTeamPopup from "./JoinTeamPopup";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isJoinPopupOpen, setIsJoinPopupOpen] = useState(false);
  const { language, toggleLanguage } = useLanguage();
  const pathname = usePathname();

  const navLinks = useMemo(
    () => [
      { name: { en: "HOME", hi: "होम" }, path: "/" },
      { name: { en: "NEWS", hi: "मुख्य समाचार" }, path: "/news" },
      { name: { en: "BHOJPURI", hi: "भोजपुरी" }, path: "/bhojpuri" },
      { name: { en: "BUSINESS", hi: "व्यापार" }, path: "/business" },
      { name: { en: "SPORTS", hi: "खेल" }, path: "/sports" },
      { name: { en: "TECHNOLOGY", hi: "टेक" }, path: "/technology" },
      { name: { en: "ELECTIONS", hi: "चुनाव" }, path: "/elections" },
    ],
    []
  );
  const liveLink = { name: { en: "LIVE", hi: "लाइव" }, path: "/live" };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    // Cleanup function
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  return (
    <>
      <nav className="bg-white/90 backdrop-blur-md shadow-md sticky top-0 z-50 transition-all duration-300 border-b border-gray-100">
        <div className="max-w-7xl px-2 mx-auto">
          <div className="flex justify-between items-center h-18">
            <Link href="/" className="flex items-center  group">
              <div className="bg-transparent py-1 rounded flex items-center gap-2 transition-transform duration-300 group-hover:scale-105">
                <img
                  src="/Ap-news.png"
                  alt="AP News Logo"
                  className="h-12 w-auto object-contain"
                />
              </div>
            </Link>

            <div className="hidden lg:flex items-center space-x-8 ml-10">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  className={`relative font-bold text-sm tracking-wide transition-all duration-300 py-2 ${
                    pathname === link.path
                      ? "text-red-700 after:absolute after:left-0 after:bottom-0 after:h-[3px] after:w-full after:bg-red-700 after:rounded-full"
                      : "text-gray-600 hover:text-red-700 after:absolute after:left-0 after:bottom-0 after:h-[3px] after:w-0 after:bg-red-700 after:transition-all after:duration-300 hover:after:w-full after:rounded-full"
                  }`}
                >
                  {link.name[language]}
                </Link>
              ))}
            </div>

            <div className="hidden lg:flex items-center space-x-5 select-none">
              <Link
                href={liveLink.path}
                className={`relative font-bold text-xs tracking-wider transition-all duration-300 px-4 py-1.5 rounded-full flex items-center gap-2 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 ${
                  pathname === liveLink.path
                    ? "bg-linear-to-r from-red-600 to-red-700 text-white ring-2 ring-red-200"
                    : "bg-white text-red-700 border border-red-100 hover:border-red-200"
                }`}
              >
                <span className="relative flex h-2.5 w-2.5">
                  <span
                    className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
                      pathname === liveLink.path ? "bg-white" : "bg-red-600"
                    }`}
                  ></span>
                  <span
                    className={`relative inline-flex rounded-full h-2.5 w-2.5 ${
                      pathname === liveLink.path ? "bg-white" : "bg-red-600"
                    }`}
                  ></span>
                </span>
                {liveLink.name[language]}
              </Link>
              <button
                onClick={() => setIsJoinPopupOpen(true)}
                className="flex items-center space-x-2 bg-linear-to-r from-red-700 to-red-800 text-white px-5 py-2.5 rounded-full hover:shadow-lg hover:from-red-800 hover:to-red-900 transition-all duration-300 font-bold text-xs tracking-wide transform hover:-translate-y-0.5"
              >
                <FaUserPlus size={14} />
                <span>{language === "hi" ? "हमसे जुड़ें" : "JOIN TEAM"}</span>
              </button>

              <div
                className="flex items-center cursor-pointer bg-gray-100 rounded-full p-1 border border-gray-200"
                onClick={toggleLanguage}
              >
                <span
                  className={`px-3 py-1 text-xs font-bold rounded-full transition-all duration-300 ${
                    language === "en"
                      ? "bg-white text-red-700 shadow-sm"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  EN
                </span>
                <span
                  className={`px-3 py-1 text-xs font-bold rounded-full transition-all duration-300 ${
                    language === "hi"
                      ? "bg-white text-red-700 shadow-sm"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  HI
                </span>
              </div>
              <button className="text-gray-500 hover:text-red-700 transition-colors p-2 rounded-full hover:bg-gray-50">
                <FaSearch size={18} />
              </button>
            </div>

            <div className="lg:hidden flex items-center space-x-4">
              <Link
                href={liveLink.path}
                className="flex items-center gap-1.5 bg-red-50 text-red-700 px-3 py-1.5 rounded-full text-xs font-bold border border-red-100"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-600 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
                </span>
                {liveLink.name[language]}
              </Link>
              <div
                className="flex items-center cursor-pointer"
                onClick={toggleLanguage}
              >
                <span
                  className={`px-2 py-1 text-xs font-semibold rounded-l-md ${
                    language === "en"
                      ? "bg-red-700 text-white"
                      : "bg-gray-200 text-gray-700"
                  }`}
                >
                  EN
                </span>
                <span
                  className={`px-2 py-1 text-xs font-semibold rounded-r-md ${
                    language === "hi"
                      ? "bg-red-700 text-white"
                      : "bg-gray-200 text-gray-700"
                  }`}
                >
                  HI
                </span>
              </div>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-800 focus:outline-none p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-210 lg:hidden transition-opacity duration-300 ease-in-out ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={() => setIsMenuOpen(false)}
        ></div>

        {/* Menu Panel */}
        <div
          className={`absolute top-0 right-0 h-full w-4/5 max-w-sm bg-linear-to-b from-red-800 to-red-900 shadow-2xl transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col h-full p-6">
            <div className="flex justify-end mb-8">
              <button
                onClick={() => setIsMenuOpen(false)}
                className="text-white/80 hover:text-white transition-colors"
              >
                <FaTimes size={28} />
              </button>
            </div>
            <div className="flex flex-col items-center justify-center grow space-y-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-xl font-bold tracking-wider transition-all duration-200 hover:scale-105 ${
                    pathname === link.path
                      ? "text-white scale-110"
                      : "text-white/50"
                  }`}
                >
                  {link.name[language]}
                </Link>
              ))}
              <Link
                href={liveLink.path}
                onClick={() => setIsMenuOpen(false)}
                className="text-xl font-bold tracking-wider transition-all duration-200 hover:scale-105 text-white/50 flex items-center gap-2"
              >
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
                </span>
                {liveLink.name[language]}
              </Link>
              <button
                onClick={() => {
                  setIsJoinPopupOpen(true);
                  setIsMenuOpen(false);
                }}
                className="mt-6 flex items-center justify-center gap-2 rounded-full bg-white/10 px-6 py-3 text-base font-semibold text-white transition-all hover:bg-white/20"
              >
                <FaUserPlus />
                <span>
                  {language === "hi" ? "हमसे जुड़ें" : "JOIN OUR TEAM"}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <JoinTeamPopup
        isOpen={isJoinPopupOpen}
        onClose={() => setIsJoinPopupOpen(false)}
        language={language}
      />
    </>
  );
};

export default Navbar;
