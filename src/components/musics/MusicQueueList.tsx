import "./musiclist.css";
import { useEffect, useState } from "react";
import { useMusicContext } from "../../hooks/useMusicContext";
import { getRandomItems } from "../../utils/getRandomItems";
import { IoMdPause, IoMdPlay } from "react-icons/io";
import { LuRefreshCw } from "react-icons/lu";
import { useAudioPlayer } from "../../context/AudioPlayerContext";

const MusicQueueList = () => {
  const { musics } = useMusicContext();
  const { currentTrack, isPlaying, playTrack, pause } = useAudioPlayer();

  type MusicItem = {
    id: string | number;
    title?: string;
    producer?: string;
    musicUrl?: string;
    musicImg?: string;
    createdAt?: string;
    [key: string]: unknown;
  };

  const [selected, setSelected] = useState<typeof musics | null>(null);

  useEffect(() => {
    const picked = getRandomItems(musics, 4);
    setSelected(picked);
  }, [musics]);

  const handleShowRandom = () => {
    const picked = getRandomItems(musics, 4);
    setSelected(picked);
  };

  const handleToggle = (music: MusicItem) => {
    // Eğer tıklanan parça zaten currentTrack ise, oynatma durumuna göre pause/play yap
    if (currentTrack && currentTrack.id === music.id) {
      if (isPlaying) {
        pause();
      } else {
        playTrack(music);
      }
      return;
    }

    // Farklı bir parça tıklandıysa, o parçayı çal
    playTrack(music);
  };

  return (
    <div className="flex flex-col gap-4 text-white">
      <div className="w-full flex items-center justify-between">
        <h2 className="text-[clamp(0.75rem,4vw,1rem)] 3xl:text-[clamp(1rem,4vw,1.2rem)] 4xl:text-[clamp(1.25rem,4vw,1.5rem)]">
          MUZIKLER
        </h2>
        <button
          onClick={handleShowRandom}
          className="cursor-pointer flex items-center gap-1 text-[clamp(0.5rem,4vw,0.75rem)] 3xl:text-[clamp(1rem,4vw,1.2rem)] 4xl:text-[clamp(1.25rem,4vw,1.5rem)]"
        >
          <LuRefreshCw />
          Yenile
        </button>
      </div>
      <ul className="flex flex-col">
        {selected?.map((music: MusicItem) => (
          <li
            key={music.id}
            className={`musicItem flex items-center justify-between hover:bg-white/10 p-2 rounded-lg`}
          >
            <div className="flex items-center gap-2 3xl:gap-4 4xl:gap-5">
              <div className="w-[clamp(2rem,4vw,2.5rem)] h-[clamp(2rem,4vw,2.5rem)] 3xl:w-[clamp(40px,4vw,60px)] 3xl:h-[clamp(40px,4vw,60px)] 4xl:w-[clamp(50px,4vw,80px)] 4xl:h-[clamp(50px,4vw,80px)] rounded-lg overflow-hidden">
                <img
                  src={music.musicImg}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-[clamp(0.5rem,4vw,0.850rem)] 3xl:text-[clamp(1rem,4vw,1.2rem)] 4xl:text-[clamp(1.25rem,4vw,1.5rem)] flex flex-col gap-1">
                <h3
                  className={`${
                    currentTrack && currentTrack.id === music.id
                      ? "text-green-400"
                      : ""
                  }`}
                >
                  {music.title}
                </h3>
                <div className="flex items-center gap-1 text-gray-400 text-[clamp(0.5rem,4vw,0.7rem)] 3xl:text-[clamp(0.75rem,4vw,0.875rem)] 4xl:text-[clamp(0.75rem,4vw,1.25rem)]">
                  <p>{music.producer} </p>
                </div>
              </div>
            </div>
            <button
              className="cursor-pointer"
              onClick={() => handleToggle(music)}
            >
              {isPlaying && currentTrack && currentTrack.id === music.id ? (
                <IoMdPause
                  className="text-[clamp(0.75rem,4vw,1rem)] 3xl:text-[clamp(1rem,4vw,1.2rem)] 4xl:text-[clamp(1.25rem,4vw,1.5rem)]"
                  title="Durdur"
                />
              ) : (
                <IoMdPlay
                  className="text-[clamp(0.75rem,4vw,1rem)] 3xl:text-[clamp(1rem,4vw,1.2rem)] 4xl:text-[clamp(1.25rem,4vw,1.5rem)]"
                  title="Başlat"
                />
              )}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MusicQueueList;
