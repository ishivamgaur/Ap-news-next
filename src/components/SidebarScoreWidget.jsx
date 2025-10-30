// src/components/SidebarScoreWidget.jsx
import React, { useState, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";
import AdComponent from "./AdComponent";

const SidebarScoreWidget = () => {
  const { language } = useLanguage();

  // --- Countdown Logic ---
  // NOTE: Set your target election date here.
  const electionDate = new Date("2025-11-14T00:00:00");

  const calculateTimeLeft = () => {
    const difference = +electionDate - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        min: Math.floor((difference / 1000 / 60) % 60),
        sec: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Clear the timer if the component is unmounted
    return () => clearTimeout(timer);
  });
  // --- End of Countdown Logic ---

  return (
    <aside
      className={
        "hidden lg:flex flex-col w-64 p-2 py-4 bg-white border-r border-gray-300 overflow-y-auto shadow-lg"
      }
    >
      {/* Upcoming Elections Result */}
      <div className=" mb-6 p-4 border border-gray-200 rounded-lg bg-gray-50 shadow-sm">
        <div className="flex mb-2 justify-center items-center">
          <span className="relative flex h-4 w-4 mr-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-red-600"></span>
          </span>
          <h2 className="text-lg font-bold text-red-800">
            {language === "hi"
              ? "बिहार विधानसभा चुनाव परिणाम"
              : "Bihar Legislative Election Result"}
          </h2>
        </div>

        {Object.keys(timeLeft).length > 0 ? (
          <div className="grid grid-cols-4 gap-2 text-center">
            {Object.entries(timeLeft).map(([unit, value]) => (
              <div
                key={unit}
                className="bg-red-700 p-2 rounded-md shadow-inner"
              >
                <div className="text-xl font-bold text-white">{value}</div>
                <div className="text-xs text-gray-200 capitalize">
                  {language === "hi"
                    ? {
                        days: "दिन",
                        hours: "घंटे",
                        min: "मिनट",
                        sec: "सेकंड",
                      }[unit]
                    : unit}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-sm text-center text-green-600 font-semibold">
            {language === "hi" ? "परिणाम का दिन है!" : "It's Result Day!"}
          </p>
        )}
      </div>

      {/* Live Cricket Scores */}
      <div
        aria-label={
          language === "hi" ? "लाइव क्रिकेट स्कोर" : "Live Cricket Scores"
        }
      >
        <div className="mb-3">
          <h2 className="text-lg font-bold text-red-700 text-left">
            {language === "hi" ? "लाइव क्रिकेट स्कोर" : "Live Cricket Scores"}
          </h2>
        </div>

        {/* Render iframe directly (avoid innerHTML) and use lazy loading */}
        <div className="rounded-md overflow-hidden shadow-sm border-2 border-red-100 bg-red-50">
          <iframe
            src="https://cwidget.crictimes.org/?v=1.1&a=de0c0c"
            title={
              language === "hi" ? "लाइव क्रिकेट स्कोर" : "Live Cricket Scores"
            }
            className="w-full min-h-[460px] h-full"
            style={{ border: 0 }}
            loading="lazy"
          />
        </div>
      </div>

      {/* ADS of our own */}
      <AdComponent
        adImage="https://image.thum.io/get/width/240/crop/1200/https://www.zoomcar.com/"
        title="Zoomcar"
        adLink="https://www.zoomcar.com/"
      />

      <AdComponent
        adImage="https://image.thum.io/get/width/240/crop/1200/https://www.modernbazaar.online/"
        title="Modern Bazaar"
        adLink="https://www.modernbazaar.online/"
      />
    </aside>
  );
};

export default SidebarScoreWidget;
