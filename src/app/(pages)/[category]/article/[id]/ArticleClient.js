"use client";

import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";
import ShareButtons from "@/components/ShareButtons";

export default function ArticleClient({ article }) {
  const {language} = useLanguage();
console.log(article);


  return (
    <div className="max-w-7xl mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">{article.title[language]}</h1>
      <Image
        src={article.image}
        alt={article.title[language]}
        width={800}
        height={450}
        className="w-full h-auto object-cover rounded-lg mb-4"
      />
      <p className="text-lg mb-4">{article.fullDescription[language]}</p>
      <ShareButtons
        title={article.title[language]}
        url={`/${article.category}/article/${article.id}`}
      />
    </div>
  );
}
