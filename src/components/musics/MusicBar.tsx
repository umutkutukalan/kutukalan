import { blue, nikegreen } from "../../utils";
import { BsList } from "react-icons/bs";
import { BiSolidLeftArrow, BiSolidRightArrow } from "react-icons/bi";
import { FaPlay } from "react-icons/fa";
import { FaVolumeDown } from "react-icons/fa";

const MusicBar = () => {
  return (
    <div className="w-full bg-[#4a6d88] rounded-xl p-4 flex flex-col justify-between overflow-hidden relative">
      <div className="absolute inset-0">
        <img
          src={blue}
          alt=""
          className="w-full h-full object-cover brightness-50 "
        />
      </div>
      <div className="w-full h-full flex flex-col justify-between z-100">
        <div className="flex flex-col gap-3">
          <div className="w-36 h-36 rounded-lg bg-gray-200 overflow-hidden">
            <img
              src={nikegreen}
              alt=""
              className="w-full h-full object-cover brightness-80"
            />
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
        <div className="flex items-center justify-between px-4 py-2 rounded-lg">
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
    </div>
  );
};

export default MusicBar;
