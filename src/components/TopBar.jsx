"use client";
import React, { useState, useEffect } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";
import { TiWeatherPartlySunny } from "react-icons/ti";

const API_KEY = process.env.NEXT_PUBLIC_OPENWEATHERMAP_API_KEY;
const DEFAULT_CITY = process.env.NEXT_PUBLIC_DEFAULT_CITY;

const TopBar = () => {
  const socialLinks = [
    {
      href: "https://facebook.com/apnewsbihar?mibextid=ZbWKwL",
      Icon: FaFacebookF,
      hoverClass: "hover:text-[#1877F2]", // Facebook Blue
      label: "Facebook",
    },
    {
      href: "http://x.com/APNEWS0901?t=zvxGBcZbecq0oSjCpL93ng&s=09",
      Icon: FaTwitter,
      hoverClass: "hover:text-blue-500", // X/Twitter Black
      label: "Twitter",
    },
    {
      href: "https://instagram.com/ap_newsbihar",
      Icon: FaInstagram,
      hoverClass: "hover:text-[#E4405F]", // Instagram Pink
      label: "Instagram",
    },
    {
      href: "https://youtube.com/@apnewsbihar6217?si=GA4K50DSQnPCYEkQ",
      Icon: FaYoutube,
      hoverClass: "hover:text-[#FF0000]", // YouTube Red
      label: "YouTube",
    },
  ];

  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeather = async (lat, lon) => {
      try {
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Failed to fetch weather data.");
        }
        const data = await response.json();
        setWeather({
          city: data.name,
          temp: Math.round(data.main.temp),
        });
        setError(null);
      } catch (err) {
        setError(err.message);
      }
    };

    const fetchDefaultWeather = async () => {
      // Fallback for when geolocation fails or is denied
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${DEFAULT_CITY}&appid=${API_KEY}&units=metric`;
      const response = await fetch(url);
      const data = await response.json();
      setWeather({ city: data.name, temp: Math.round(data.main.temp) });
    };

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          fetchWeather(position.coords.latitude, position.coords.longitude);
        },
        () => {
          setError("Geolocation failed. Showing weather for the default city.");
          fetchDefaultWeather(); // Fallback to default city
        }
      );
    } else {
      setError("Geolocation is not supported by this browser.");
      fetchDefaultWeather(); // Fallback to default city
    }
  }, []);

  return (
    <div className="bg-red-800 text-white">
      <div className="max-w-7xl mx-auto px-5 h-10 flex items-center justify-between text-sm">
        {/* Left Side: Weather */}
        <div className="flex items-center gap-2">
          <TiWeatherPartlySunny size={24} className="text-yellow-400" />
          {weather ? (
            <>
              <span className="font-semibold">{weather.city}</span>
              <span>{weather.temp}°C</span>
            </>
          ) : (
            <span>{error || "Loading weather..."}</span>
          )}
        </div>

        {/* Right Side: Social Links */}
        <div className="flex items-center gap-5">
          {socialLinks.map(({ href, Icon, hoverClass, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className={`text-gray-200 ${hoverClass} transform hover:scale-125 transition-all duration-200`}
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopBar;
