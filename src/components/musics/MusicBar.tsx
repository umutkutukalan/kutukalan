import { blue, oakley } from "../../utils";
import { BsList } from "react-icons/bs";
import { BiSolidLeftArrow, BiSolidRightArrow } from "react-icons/bi";
import { FaPlay } from "react-icons/fa";
import { FaVolumeDown } from "react-icons/fa";

const MusicBar = () => {
  return (
    <div className="w-full h-full bg-[#4a6d88] rounded-xl p-4 flex flex-col justify-between overflow-hidden relative">
      <div className="absolute inset-0">
        <img
          src={blue}
          alt=""
          className="w-full h-full object-cover brightness-30"
        />
      </div>
      <div className="w-full h-full flex flex-col justify-between z-100">
        <div className="flex flex-col gap-3">
          <div className="2xl:w-2/3 w-1/2 2xl:h-80 h-50 rounded-lg bg-gray-200 overflow-hidden">
            <img
              src={oakley}
              alt=""
              className="w-full h-full object-cover brightness-75"
            />
          </div>
          <div className="flex flex-col">
            <h2 className="text-xl">Born from Absence</h2>
            <p className="text-xs text-white/40">Sehzade</p>
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <div className="flex flex-col gap-1 mt-2">
            <div className="h-1 w-full bg-white"></div>
            <div className="flex items-center justify-between">
              <span className="text-xs text-white/40">0:00</span>
              <span className="text-xs text-white/40">3:45</span>
            </div>
          </div>
          <div className="flex items-center justify-between">
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
    </div>
  );
};

export default MusicBar;
