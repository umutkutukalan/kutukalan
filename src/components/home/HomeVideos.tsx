import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { blogbanner, projectbanner, sahnesen } from "../../utils";
import { FaStarHalf } from "react-icons/fa";
import { Link } from "react-router-dom";

const HomeVideos = () => {
  return (
    <div className="w-full h-40 md:h-50 xl:h-40 overflow-hidden rounded-lg grid grid-cols-2 gap-2">
      <ul className="w-full h-full grid grid-cols-1 sm:grid-cols-2 gap-2 overflow-hidden">
        <li className="w-full h-full bg-gray-200 rounded-lg overflow-hidden relative group">
          <Link to="/projects" className="absolute inset-0 z-10 flex flex-col justify-center items-center">
            <div className="flex flex-col text-[10px]">
              <div className="flex items-center">
                <FaStarHalf className="text-blue-700" size={24} />
                <h2 className="text-2xl oswald-400">PROJELER</h2>
              </div>
            </div>
          </Link>
          <div className="absolute inset-0 bg-black/60 z-5"></div>
          <img
            src={projectbanner}
            alt=""
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
        </li>
        <li className="w-full h-full bg-gray-200 rounded-lg overflow-hidden relative group">
          <Link to="/blogs" className="absolute inset-0 z-10 flex flex-col justify-center items-center">
            <div className="flex flex-col text-[10px]">
              <div className="flex items-center">
                <FaStarHalf className="text-green-600" size={24} />
                <h2 className="text-2xl oswald-400">BLOGLAR</h2>
              </div>
            </div>
          </Link>
          <div className="absolute inset-0 bg-black/60 z-5"></div>
          <img
            src={blogbanner}
            alt=""
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300 "
          />
        </li>
      </ul>
      <div className="w-full h-full bg-gray-200 rounded-lg overflow-hidden relative">
        <div className="absolute left-3 bottom-3 flex items-center z-10">
          <IoIosArrowBack size={16} className="text-black/70 cursor-pointer" />
          <IoIosArrowForward
            size={16}
            className="text-black/70 cursor-pointer"
          />
        </div>
        <img src={sahnesen} alt="" className="w-full h-full object-cover" />
      </div>
    </div>
  );
};

export default HomeVideos;
