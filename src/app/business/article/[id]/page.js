export const dynamic = "force-dynamic";

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

export default async function ArticleDetailPage({ params }) {
  const { id } = await params;
  try {
    const response = await getArticleDetailsById(id);
    const articleData = response?.data?.article;

    if (!articleData) {
      return (
        <div className="text-center py-10">
          <h1 className="text-2xl font-bold">404 - Article Not Found</h1>
          <p>The article you are looking for does not exist.</p>
        </div>
      );
    }

    const article = transformNewsItem(articleData);
    return <ArticleClient article={article} />;
  } catch (err) {
    console.error("Error fetching article:", err);
    return (
      <div className="text-center py-10 text-red-500">
        <h1 className="text-2xl font-bold">500 - Server Error</h1>
        <p>Could not load the article. Please try again later.</p>
      </div>
    );
  }
}
