import React, { useEffect } from "react";

const GoogleAds = ({
  adSlot,
  adFormat = "auto",
  style = { display: "block" },
}) => {
  useEffect(() => {
    try {
      // Push an ad to the adsbygoogle array
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.error("AdSense error:", e);
    }
  }, [adSlot]); // Re-run effect if adSlot changes

  // Important: Replace with your actual AdSense client ID
  const adClient = "ca-pub-5516481292318087";

  return (
    <div className="ad-container my-4 text-center bg-gray-100 dark:bg-gray-800 min-h-[100px] flex items-center justify-center">
      <ins
        className="adsbygoogle"
        style={style}
        data-ad-client={adClient}
        data-ad-slot={adSlot}
        data-ad-format={adFormat}
        data-full-width-responsive="true"
      ></ins>
    </div>
  );
};

export default GoogleAds;
