import React, { useEffect } from "react";

const InstagramEmbed = ({ postId }) => {
  useEffect(() => {
    // Function to load the Instagram embed script
    const loadScript = () => {
      if (window.instgrm) {
        window.instgrm.Embeds.process();
        return;
      }

      const script = document.createElement("script");
      script.async = true;
      script.src = "//www.instagram.com/embed.js";
      script.onload = () => {
        window.instgrm.Embeds.process();
      };
      document.body.appendChild(script);
    };

    loadScript();
  }, [postId]);

  return (
    <blockquote
      className="instagram-media"
      data-instgrm-permalink={`https://www.instagram.com/p/${postId}/`}
      data-instgrm-version="14"
      style={{
        margin: "1px auto",
        maxWidth: "320px", // A good base width for embeds
        width: "calc(100% - 2px)", // Ensures it fits within the card padding
        border: "1px solid rgb(219, 219, 219)",
        borderRadius: "4px",
        padding: "0",
      }}
    ></blockquote>
  );
};

export default InstagramEmbed;
