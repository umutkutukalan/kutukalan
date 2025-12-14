import { FaPause } from "react-icons/fa";
import { IoIosShuffle } from "react-icons/io";
import {
  IoChevronUp,
  IoClose,
  IoPlaySharp,
  IoPlaySkipBackSharp,
  IoPlaySkipForwardSharp,
  IoVolumeHighOutline,
  IoVolumeMediumOutline,
  IoVolumeOffOutline,
} from "react-icons/io5";
import { PiRepeatOnce } from "react-icons/pi";
import { Link } from "react-router-dom";
import { useAudioPlayer } from "../../context/AudioPlayerContext";
import { useMusicContext } from "../../hooks/useMusicContext";
import { useState } from "react";

export const GlobalMusicBar = () => {
  const { musics, playNext, playPrev } = useMusicContext();
  const [volume, setVolume] = useState(1); // Default volume set to 1 (max volume)
  const [showVolume, setShowVolume] = useState<boolean>(false);
  const [lastVolume, setLastVolume] = useState<number>(1);

  const {
    currentTrack,
    setCurrentTrack,
    progress,
    playTrack,
    pause,
    isPlaying,
    handleSeek,
    isRepeat,
    isShuffle,
    handleRepeat,
    handleShuffle,
    setVolume: setAudioVolume,
  } = useAudioPlayer();

  if (!currentTrack) return null;

  const closePlayer = () => {
    setCurrentTrack(null);
    pause();
  };

  return (
    <div className="xl:hidden fixed bottom-0 left-0 w-full bg-[#212121] text-white flex items-center justify-between xl:px-20 md:px-20 px-10 py-2 z-50">
      {/* Left section for controls */}
      <div className="xl:w-5/7 md:w-2/3 flex items-center gap-8">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-5">
            <IoPlaySkipBackSharp
              title="Önceki"
              className="text-xl cursor-pointer"
              onClick={playPrev}
            />
            {isPlaying ? (
              <FaPause
                title="Durdur"
                className="cursor-pointer text-xl"
                onClick={pause}
              />
            ) : (
              <IoPlaySharp
                title="Oynat"
                className="cursor-pointer text-xl"
                onClick={() => playTrack(currentTrack)}
              />
            )}
            <IoPlaySkipForwardSharp
              title="Sonraki"
              className="text-xl cursor-pointer"
              onClick={playNext}
            />
          </div>
          <div className="flex items-center gap-2">
            <button>
              <PiRepeatOnce
                title="Tekrarla"
                className={`cursor-pointer text-xl ${
                  isRepeat ? "text-blue-400" : ""
                }`}
                onClick={() => handleRepeat()}
              />
            </button>
            <button>
              <IoIosShuffle
                title="Karıştır"
                className={`cursor-pointer text-xl ${
                  isShuffle ? "text-green-400" : ""
                }`}
                onClick={() => handleShuffle()}
              />
            </button>
          </div>
        </div>
        {/* Middle section for progress bar */}
        <div className="w-full flex items-center gap-8">
          {/* Progress bar with current time and duration */}
          <div className="w-full flex items-center gap-2">
            <div className="text-xs select-none">
              {Math.floor(progress.current / 60)}.
              {(Math.floor(progress.current) % 60).toString().padStart(2, "0")}
            </div>
            <div
              className="flex-1 h-1 bg-gray-600 rounded cursor-pointer"
              onClick={(e) => {
                if (!progress.duration) return;
                const rect = e.currentTarget.getBoundingClientRect();
                const clickX = e.clientX - rect.left;
                const percent = clickX / rect.width;
                const newTime = percent * progress.duration;
                handleSeek(newTime);
              }}
            >
              <div
                className="h-1 bg-white rounded"
                style={{
                  width:
                    progress.duration > 0
                      ? `${(progress.current / progress.duration) * 100}%`
                      : "0%",
                  transition: "width 0.2s linear",
                }}
              ></div>
            </div>
            <div className="text-xs select-none">
              {Math.floor(progress.duration / 60)}.
              {(Math.floor(progress.duration) % 60).toString().padStart(2, "0")}
            </div>
          </div>
          {/* Right section for volume and close button */}
          <div className="flex items-center gap-2">
            <button
              className="relative flex items-center cursor-pointer h-full focus:outline-none focus-visible:outline-none"
              onKeyDown={(e) => {
                if (e.key === "Escape") {
                  setShowVolume(false);
                }
              }}
              onMouseEnter={() => setShowVolume(true)}
              onMouseLeave={() => setShowVolume(false)}
              style={{ minHeight: "30px" }}
            >
              {volume < 0.01 ? (
                <IoVolumeOffOutline
                  title="Ses Seviyesi"
                  onClick={() => {
                    setVolume(lastVolume);
                    setAudioVolume(lastVolume);
                  }}
                />
              ) : volume < 0.5 ? (
                <IoVolumeMediumOutline
                  title="Ses Seviyesi"
                  onClick={() => {
                    if (window.innerWidth <= 1024) {
                      setLastVolume(volume);
                    } else {
                      setLastVolume(volume);
                      setVolume(0);
                      setAudioVolume(0);
                    }
                  }}
                />
              ) : (
                <IoVolumeHighOutline
                  title="Ses Seviyesi"
                  onClick={() => {
                    if (window.innerWidth <= 1024) {
                      setLastVolume(volume);
                      setVolume(0);
                      setAudioVolume(0);
                    } else {
                      setLastVolume(volume);
                      setVolume(0);
                      setAudioVolume(0);
                    }
                  }}
                />
              )}
              {showVolume && (
                <div className="absolute bottom-9 left-1/2 -translate-x-1/2 w-10 h-25 rounded-lg flex items-center justify-center z-50 bg-black">
                  <input
                    type="range"
                    min={0}
                    max={1}
                    step={0.01}
                    value={volume}
                    onChange={(e) => {
                      setVolume(Number(e.target.value));
                      setAudioVolume(Number(e.target.value));
                      if (Number(e.target.value) > 0)
                        setLastVolume(Number(e.target.value));
                    }}
                    className="w-16 h-1 bg-gray-600 rounded cursor-pointer"
                    style={{ transform: "rotate(-90deg)" }}
                  />
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-t-black border-l-transparent border-r-transparent"></div>
                </div>
              )}
            </button>
            <Link to={"/musics"} className="text-white hover:text-gray-300">
              <IoChevronUp title="Müzik Listesi" className="cursor-pointer" />
            </Link>
            <IoClose
              title="Kapat"
              className="cursor-pointer"
              onClick={closePlayer}
            />
          </div>
        </div>
      </div>

      {/* Right section for current track details */}
      <div className="xl:w-2/7 md:w-1/3">
        <div className="flex items-center justify-end">
          <div className="flex items-center gap-3 w-50">
            <img
              src={currentTrack.musicImg}
              alt=""
              className="w-8 h-8 object-cover flex-shrink-0"
            />
            <div className="flex flex-col">
              <div className="font-semibold text-xs line-clamp-1">
                {currentTrack.title}
              </div>
              <div
                style={{
                  fontSize: "0.65rem",
                }}
              >
                kutukalan
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobalMusicBar;
