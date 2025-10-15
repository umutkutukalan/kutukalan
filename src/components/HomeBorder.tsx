import { sahnesen } from "../utils";
import { BsChevronLeft } from "react-icons/bs";
import { BsChevronRight } from "react-icons/bs";

const HomeBorder = () => {
  return (
    <div className="w-full flex-1 overflow-hidden relative flex flex-col gap-1">
      <div className="w-full flex items-center justify-between">
        <h2 className="text-lg">PROJELER</h2>
        <div className="flex items-center gap-1">
          <BsChevronLeft className="text-lg cursor-pointer" />
          <BsChevronRight className="text-lg cursor-pointer" />
        </div>
      </div>
      <div className="w-full h-full overflow-hidden rounded-2xl shadow-2xl relative">
        <div className="absolute inset-0 bg-gradient-to-l from-transparent to-black/30" />
        <img
          src={sahnesen}
          alt=""
          className="w-full h-full object-cover object-top"
        />
      </div>
    </div>
  );
};

export default HomeBorder;
