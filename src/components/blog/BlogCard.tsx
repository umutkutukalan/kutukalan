import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { nikegreen, oakley } from "../../utils";

<div className="absolute top-0 left-0 p-4 z-5 w-full h-full">
  <div className="w-full h-full flex items-center gap-4">
    <div className="h-full w-1/3">
      <div className="w-full h-full rounded-md bg-gray-200 overflow-hidden shadow-md shadow-white/30">
        <img src={nikegreen} alt="" className="h-full w-full object-cover" />
      </div>
    </div>
    <div className="h-full w-2/3">
      <div className="w-full h-full flex flex-col items-start justify-between">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full overflow-hidden border-white/20 border">
              <img src={oakley} alt="" className="w-full h-full object-cover" />
            </div>
            <p className="text-xs">Umut Kütükalan</p>
          </div>
          <div className="flex items-center gap-2 text-xs">
            <BsChevronLeft />
            <BsChevronRight />
          </div>
        </div>
        <h2 className="text-lg line-clamp-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
          dolorum reiciendis numquam placeat ut saepe?
        </h2>

        <p style={{ fontSize: "12px" }}>20 Ekim, 2025</p>
      </div>
    </div>
  </div>
</div>;
