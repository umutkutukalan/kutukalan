import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { gray } from "../../../utils";
import { useState } from "react";
import { useGetMobilApps } from "../../../hooks/mobileApp/useGetMobilApps";

const MobilApp = () => {
  const { mobilApps } = useGetMobilApps();

  const [mobilCurrentIdx, setMobilCurrentIdx] = useState(0);
  const mobilLength = mobilApps.length;

  const currentMobilApp =
    mobilLength > 0
      ? mobilApps[((mobilCurrentIdx % mobilLength) + mobilLength) % mobilLength]
      : null;

  const handleMobilPrev = () => {
    if (!mobilLength) return;
    setMobilCurrentIdx((prev) => (prev - 1 + mobilLength) % mobilLength);
  };
  const handleMobilNext = () => {
    if (!mobilLength) return;
    setMobilCurrentIdx((prev) => (prev + 1) % mobilLength);
  };

  return (
    <div className="rounded-xl bg-white/10 h-full relative overflow-hidden">
      {currentMobilApp ? (
        <>
          <div className="relative w-full h-full">
            <div className="absolute inset-0 bg-black/20"></div>
            <img src={gray} alt="" className="w-full h-full object-cover" />
          </div>
          <div className="absolute inset-0 p-4">
            <div className="flex items-center justify-between w-full relative">
              <div className="flex items-center gap-2 text-[clamp(0.5rem,4vw,0.75rem)] 3xl:text-[clamp(1rem,4vw,1.25rem)] 4xl:text-[clamp(1.25rem,4vw,1.5rem)]">
                <BsChevronLeft
                  className="cursor-pointer"
                  onClick={handleMobilPrev}
                />
                <BsChevronRight
                  className="cursor-pointer"
                  onClick={handleMobilNext}
                />
              </div>
              <ul className="flex items-center gap-1">
                {Array.from({ length: mobilLength }).map((_, i) => (
                  <li
                    key={i}
                    className={`w-3 h-3 3xl:w-4 3xl:h-4 4xl:w-5 4xl:h-5 rounded-full overflow-hidden ${
                      i === mobilCurrentIdx ? "bg-gray-800" : "bg-white/40"
                    }`}
                  ></li>
                ))}
              </ul>
            </div>
          </div>
          <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 flex flex-col gap-2 items-center">
            <div className="h-[clamp(48px,4vw,80px)] w-[clamp(96px,8vw,160px)] object-contain flex items-center justify-center overflow-hidden">
              <img
                src={currentMobilApp.logo}
                alt=""
                className="2xl:w-full md:w-24 w-30"
              />
            </div>
            <div className="w-[clamp(150px,10vw,240px)] 3xl:w-[clamp(200px,10vw,280px)] 4xl:w-[clamp(180px,10vw,260px)] aspect-[10/20] rounded-xl overflow-hidden object-cover">
              <img src={currentMobilApp.mainImg} alt="" className="" />
            </div>
          </div>
        </>
      ) : (
        <div className="w-full h-full flex items-center justify-center text-white/60">
          No items
        </div>
      )}
      <div className="absolute bottom-2 right-2">
        <div className="flex items-center gap-2">
          <div
            className={`2xl:w-6 2xl:h-6 w-4 h-4 rounded-full ${currentMobilApp?.status === "COMPLETED" ? "bg-green-500" : currentMobilApp?.status === "IN_PROGRESS" ? "bg-yellow-400" : "bg-blue-800"}`}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default MobilApp;
