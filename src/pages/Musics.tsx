import MusicList from "../components/musics/MusicList";
import PlaylistDetail from "../components/musics/PlaylistDetail";

const Musics = () => {
  return (
    <div className="py-5 px-10 h-screen">
      <PlaylistDetail />
      <MusicList />
    </div>
  );
};

export default Musics;
