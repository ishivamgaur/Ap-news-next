import ArticleContent from "./ArticleContent";

// Fetch article data
async function getArticle(id) {
  try {
    const res = await fetch(
      `https://ap-news-b.onrender.com/api/articles/${id}`,
      {
        cache: "no-store", // Ensure fresh data
      }
    );

    if (!res.ok) {
      return null;
    }

    const data = await res.json();
    return data.article || data.data || data;
  } catch (error) {
    console.error("Failed to fetch article:", error);
    return null;
  }
}

// Generate Metadata for SEO and Sharing
export async function generateMetadata({ params }) {
  const { id } = await params;
  const article = await getArticle(id);

  if (!article) {
    return {
      title: "Article Not Found | AP News",
    };
  }

  const title = article.title?.en || "AP News Article";
  const description =
    article.description?.en || "Read the latest news on AP News.";

  // Ensure image is JPG for better social media compatibility (WhatsApp/Twitter often fail with WebP/AVIF)
  let imageUrl = article.featuredImage?.url || "/Ap-news.png";
  console.log("Featured Image URL:", article?.featuredImage?.url);
  if (imageUrl.includes("res.cloudinary.com")) {
    // Replace extension with .jpg
    imageUrl = imageUrl.replace(/\.(webp|avif|png)$/, ".jpg");
    // Or if no extension or different structure, append format param?
    // Cloudinary usually works by changing extension.
    // Let's be safer: if it ends with an extension, swap it.
  }

  return {
    title: `Ap News | ${title}`,
    description: description,
    openGraph: {
      title: `Ap News | ${title}`,
      description: description,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `Ap News | ${title}`,
      description: description,
      images: [imageUrl],
    },
  };
}

export default async function ArticlePage({ params }) {
  const { id } = await params;
  const article = await getArticle(id);

  return <ArticleContent article={article} />;
}
