import { electronapp, gray, runaley } from "../../utils";
import { BsChevronLeft } from "react-icons/bs";
import { BsChevronRight } from "react-icons/bs";
import { useAbout } from "../../hooks/useAbout";
import { useEffect, useState } from "react";

const HomeBorder = () => {
  const { getAbouts, aboutList } = useAbout();
  useEffect(() => {
    getAbouts();
  }, []);

  console.log(aboutList);

  // Carousel state for about cards
  const [currentIdx, setCurrentIdx] = useState(0);
  const length = aboutList.length;
  const currentAbout =
    length > 0 ? aboutList[((currentIdx % length) + length) % length] : null;

  const handlePrev = () => {
    if (!length) return;
    setCurrentIdx((prev) => (prev - 1 + length) % length);
  };
  const handleNext = () => {
    if (!length) return;
    setCurrentIdx((prev) => (prev + 1) % length);
  };

  return (
    <div className="w-full h-2/5 relative flex flex-col gap-1 oswald-300">
      {/* <div className="w-full flex items-center justify-between">
        <h2 className="text-lg">PROJELER</h2>
        <div className="flex items-center gap-1">
          <BsChevronLeft className="text-lg cursor-pointer" />
          <BsChevronRight className="text-lg cursor-pointer" />
        </div>
      </div> */}
      <div className="w-full h-full overflow-hidden shadow-2xl relative gap-2 grid grid-cols-2 auto-rows-fr">
        <div className="relative w-full h-full overflow-hidden grid grid-cols-2 gap-2 items-center">
          <div className="rounded-xl bg-white/10 h-full w-full relative overflow-hidden">
            {currentAbout ? (
              <div className="relative h-full w-full">
                <div className="relative w-full h-full">
                  <div className="absolute inset-0 bg-black/20"></div>
                  <img
                    src={gray}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-15 left-2">
                    <p className="2xl:text-3xl text-2xl">
                      <span className="bg-white text-black box-decoration-clone leading-snug px-2">
                        {currentAbout.paragraph}
                      </span>
                    </p>
                  </div>
                </div>

                <div className="absolute inset-0 p-4 w-full h-full">
                  <div className="w-full h-full flex flex-col items-start justify-between">
                    <div className="flex items-center justify-between w-full relative">
                      <div className="flex items-center gap-2 text-xs">
                        <BsChevronLeft
                          className="cursor-pointer"
                          onClick={handlePrev}
                        />
                        <BsChevronRight
                          className="cursor-pointer"
                          onClick={handleNext}
                        />
                      </div>
                      <ul className="flex items-center gap-1">
                        {Array.from({ length }).map((_, i) => (
                          <li
                            key={i}
                            className={`w-3 h-3 rounded-full overflow-hidden ${
                              i === currentIdx ? "bg-gray-800" : "bg-white/40"
                            }`}
                          ></li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-15 left-1/2 -translate-x-1/2">
                  <div className={`2xl:w-80 w-60`}>
                    <img
                      src={currentAbout.aboutImage}
                      alt=""
                      className="w-full h-full"
                    />
                  </div>
                </div>
              </div>
            ) : (
              <div className="w-full h-full flex items-center justify-center text-white/60">
                No items
              </div>
            )}
          </div>
          <div className="rounded-xl bg-white/10 h-full relative overflow-hidden">
            <div className="relative w-full h-full">
              <div className="absolute inset-0 bg-black/20"></div>
              <img src={gray} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="absolute inset-0 p-4">
              <div className="flex items-center justify-between w-full relative">
                <div className="flex items-center gap-2 text-xs">
                  <BsChevronLeft className="cursor-pointer" />
                  <BsChevronRight className="cursor-pointer" />
                </div>
                <ul className="flex items-center gap-1">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <li
                      key={i}
                      className={`w-3 h-3 rounded-full overflow-hidden ${
                        i === 0 ? "bg-gray-800" : "bg-white/40"
                      }`}
                    ></li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 flex flex-col gap-2 items-center">
              <div className="2xl:w-40 w-35">
                <img src={runaley} alt="" className="w-full h-full" />
              </div>
            </div>
          </div>
        </div>
        <div className="relative w-full h-full overflow-hidden rounded-lg">
          {/* grid grid-rows-2 gap-2 */}
          <div className="w-full h-full rounded-lg overflow-hidden border border-white/10 relative z-30 group cursor-pointer">
            <img
              src={electronapp}
              alt=""
              className="absolute inset-0 w-full h-full object-cover z-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBorder;
