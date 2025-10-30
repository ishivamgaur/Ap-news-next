"use client"
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";
import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";

const Footer = () => {
  const { language } = useLanguage();
  const currentYear = new Date().getFullYear();

  const content = {
    en: {
      brand: "AP News",
      description:
        "Your trusted source for breaking news, updates, and stories from around Bihar.",
      categories: "Categories",
      quickLinks: "Quick Links",
      followUs: "Follow Us",
      rights: "All rights reserved.",
      nav: {
        news: "News",
        business: "Business",
        sports: "Sports",
        technology: "Technology",
        home: "Home",
        entertainment: "Entertainment",
        lifestyle: "Lifestyle",
        elections: "Elections",
      },
    },
    hi: {
      brand: "एपी न्यूज़",
      description:
        "बिहार भर से ब्रेकिंग न्यूज, अपडेट और कहानियों के लिए आपका विश्वसनीय स्रोत।",
      categories: "श्रेणियाँ",
      quickLinks: "क्विक लिंक्स",
      followUs: "हमें फॉलो करें",
      rights: "सर्वाधिकार सुरक्षित।",
      nav: {
        news: "मुख्य समाचार",
        business: "व्यापार",
        sports: "खेल",
        technology: "टेक",
        home: "होम",
        entertainment: "मनोरंजन",
        lifestyle: "जीवनशैली",
        elections: "चुनाव",
      },
    },
  };

  return (
    <footer className="bg-red-800 text-white pb-16">
      <div className="px-4 py-8 lg:mx-64">
        {" "}
        {/* <-- Add lg:mx-64 to match sidebars */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">
              {content[language].brand}
            </h3>
            <p className="text-gray-200 text-sm">
              {content[language].description}
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">
              {content[language].categories}
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/news" className="text-gray-200 hover:text-white">
                  {content[language].nav.news}
                </Link>
              </li>
              <li>
                <Link
                  href="/business"
                  className="text-gray-200 hover:text-white"
                >
                  {content[language].nav.business}
                </Link>
              </li>
              <li>
                <Link href="/sports" className="text-gray-200 hover:text-white">
                  {content[language].nav.sports}
                </Link>
              </li>
              <li>
                <Link
                  href="/technology"
                  className="text-gray-200 hover:text-white"
                >
                  {content[language].nav.technology}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">
              {content[language].quickLinks}
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-gray-200 hover:text-white">
                  {content[language].nav.home}
                </Link>
              </li>
              <li>
                <Link
                  href="/bhojpuri"
                  className="text-gray-200 hover:text-white"
                >
                  {content[language].nav.entertainment}
                </Link>
              </li>
              <li>
                <Link
                  href="/lifestyle"
                  className="text-gray-200 hover:text-white"
                >
                  {content[language].nav.lifestyle}
                </Link>
              </li>
              <li>
                <Link
                  href="/elections"
                  className="text-gray-200 hover:text-white"
                >
                  {content[language].nav.elections}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{content[language].followUs}</h4>
            <div className="flex space-x-4">
              <a
                target="blank"
                href="https://facebook.com/apnewsbihar?mibextid=ZbWKwL"
                className="text-gray-200 hover:text-white transition-colors"
              >
                <FaFacebook size={24} />
              </a>
              <a
                target="blank"
                href="http://x.com/APNEWS0901?t=zvxGBcZbecq0oSjCpL93ng&s=09"
                className="text-gray-200 hover:text-white transition-colors"
              >
                <FaTwitter size={24} />
              </a>
              <a
                target="blank"
                href="https://instagram.com/ap_newsbihar"
                className="text-gray-200 hover:text-white transition-colors"
              >
                <FaInstagram size={24} />
              </a>
              <a
                target="blank"
                href="https://youtube.com/@apnewsbihar6217?si=GA4K50DSQnPCYEkQ"
                className="text-gray-200 hover:text-white transition-colors"
              >
                <FaYoutube size={24} />
              </a>
            </div>
            <p className="mt-4 mb-2 text-gray-200 font-semibold">Contact Us</p>
            <div className="flex flex-col gap-1">
              <p className="text-gray-200">
                Email:&nbsp;
                <a
                  href="mailto:nHwMn@example.com"
                  className="text-gray-200 hover:text-white transition-colors"
                >
                  news@apnewsbihar.in
                </a>
              </p>
              <p>
                Email:&nbsp;
                <a
                  href="mailto:nHwMn@example.com"
                  className="text-gray-200 hover:text-white transition-colors"
                >
                  info@apnewsbihar.in
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-400 mt-8 pt-6 text-center text-sm text-gray-200 space-y-1">
          <p>&copy; 2019–2025 AP NEWS. All Rights Reserved.</p>
          <p>Registered under Udyog Aadhaar No: BR10D0034698</p>
          <p>A Partnership Firm — AP PRODUCTION, Darbhanga, Bihar, India</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
