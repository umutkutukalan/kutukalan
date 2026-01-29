import { BiSolidLeftArrow, BiSolidRightArrow } from "react-icons/bi";
import { FaPause, FaPlay } from "react-icons/fa";
import { useAudioPlayer } from "../../context/AudioPlayerContext";
import { useState, useEffect, type MouseEvent } from "react";
import { PiRepeatOnce } from "react-icons/pi";
import { IoIosShuffle } from "react-icons/io";
import {
  IoVolumeHighOutline,
  IoVolumeMediumOutline,
  IoVolumeOffOutline,
} from "react-icons/io5";
import { useMusicContext } from "../../hooks/useMusicContext";

const MusicBar = () => {
  const {
    currentTrack,
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
    playNext,
    playPrev,
  } = useAudioPlayer();

  const { musics } = useMusicContext();

  const randomIndex = Math.floor(Math.random() * musics.length);

  const displayTrack = currentTrack || musics[randomIndex];

  // Placeholder için sahte progress (müzik çalmıyorsa)
  const [placeholderProgress, setPlaceholderProgress] = useState({
    current: 0,
    duration: 0,
  });

  // Placeholder müziğin süresini al
  useEffect(() => {
    if (!currentTrack && displayTrack?.musicUrl) {
      const audio = new Audio(displayTrack.musicUrl);
      audio.addEventListener("loadedmetadata", () => {
        setPlaceholderProgress({
          current: 0,
          duration: audio.duration || 0,
        });
      });
      return () => {
        audio.pause();
        audio.src = "";
      };
    }
  }, [currentTrack, displayTrack]);

  // Gösterilecek progress (çalıyorsa gerçek, değilse placeholder)
  const displayProgress = currentTrack ? progress : placeholderProgress;

  const [volume, setVolume] = useState(1); // Default volume set to 1 (max volume)
  const [showVolume, setShowVolume] = useState(false);
  const [lastVolume, setLastVolume] = useState(1);

  return (
    <>
      <div className="w-full h-150 rounded-xl p-4 flex flex-col justify-between overflow-hidden relative">
        <div className="absolute inset-0">
          <img
            src={displayTrack?.musicImg}
            alt=""
            className="w-full h-full object-cover brightness-20"
          />
        </div>
        <div className="w-full h-full flex flex-col justify-between z-100">
          <div className="flex flex-col gap-3">
            <div className="w-[clamp(10rem,8vw,20rem)] h-[clamp(10rem,8vw,20rem)] 3xl:w-[clamp(15rem,4vw,20rem)] 3xl:h-[clamp(15rem,4vw,20rem)] 4xl:w-[clamp(30rem,4vw,40rem)] 4xl:h-[clamp(30rem,4vw,40rem)] rounded-lg bg-gray-200 overflow-hidden">
              <img
                src={displayTrack?.musicImg}
                alt=""
                className="w-full h-full object-cover brightness-75"
              />
            </div>
            <div className="flex flex-col">
              <h2 className="text-[clamp(0.7rem,4vw,1.25rem)] 3xl:text-[clamp(1.25rem,4vw,1.75rem)] 4xl:text-[clamp(1.5rem,4vw,2rem)]">
                {displayTrack?.title}
              </h2>
              <p className="text-[clamp(0.5rem,4vw,0.850rem)] 3xl:text-[clamp(1rem,4vw,1.25rem)] 4xl:text-[clamp(1.25rem,4vw,1.5rem)] text-white/40">
                {displayTrack?.producer}
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            {/* Progress bar with current time and duration */}
            <div className="w-full flex items-center gap-2">
              <div className="text-xs select-none">
                {Math.floor(displayProgress.current / 60)}.
                {(Math.floor(displayProgress.current) % 60)
                  .toString()
                  .padStart(2, "0")}
              </div>
              <div
                className="flex-1 h-1 bg-gray-600 rounded cursor-pointer"
                onClick={(e: MouseEvent<HTMLDivElement>) => {
                  if (!currentTrack) return; // Sadece müzik çalıyorsa seek yapılabilir
                  if (!displayProgress.duration) return;
                  const rect = e.currentTarget.getBoundingClientRect();
                  const clickX: number = e.clientX - rect.left;
                  const percent: number = clickX / rect.width;
                  const newTime: number = percent * displayProgress.duration;
                  handleSeek(newTime);
                }}
              >
                <div
                  className="h-1 bg-white rounded"
                  style={{
                    width:
                      displayProgress.duration > 0
                        ? `${
                            (displayProgress.current /
                              displayProgress.duration) *
                            100
                          }%`
                        : "0%",
                    transition: "width 0.2s linear",
                  }}
                ></div>
              </div>
              <div className="text-xs select-none">
                {Math.floor(displayProgress.duration / 60)}.
                {(Math.floor(displayProgress.duration) % 60)
                  .toString()
                  .padStart(2, "0")}
              </div>
            </div>
            <div className="flex items-center justify-between">
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
              <div className="flex items-center gap-2">
                <BiSolidLeftArrow
                  className="text-2xl cursor-pointer"
                  onClick={playPrev}
                />
                <button
                  className="w-10 h-10 rounded-full flex items-center justify-center bg-white text-black cursor-pointer"
                  onClick={() => {
                    if (!isPlaying) {
                      if (displayTrack) {
                        playTrack(displayTrack);
                      }
                    } else {
                      pause();
                    }
                  }}
                >
                  {!isPlaying ? (
                    <FaPlay className="text-xl" title="Başlat" />
                  ) : (
                    <FaPause className="text-xl" title="Durdur" />
                  )}
                </button>
                <BiSolidRightArrow
                  className="text-2xl cursor-pointer"
                  onClick={playNext}
                />
              </div>
              <button
                className="relative flex items-center cursor-pointer h-full"
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
                      setLastVolume(volume);
                      setVolume(0);
                      setAudioVolume(0);
                    }}
                  />
                ) : (
                  <IoVolumeHighOutline
                    title="Ses Seviyesi"
                    onClick={() => {
                      setLastVolume(volume);
                      setVolume(0);
                      setAudioVolume(0);
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MusicBar;
