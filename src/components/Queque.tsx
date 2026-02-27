import MusicBar from "./musics/MusicBar";
import MusicQueueList from "./musics/MusicQueueList";

const Queque = () => {
  return (
    <div className="hidden xl:flex xl:flex-col justify-between xl:gap-5 w-[clamp(15rem,30vw,45rem)] p-5 fixed h-[100svh] right-0 top-0 border-l border-white/10 z-100 bg-black hide-scrollbar overflow-y-auto pointer-events-auto">
      <MusicQueueList />
      {/* <ul className="flex flex-col gap-5">
        <li className="w-full h-20 border border-white/20 rounded-lg flex items-center overflow-hidden relative">
          <div className="absolute inset-0 left-0 top-0">
            <img src={gray} alt="" className="w-full h-full object-cover" />
          </div>
          <div className="w-full h-full flex p-2 z-20 flex-col">
            <h3 className="text-black text-sm">Ramazan Projeleri</h3>
            <p className="text-xs">Lorem, ipsum.</p>
          </div>
          <div className="w-full h-full flex items-center justify-end">
            <img
              src={notlybanner}
              alt="Notly Banner"
              className="w-50 object-cover rounded-xl brightness-75"
            />
          </div>
        </li>
      </ul> */}
      <div className="min-h-[400px] max-h-[600px]">
        <MusicBar />
      </div>
    </div>
  );
};

export default Queque;
