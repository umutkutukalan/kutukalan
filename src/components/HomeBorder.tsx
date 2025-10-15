import { sahnesen } from "../utils";
import { BsChevronLeft } from "react-icons/bs";
import { BsChevronRight } from "react-icons/bs";

const HomeBorder = () => {
  return (
    <div className="w-full h-1/2 overflow-hidden relative flex flex-col gap-1">
      <div className="w-full flex items-center justify-between">
        <h2 className="text-lg">SPECIAL SHOW</h2>
        <div className="flex items-center gap-1">
          <BsChevronLeft className="text-lg cursor-pointer" />
          <BsChevronRight className="text-lg cursor-pointer" />
        </div>
      </div>
      <div className="w-full h-full overflow-hidden rounded-2xl shadow-2xl">
        {/* <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/50" /> */}
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
