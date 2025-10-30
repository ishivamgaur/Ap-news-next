import React, { useState, useMemo } from "react";
import { newsData } from "../data/newsData";
import InstagramCard from "./InstagramCard.jsx";
import FacebookCard from "./FacebookCard.jsx";
import { useLanguage } from "../context/LanguageContext.jsx";
import Pagination from "./Pagination.jsx";

const SocialSections = () => {
  const { language } = useLanguage();
  const [instaCurrentPage, setInstaCurrentPage] = useState(1);
  const [fbCurrentPage, setFbCurrentPage] = useState(1);
  const postsPerPage = 4; // Show 4 posts to match the 4-column grid

  // Filter news items that have an Instagram Post ID
  const allInstagramPosts = useMemo(
    () => newsData.filter((item) => item.instagramPostId),
    []
  );
  const totalInstaPages = Math.ceil(allInstagramPosts.length / postsPerPage);
  const currentInstaPosts = useMemo(() => {
    const startIndex = (instaCurrentPage - 1) * postsPerPage;
    return allInstagramPosts.slice(startIndex, startIndex + postsPerPage);
  }, [instaCurrentPage, allInstagramPosts]);

  // Filter news items that have a Facebook Post URL
  const allFacebookPosts = useMemo(
    () => newsData.filter((item) => item.facebookPostUrl),
    []
  );
  const totalFbPages = Math.ceil(allFacebookPosts.length / postsPerPage);
  const currentFbPosts = useMemo(() => {
    const startIndex = (fbCurrentPage - 1) * postsPerPage;
    return allFacebookPosts.slice(startIndex, startIndex + postsPerPage);
  }, [fbCurrentPage, allFacebookPosts]);

  return (
    <div className="pb-12">
      {/* Instagram Section */}
      {allInstagramPosts.length > 0 && (
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 border-l-4 border-red-700 pl-4 mb-6">
            {language === "hi" ? "हमारे इंस्टाग्राम से" : "From Our Instagram"}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {currentInstaPosts.map((post) => (
              <InstagramCard key={`insta-${post.id}`} post={post} />
            ))}
          </div>
          {totalInstaPages > 1 && (
            <Pagination
              currentPage={instaCurrentPage}
              totalPages={totalInstaPages}
              onPageChange={setInstaCurrentPage}
            />
          )}
        </div>
      )}

      {/* Facebook Section */}
      {allFacebookPosts.length > 0 && (
        <div>
          <h2 className="text-3xl font-bold text-gray-800 border-l-4 border-red-700 pl-4 mb-6">
            {language === "hi" ? "हमारे फेसबुक से" : "From Our Facebook"}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {currentFbPosts.map((post) => (
              <FacebookCard key={`fb-${post.id}`} post={post} />
            ))}
          </div>
          {totalFbPages > 1 && (
            <Pagination
              currentPage={fbCurrentPage}
              totalPages={totalFbPages}
              onPageChange={setFbCurrentPage}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default SocialSections;
