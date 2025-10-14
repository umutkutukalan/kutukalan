import MusicList from "./musics/MusicList";
import UpgradePremium from "./UpgradePremium";

const Queque = () => {
  return (
    <div className="w-160 p-5 flex flex-col justify-between h-full">
      <div className="flex flex-col gap-8">
        <MusicList />
        <UpgradePremium />
      </div>
    </div>
  );
};

export default Queque;
