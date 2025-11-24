import React, { useState, useEffect, useRef } from "react";
import { FaTimes, FaVolumeMute, FaVolumeUp } from "react-icons/fa";

const FloatingVideoPlayer = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  useEffect(() => {
    // This effect synchronizes the video's muted property with our state
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
    }
  }, [isMuted]);

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed bottom-12 right-4 w-60 md:w-60 rounded-lg shadow-2xl z-50  animate-fade-in-up ">
      <div className="relative rounded-lg ">
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-2 right-2 cursor-pointer z-10 bg-black/50 text-white rounded-full p-1.5 hover:bg-black/75 transition-colors"
          aria-label="Close video player"
        >
          <FaTimes size={16} />
        </button>
        <button
          onClick={() => setIsMuted(!isMuted)}
          className="absolute top-2 left-2 z-10 cursor-pointer bg-black/50 text-white rounded-full p-1.5 hover:bg-black/75 transition-colors"
          aria-label={isMuted ? "Unmute" : "Mute"}
        >
          {isMuted ? <FaVolumeMute size={16} /> : <FaVolumeUp size={16} />}
        </button>
        <video
          ref={videoRef}
          className="w-full h-auto aspect-video rounded-2xl"
          src="/ap-news-video.mp4" // Note: You need to provide this video file
          autoPlay
          loop
          playsInline
          muted
        />
      </div>
    </div>
  );
};

export default FloatingVideoPlayer;
