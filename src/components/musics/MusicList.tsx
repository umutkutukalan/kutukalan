import { useMusicContext } from "../../hooks/useMusicContext";
import MusicItem from "./MusicItem";
import { useAudioPlayer } from "../../context/AudioPlayerContext";
import { FormatDate } from "../../utils/FormatDate";
import LoadingScreen from "../LoadingScreen";
import { useUser } from "../../hooks/useUserContext";
import { useState } from "react";

const MusicList = () => {
  const { musics, loading } = useMusicContext();
  const { currentTrack, isPlaying, playTrack, pause } = useAudioPlayer();
  const { formatDate } = FormatDate();
  const { user } = useUser();

  const [activeContextMenuId, setActiveContextMenuId] = useState<
    string | number | null
  >(null);

  if (loading) {
    return <LoadingScreen key={location.pathname}/>;
  }

  return (
    <div className={`px-2 sm:px-0 ${currentTrack ? "pb-10" : ""} xl:pb-0`}>
      <div className="w-full grid grid-cols-[3fr_0fr] sm:grid-cols-[3fr_2fr] py-1 sm:px-10 text-xs text-gray-300 border-b border-white/10">
        <div className="flex items-center gap-5 pl-5">
          <div className="flex items-center">
            <div className="flex items-center gap-1">
              <span>#</span>
              <span>Başlık</span>
            </div>
          </div>
        </div>
        <div
          className={`w-full px-5 py-2 grid ${"grid-cols-[2fr_0fr]"} items-center`}
        >
          <span className="sm:block hidden">Tarih</span>
          <span className="">Süre</span>
        </div>
      </div>
      <div className="sm:px-10 w-full py-5">
        <ul className="flex flex-col w-full">
          {musics.map((music, idx) => (
            <MusicItem
              key={music.id}
              music={music}
              index={idx}
              userRole={user?.role}
              activeContextMenuId={activeContextMenuId}
              onContextMenuOpen={setActiveContextMenuId}
              isPlaying={currentTrack?.musicUrl === music.musicUrl && isPlaying}
              onPlay={() => playTrack(music)}
              onPause={pause}
              formatDate={formatDate}
              formatDuration={(s: number | null) => {
                if (!s || isNaN(s)) return "0:00";
                const min = Math.floor(s / 60);
                const sec = Math.floor(s % 60)
                  .toString()
                  .padStart(2, "0");
                return `${min}:${sec}`;
              }}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MusicList;
