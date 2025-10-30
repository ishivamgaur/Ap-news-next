import React from "react";

const FacebookEmbed = ({ postUrl }) => {
  // We need to encode the URL to pass it as a parameter to the Facebook plugin
  const encodedUrl = encodeURIComponent(postUrl);
  const iframeSrc = `https://www.facebook.com/plugins/post.php?href=${encodedUrl}&show_text=true&width=500`;

  return (
    <div
      style={{ display: "flex", justifyContent: "center", margin: "20px 0" }}
    >
      <iframe
        src={iframeSrc}
        width="300"
        height="400" // Adjust height as needed
        style={{ border: "none", overflow: "hidden" }}
        scrolling="no"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        allowFullScreen={true}
      ></iframe>
    </div>
  );
};

export default FacebookEmbed;
