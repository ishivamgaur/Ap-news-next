"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { FaChevronRight, FaHome } from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";
import { categories } from "../data/categories"; // Import categories data

const Breadcrumb = () => {
  const pathname = usePathname();
  const pathnames = pathname.split("/").filter((x) => x);
  const { language, toggleLanguage } = useLanguage();

  const translations = {
    en: { home: "Home", article: "Article" },
    hi: { home: "होम", article: "लेख" },
  };

  // Don't render breadcrumbs on the home page
  if (pathnames.length === 0) {
    return null;
  }

  return (
    <div className="bg-gray-50 py-4">
      <div className="max-w-7xl mx-auto px-4">
        <nav
          aria-label="Breadcrumb"
          className="flex px-5 py-3 text-gray-700 border border-gray-200 rounded-lg bg-white shadow-sm"
        >
          <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
            <li className="inline-flex items-center">
              <Link
                href="/"
                className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-red-700 transition-colors"
              >
                <FaHome className="w-4 h-4 me-2" />
                {translations[language].home}
              </Link>
            </li>
            {pathnames.map((name, index) => {
              const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
              const isLast = index === pathnames.length - 1;

              const isArticleSegment = name.toLowerCase() === "article";

              let displayName;
              if (isArticleSegment) {
                displayName = translations[language].article;
              } else {
                // Try to find a matching category title
                const categoryMatch = categories.find(
                  (cat) => cat.path.substring(1) === name.toLowerCase()
                );
                displayName = categoryMatch
                  ? categoryMatch.title[language]
                  : name.charAt(0).toUpperCase() +
                    name.slice(1).replace(/-/g, " ");
              }

              const truncatedName =
                displayName.length > 15
                  ? displayName.slice(0, 15) + "..."
                  : displayName;

              return (
                <li key={name}>
                  <div className="flex items-center">
                    <FaChevronRight className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" />
                    {isLast || isArticleSegment ? (
                      <span className="ms-1 text-sm font-medium text-red-700 md:ms-2">
                        <span className="md:hidden">{truncatedName}</span>
                        <span className="hidden md:inline">{displayName}</span>
                      </span>
                    ) : (
                      <Link
                        href={routeTo}
                        className="ms-1 text-sm font-medium text-gray-500 hover:text-red-700 md:ms-2 transition-colors"
                      >
                        <span className="md:hidden">{truncatedName}</span>
                        <span className="hidden md:inline">{displayName}</span>
                      </Link>
                    )}
                  </div>
                </li>
              );
            })}
          </ol>
        </nav>
      </div>
    </div>
  );
};

export default Breadcrumb;
