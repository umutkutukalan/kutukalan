import MusicBar from "./musics/MusicBar";
import MusicQueueList from "./musics/MusicQueueList";

const Queque = () => {
  return (
    <div className="hidden xl:flex xl:flex-col xl:justify-between xl:gap-8 w-100 h-screen p-5 fixed right-0 top-0">
      <div className="flex flex-col gap-8">
        <MusicQueueList />
      </div>
      <MusicBar />
    </div>
  );
};

export default Queque;
