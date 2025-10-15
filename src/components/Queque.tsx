import MusicBar from "./musics/MusicBar";
import MusicList from "./musics/MusicList";
import UpgradePremium from "./UpgradePremium";

const Queque = () => {
  return (
    <div className="hidden xl:flex xl:flex-col xl:justify-between xl:gap-8 w-160 h-screen p-5">
      <div className="flex flex-col gap-8">
        <MusicList />
        <UpgradePremium />
      </div>
      <MusicBar />
    </div>
  );
};

export default Queque;
