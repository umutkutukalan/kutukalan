import { oakley } from "../../utils";
import { BsList } from "react-icons/bs";
import { BiSolidLeftArrow, BiSolidRightArrow } from 'react-icons/bi';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
import { FaVolumeDown } from "react-icons/fa";

const MusicBar = () => {
  return (
    <div className="w-full h-full bg-[#4a6d88] rounded-xl p-4 flex flex-col justify-between">
      <div className="flex flex-col gap-3">
        <div className="w-34 h-34 rounded-lg bg-gray-200 overflow-hidden">
          <img src={oakley} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="flex flex-col gap-1">
          <h2 className="text-lg">Exclusive Talks</h2>
          <p className="text-xs text-white/40">Balqis ft Sehzade</p>
        </div>
        <div className="flex flex-col gap-1 mt-2">
          <div className="h-1 w-full bg-white"></div>
          <div className="flex items-center justify-between">
            <span className="text-xs text-white/40">0:00</span>
            <span className="text-xs text-white/40">3:45</span>
          </div>
        </div>
      </div>
      <div className="bg-[#1f0e0e] flex items-center justify-between px-4 py-2 rounded-lg">
        <BsList className="text-xl" />
        <div className="flex items-center gap-2">
          <BiSolidLeftArrow className="text-2xl" />
          <div className="w-10 h-10 rounded-full flex items-center justify-center bg-white text-black">
            <FaPlay className="text-xl" />
          </div>
          <BiSolidRightArrow className="text-2xl" />
        </div>
        <FaVolumeDown className="text-xl" />
      </div>
    </div>
  );
};

export default MusicBar;
