import "./musicList.css";
import { useEffect, useState } from "react";
import { useMusicContext } from "../../hooks/useMusicContext";
import { getRandomItems } from "../../utils/getRandomItems";
import { RelativeTime } from "../../utils/RelativeTime";
import { IoMdPause, IoMdPlay } from "react-icons/io";
import { LuRefreshCw } from "react-icons/lu";
import { useAudioPlayer } from "../../context/AudioPlayerContext";

const MusicQueueList = () => {
  const { musics } = useMusicContext();
  const { currentTrack, isPlaying, playTrack, pause } = useAudioPlayer();
  const { formatRelativeTime } = RelativeTime();

  type MusicItem = {
    id: string | number;
    title?: string;
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
        <h2 className="">MUZIKLER</h2>
        <button
          onClick={handleShowRandom}
          className="cursor-pointer flex items-center gap-1 text-xs"
        >
          <LuRefreshCw />
          Yenile
        </button>
      </div>
      <ul className="flex flex-col">
        {selected?.map((music: MusicItem) => (
          <li
            key={music.id}
            className="musicItem flex items-center justify-between hover:bg-white/10 p-2 rounded-lg cursor-pointer"
          >
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg overflow-hidden">
                <img
                  src={String(music.musicImg)}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-sm flex flex-col gap-1">
                <h3 className="">{music.title}</h3>
                <div className="flex items-center gap-1 text-gray-400 text-[10px]">
                  <p>{formatRelativeTime(String(music.createdAt))}</p>
                </div>
              </div>
            </div>
            <button
              className="cursor-pointer"
              onClick={() => handleToggle(music)}
            >
              {isPlaying && currentTrack && currentTrack.id === music.id ? (
                <IoMdPause className="text-xl" title="Durdur" />
              ) : (
                <IoMdPlay className="text-xl" title="Başlat" />
              )}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MusicQueueList;
