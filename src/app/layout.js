import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import StoreProvider from "@/store/StoreProvider";
import { LanguageProvider } from "@/context/LanguageContext";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import HighlightsBar from "@/components/HighlightsBar";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import Head from "next/head";
import Script from "next/script";

// 🖋️ Fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// 🧠 Metadata (SEO)
export const metadata = {
  title: "AP News | Latest Updates",
  description: "Breaking news, live videos, and updates from AP News.",
};

// 🧱 Root Layout
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5516481292318087"
          strategy="lazyOnload"
          crossOrigin="anonymous"
        ></Script>
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        <StoreProvider>
          <LanguageProvider>
            <TopBar />
            <Navbar />
            <Breadcrumb />
            <div>{children}</div>
            <HighlightsBar />
            <Footer />
          </LanguageProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
