"use client";

import { useParams } from "next/navigation";
import { useState, useEffect } from "react";

import { getArticleDetailsById } from "@/data/newsData";
import ArticleClient from "./ArticleClient";

const transformNewsItem = (item) => ({
  id: item._id,
  title: item.title,
  description: item.summary,
  fullDescription: item.content,
  image: item.featuredImage?.url,
  category: item.category,
  date: item.publishAt,
  youtubeVideoId: item.youtubeVideoId,
});

export default function ArticleDetailPage() {
  const params = useParams();
  const { id } = params;
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) return;

    const fetchArticle = async () => {
      setLoading(true);
      try {
        const response = await getArticleDetailsById(id);
        if (response?.data?.article) {
          setArticle(transformNewsItem(response.data.article));
        } else {
          setError("Article not found");
        }
      } catch (err) {
        console.error("Client-side fetch error:", err);
        setError("Failed to load the article. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchArticle();
  }, [id]);

  if (loading) {
    // This will use your loading.js as a fallback during the initial server render.
    // On the client, it will show this simple text.
    return <div className="text-center py-10">Loading article...</div>;
  }

  if (error) {
    return (
      <div className="text-center py-10 text-red-500">
        <h1 className="text-2xl font-bold">Error</h1>
        <p>{error}</p>
      </div>
    );
  }

  if (!article) {
    return (
      <div className="text-center py-10">
        <h1 className="text-2xl font-bold">404 - Article Not Found</h1>
        <p>The article you are looking for does not exist.</p>
      </div>
    );
  }

  return <ArticleClient article={article} />;
}
