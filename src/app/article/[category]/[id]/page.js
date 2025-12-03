import ArticleContent from "./ArticleContent";
import { headers } from "next/headers";
import { configureStore } from "@reduxjs/toolkit";
import { articleApiSlice } from "@/store/api/articleApi";

// Fetch article data
async function getArticle(id) {
  try {
    const headersList = await headers();
    const forwardedFor = headersList.get("x-forwarded-for");
    const userAgent = headersList.get("user-agent");

    // Create a temporary store for this request to avoid global state pollution on server
    const store = configureStore({
      reducer: {
        [articleApiSlice.reducerPath]: articleApiSlice.reducer,
      },
      middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(articleApiSlice.middleware),
    });

    // Dispatch the query
    const result = await store
      .dispatch(
        articleApiSlice.endpoints.getArticleById.initiate(
          {
            id,
            headers: {
              "x-forwarded-for": forwardedFor || "",
              "user-agent": userAgent || "",
            },
          },
          { forceRefetch: true } // Ensure we hit the backend for view counting
        )
      )
      .unwrap();

    return result.article || result.data || result;
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

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: article.title?.en || "AP News Article",
    description: article.description?.en || "Read the latest news on AP News.",
    image: [article.featuredImage?.url || "/Ap-news.png"],
    datePublished: article.publishAt,
    dateModified: article.updatedAt || article.publishAt,
    author: [
      {
        "@type": "Person",
        name: article.author || "AP News Team",
      },
    ],
    publisher: {
      "@type": "Organization",
      name: "AP News",
      logo: {
        "@type": "ImageObject",
        url: "https://apnewsbihar.in/Ap-news.png", // Replace with actual domain
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ArticleContent article={article} />
    </>
  );
}
