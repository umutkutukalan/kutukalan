import { itstime } from "../../utils";

const PlaylistSettings = () => {
  return (
    <div className="flex items-end gap-4 border-b border-white/20 pb-5">
      <div className="h-30 w-30 md:w-20 md:h-20 rounded-md border border-white/20 overflow-hidden flex-shrink-0">
        <img src={itstime} alt="" className="h-full w-full object-cover" />
      </div>
      <div className="flex flex-col">
        <h2 className="text-2xl font-semibold text-white">Can't Me Hurt</h2>
        <p className="text-[10px] text-gray-400 md:w-2/3">
          Her ritim bir duygunun yankısı, her beat kendi hikayesini fısıldar.
          Müzik, kelimelerle anlatamadığım şeyleri duyurmanın yolu.
        </p>
      </div>
    </div>
  );
};

export default PlaylistSettings;
