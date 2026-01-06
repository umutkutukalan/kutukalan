import MusicList from "../components/musics/MusicList";
import PlaylistDetail from "../components/musics/PlaylistDetail";

const Musics = () => {
  return (
    <div className="pt-15 lg:pt-5 pb-5 px-0 sm:px-10 h-screen">
      <PlaylistDetail />
      <MusicList />
    </div>
  );
};

export default Musics;
