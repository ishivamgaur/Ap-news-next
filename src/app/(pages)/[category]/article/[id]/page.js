import { newsData } from "@/data/newsData";
import ArticleClient from "./ArticleClient";

export default async function ArticleDetailPage({ params }) {
    let parameter = await params;
  console.log(" Parameters in ArticleDetailPage", parameter);
  const article = newsData.find((item) => item.id == parameter.id);
  if (!article) return <div>Article not found</div>;

  return <ArticleClient article={article} />;
}