import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { useRef, useState } from "react";
import { FaPause, FaPlay } from "react-icons/fa6";
import { RiDeleteBinLine } from "react-icons/ri";

// Types
interface Music {
  id: string | number;
  title?: string;
  musicUrl?: string;
  musicImg?: string;
  createdAt?: string;
  [key: string]: unknown;
}

interface MusicItemProps {
  music: Music;
  isPlaying: boolean;
  onPlay: () => void;
  onPause: () => void;
  formatDate: (dateString: string) => string;
  formatDuration: (duration: number | null) => string;
  index: number;
  progress?: { current: number; duration: number };
}

// Alt component: Her müzik için ayrı oynatma kontrolü
const MusicItem = ({
  music,
  isPlaying,
  onPlay,
  onPause,
  formatDate,
  formatDuration,
  index,
}: MusicItemProps) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [duration, setDuration] = useState<number | null>(null);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const handleToggle = () => {
    if (isPlaying) {
      onPause();
    } else {
      onPlay();
    }
  };

  const handleDeleteClick = () => {
    setShowConfirm(true);
  };

  const handleConfirmDelete = () => {
    // deleteMusic(music.id);
    setShowConfirm(false);
  };

  const handleCancelDelete = () => {
    setShowConfirm(false);
  };

  return (
    <li
      key={music.id}
      onDoubleClick={isPlaying ? onPause : onPlay}
      className="w-full h-[70px] rounded-md grid grid-cols-[2fr_0fr] sm:grid-cols-[3fr_2fr] hover:bg-[#424242b3] items-center group"
    >
      <audio
        ref={audioRef}
        src={music.musicUrl}
        onLoadedMetadata={handleLoadedMetadata}
        style={{ display: "none" }}
      />
      <div className="flex items-center gap-5">
        <div className="flex items-center">
          <div className="relative px-6 flex items-center justify-center w-10 h-10">
            {isPlaying ? (
              <DotLottieReact
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-6 group-hover:opacity-0 z-10"
                src="https://lottie.host/81713459-6e3e-433e-b2e5-1ef0bc8e5e87/48XmKJpqK7.lottie"
                loop
                autoplay
              />
            ) : (
              <p className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:opacity-0 z-10">
                {index + 1}
              </p>
            )}
            <div className="absolute flex items-center justify-center w-full h-full opacity-0 group-hover:opacity-100 z-20 text-sm">
              {isPlaying ? (
                <FaPause className="cursor-pointer" onClick={handleToggle} />
              ) : (
                <FaPlay className="cursor-pointer" onClick={handleToggle} />
              )}
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg overflow-hidden relative">
              <img
                src={music.musicImg}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <h1 className="text-xs sm:text-sm">{music.title}</h1>
              <p className="text-[10px] sm:text-xs text-gray-500">kutukalan</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full px-5 py-2 grid grid-cols-[2fr_0fr] items-center">
        <p className="text-xs text-left sm:block hidden">
          {formatDate(music.createdAt || "")}
        </p>
        <p className="text-xs text-left">{formatDuration(duration)}</p>
      </div>
      {/* Admin controls removed - should be handled by parent component */}
      <div style={{ display: "none" }}>
        <RiDeleteBinLine
          className="text-xs cursor-pointer text-red-300 hover:text-red-500 transition-all duration-100"
          onClick={handleDeleteClick}
        />
        {/* Onay kutusu */}
        {showConfirm && (
          <div className="fixed inset-0 flex items-center justify-center bg-black/30 backdrop-blur-xs z-50">
            <div className="bg-black p-6 rounded-lg shadow-lg flex flex-col gap-4">
              <span>Bu müziği silmek istediğinize emin misiniz?</span>
              <div className="flex gap-3 justify-end">
                <button
                  className="px-3 py-1 bg-gray-500 rounded hover:bg-gray-300 cursor-pointer"
                  onClick={handleCancelDelete}
                >
                  Vazgeç
                </button>
                <button
                  className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 cursor-pointer"
                  onClick={handleConfirmDelete}
                >
                  Sil
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </li>
  );
};

export default MusicItem;
