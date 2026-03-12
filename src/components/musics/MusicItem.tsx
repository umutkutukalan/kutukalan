import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { useRef, useState, useEffect } from "react";
import { FaPause, FaPenToSquare, FaPlay } from "react-icons/fa6";
import { useAudioPlayer } from "../../context/AudioPlayerContext";
import { FaTrash } from "react-icons/fa";
import { useMusicDelete } from "../../hooks/music/useMusicDelete";
import { useNavigate } from "react-router-dom";

// Types
interface Music {
  id: number;
  title?: string;
  musicUrl?: string;
  musicImg?: string;
  producer?: string;
  album?: string;
  featuredArtists?: string[];
  releaseDate?: string;
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
  userRole?: string;
  activeContextMenuId?: number | null;
  onContextMenuOpen?: (id: number | null) => void;
}

// Alt component: Her müzik için ayrı oynatma kontrolü
const MusicItem = ({
  music,
  isPlaying,
  onPlay,
  onPause,
  formatDuration,
  index,
  userRole,
  activeContextMenuId,
  onContextMenuOpen,
}: MusicItemProps) => {
  const { deleteMusic } = useMusicDelete();

  const audioRef = useRef<HTMLAudioElement>(null);
  const [duration, setDuration] = useState<number | null>(null);
  const [showConfirm, setShowConfirm] = useState(false);
  const [contextMenu, setContextMenu] = useState<{
    x: number;
    y: number;
  } | null>(null);
  const { currentTrack } = useAudioPlayer();
  const navigate = useNavigate();

  const isContextMenuOpen = activeContextMenuId === music.id;

  // Context menüyü kapatma
  useEffect(() => {
    if (!isContextMenuOpen) {
      setContextMenu(null);
      return;
    }

    const handleClickOutside = () => {
      setContextMenu(null);
      onContextMenuOpen?.(null);
    };

    window.addEventListener("click", handleClickOutside);
    return () => window.removeEventListener("click", handleClickOutside);
  }, [isContextMenuOpen, onContextMenuOpen]);

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

  const handleConfirmDelete = (musicId: number) => {
    deleteMusic(musicId);
    setShowConfirm(false);
  };

  const handleCancelDelete = () => {
    setShowConfirm(false);
  };

  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    if (userRole === "ADMIN") {
      setContextMenu({ x: e.clientX, y: e.clientY });
      onContextMenuOpen?.(music.id);
    }
  };

  return (
    <li
      key={music.id}
      onDoubleClick={isPlaying ? onPause : onPlay}
      onContextMenu={handleContextMenu}
      onClick={(e) => {
        // lg ve altında (mobil/tablet) tek tıklama ile çal
        if (window.innerWidth < 1024 && e.currentTarget === e.target) {
          handleToggle();
        }
      }}
      className={`w-full h-[70px] 3xl:h-[clamp(70px,4vw,90px)] 4xl:h-[clamp(80px,8vw,120px)] rounded-md grid grid-cols-[2fr_0fr] sm:grid-cols-[3fr_2fr] hover:bg-[#424242b3] items-center group`}
    >
      <audio
        ref={audioRef}
        src={music.musicUrl}
        onLoadedMetadata={handleLoadedMetadata}
        style={{ display: "none" }}
      />
      <div className="flex items-center gap-5">
        <div className="flex items-center">
          <div className="relative px-6 flex items-center justify-center w-10 h-10 3xl:w-[clamp(40px,4vw,60px)] 3xl:h-[clamp(40px,4vw,60px)] 4xl:w-[clamp(50px,4vw,80px)] 4xl:h-[clamp(50px,4vw,80px)]">
            {isPlaying ? (
              <DotLottieReact
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-6 group-hover:opacity-0 z-10"
                src="/lottie/music.lottie"
                loop
                autoplay
              />
            ) : (
              <p
                className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:opacity-0 3xl:text-[clamp(1rem,4vw,1.2rem)] 4xl:text-[clamp(1.25rem,4vw,1.5rem)] z-10 ${
                  currentTrack?.id === music.id ? "text-green-500" : ""
                }`}
              >
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
          <div className="flex items-center gap-2 3xl:gap-4 4xl:gap-5">
            <div className="w-10 h-10 3xl:w-[clamp(40px,4vw,60px)] 3xl:h-[clamp(40px,4vw,60px)] 4xl:w-[clamp(50px,4vw,80px)] 4xl:h-[clamp(50px,4vw,80px)] rounded-lg overflow-hidden relative">
              <img
                src={music.musicImg}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <h1
                className={`text-[clamp(0.75rem,4vw,0.9rem)] 3xl:text-[clamp(1rem,4vw,1.2rem)] 4xl:text-[clamp(1.25rem,4vw,1.5rem)] ${
                  currentTrack?.id === music.id ? "text-green-500" : ""
                }`}
              >
                {music.title}
              </h1>
              <p className="text-[clamp(0.5rem,4vw,0.8rem)] 3xl:text-[clamp(0.75rem,4vw,0.875rem)] 4xl:text-[clamp(0.75rem,4vw,1.25rem)] text-gray-500">
                {" "}
                {music.producer}
                {music.featuredArtists &&
                  music.featuredArtists.length > 0 &&
                  `, ${music.featuredArtists.join(", ")}`}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full px-5 py-2 flex items-center justify-end">
        <p className="text-[clamp(0.5rem,4vw,0.7rem)] 3xl:text-[clamp(0.75rem,4vw,0.875rem)] 4xl:text-[clamp(0.75rem,4vw,1.25rem)]">
          {formatDuration(duration)}
        </p>
      </div>
      {/* Onay kutusu */}
      {showConfirm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/30 backdrop-blur-xs z-50">
          <div className="bg-[#2c2c2c] p-6 rounded-lg shadow-lg flex flex-col gap-4">
            <span>Bu müziği silmek istediğinize emin misiniz?</span>
            <div className="flex gap-3 justify-end">
              <button
                className="px-3 py-1 bg-gray-600 rounded hover:bg-gray-700 cursor-pointer"
                onClick={handleCancelDelete}
              >
                Vazgeç
              </button>
              <button
                className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 cursor-pointer"
                onClick={() => handleConfirmDelete(music.id)}
              >
                Sil
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Context Menu - Admin Only */}
      {isContextMenuOpen && contextMenu && userRole === "ADMIN" && (
        <div
          className="fixed bg-[#212121] border border-white/10 rounded-xs z-50 py-3 w-50"
          style={{
            top: `${contextMenu.y}px`,
            left: `${contextMenu.x}px`,
          }}
        >
          <div
            className="px-4 py-3 text-sm hover:bg-[#2c2c2c] cursor-pointer flex items-center gap-3 transition-colors"
            onClick={() => {
              navigate(`/update-music/${music.id}`);
              setContextMenu(null);
              onContextMenuOpen?.(null);
            }}
          >
            <FaPenToSquare className="text-base" />
            Güncelle
          </div>
          <div
            className="px-4 py-3 text-sm hover:bg-[#2c2c2c] cursor-pointer flex items-center gap-3 transition-colors"
            onClick={() => {
              handleDeleteClick();
              setContextMenu(null);
              onContextMenuOpen?.(null);
            }}
          >
            <FaTrash className="text-base" />
            Sil
          </div>
        </div>
      )}
    </li>
  );
};

export default MusicItem;
