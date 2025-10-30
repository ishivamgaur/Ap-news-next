import { FaPlay } from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";

const VideoCard = ({ video, onPlay }) => {
  const { language } = useLanguage();
  const { title, youtubeVideoId } = video;
  const thumbnailUrl = `https://i3.ytimg.com/vi/${youtubeVideoId}/hqdefault.jpg`;

  return (
    <div
      className="relative group cursor-pointer rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out"
      onClick={() => onPlay(youtubeVideoId)}
    >
      <img
        src={thumbnailUrl}
        alt={title[language]}
        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-between p-4">
        <div className="flex-grow flex items-center justify-center">
          <div className="w-14 h-14 bg-red-600/80 hover:bg-red-700/80 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-red-600">
            <FaPlay className="text-white text-xl" />
          </div>
        </div>
        <h3 className="text-white font-semibold text-md leading-tight line-clamp-2">
          {title[language]}
        </h3>
      </div>
    </div>
  );
};

export default VideoCard;
