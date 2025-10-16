import { sahnesen } from "../utils";
import { BsChevronLeft } from "react-icons/bs";
import { BsChevronRight } from "react-icons/bs";

const HomeBorder = () => {
  return (
    <div className="w-full h-3/5 relative flex flex-col gap-1">
      <div className="w-full flex items-center justify-between">
        <h2 className="text-lg">PROJELER</h2>
        <div className="flex items-center gap-1">
          <BsChevronLeft className="text-lg cursor-pointer" />
          <BsChevronRight className="text-lg cursor-pointer" />
        </div>
      </div>
      <div className="w-full h-full overflow-hidden shadow-2xl relative gap-2 grid grid-cols-2 auto-rows-fr">
        <div className="relative w-full h-full overflow-hidden border border-white/10"></div>
        <div className="relative w-full h-full overflow-hidden grid grid-rows-3">
          <div>
            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-black/30" />
            <img src={sahnesen} alt="" className="w-full h-full object-cover" />
          </div>
          <div>
            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-black/30" />
            <img src={sahnesen} alt="" className="w-full h-full object-cover" />
          </div>
          <div>
            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-black/30" />
            <img src={sahnesen} alt="" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBorder;
