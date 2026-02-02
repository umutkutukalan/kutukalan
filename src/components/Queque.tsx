import MusicBar from "./musics/MusicBar";
import MusicQueueList from "./musics/MusicQueueList";

const Queque = () => {
  return (
    <div className="hidden xl:flex xl:flex-col justify-between xl:gap-5 w-[clamp(15rem,30vw,45rem)] p-5 fixed h-[100svh] right-0 top-0 border-l border-white/10 z-100 bg-black hide-scrollbar overflow-y-auto pointer-events-auto">
      <MusicQueueList />
      <div className="min-h-[400px] max-h-[800px]">
        <MusicBar />
      </div>
    </div>
  );
};

export default Queque;
