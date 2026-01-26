import { useState } from "react";
import { useAboutContext } from "../../hooks/useAboutContext";
import { gray, iphonechip } from "../../utils";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const SecondHomeBorder = () => {
  const { abouts } = useAboutContext();

  // Carousel state for about cards
  const [aboutCurrentIdx, setAboutCurrentIdx] = useState(0);

  const aboutLength = abouts.length;
  const currentAbout =
    aboutLength > 0
      ? abouts[((aboutCurrentIdx % aboutLength) + aboutLength) % aboutLength]
      : null;

  const handleAboutPrev = () => {
    if (!aboutLength) return;
    setAboutCurrentIdx((prev) => (prev - 1 + aboutLength) % aboutLength);
  };
  const handleAboutNext = () => {
    if (!aboutLength) return;
    setAboutCurrentIdx((prev) => (prev + 1) % aboutLength);
  };

  return (
    <div className="w-full h-[clamp(350px,24vw,400px)] relative flex flex-col gap-1 oswald-300">
      {/* <div className="w-full flex items-center justify-between">
          <h2 className="text-lg">PROJELER</h2>
          <div className="flex items-center gap-1">
            <BsChevronLeft className="text-lg cursor-pointer" />
            <BsChevronRight className="text-lg cursor-pointer" />
          </div>
        </div> */}
      <div className="w-full h-full overflow-hidden shadow-2xl relative gap-2 grid sm:grid-cols-[2fr_1fr] md:grid-cols-[3fr_1.25fr] auto-rows-fr">
        <div className="relative w-full h-full overflow-hidden rounded-xl oswald-400 sm:flex hidden">
          {/* grid grid-rows-2 gap-2 */}
          <div className="w-full h-full overflow-hidden border border-white/10 text-black relative group">
            <img
              src={iphonechip}
              alt=""
              className="absolute inset-0 w-full h-full object-cover z-0 brightness-75"
            />
          </div>
        </div>
        <div className="relative w-full h-full overflow-hidden gap-2 items-center">
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
                  <div className="absolute top-11 sm:top-11 md:top-11 lg:top-11 xl:top-11 2xl:top-20 2xl:left-5 left-2 z-20">
                    <p className="text-[clamp(1rem,4vw,1.5rem)] 3xl:text-[clamp(1.75rem,4vw,2.25rem)] 4xl:text-[clamp(1.75rem,4vw,2.5rem)] text-white leading-snug max-w-[clamp(160px,14vw,300px)]">
                      <span className="bg-white text-black box-decoration-clone leading-snug px-2">
                        {currentAbout?.paragraph}
                      </span>
                    </p>
                  </div>
                </div>

                <div className="absolute inset-0 p-4 w-full h-full">
                  <div className="w-full h-full flex flex-col items-start justify-between">
                    <div className="flex items-center justify-between w-full relative">
                      <div className="flex items-center gap-2 text-[clamp(0.5rem,4vw,0.75rem)] 3xl:text-[clamp(1rem,4vw,1.25rem)] 4xl:text-[clamp(1.25rem,4vw,1.5rem)] z-30">
                        <BsChevronLeft
                          className="cursor-pointer"
                          onClick={handleAboutPrev}
                        />
                        <BsChevronRight
                          className="cursor-pointer"
                          onClick={handleAboutNext}
                        />
                      </div>
                      <ul className="flex items-center gap-1">
                        {Array.from({ length: aboutLength }).map((_, i) => (
                          <li
                            key={i}
                            className={`w-3 h-3 3xl:w-4 3xl:h-4 4xl:w-5 4xl:h-5 rounded-full overflow-hidden ${
                              i === aboutCurrentIdx
                                ? "bg-gray-800"
                                : "bg-white/40"
                            }`}
                          ></li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-15 sm:-bottom-20 md:-bottom-10 lg:-bottom-15 xl:-bottom-5 left-1/2 -translate-x-1/2 w-full">
                  <div className={`w-full`}>
                    <img
                      src={currentAbout?.aboutImage}
                      alt=""
                      className="w-full h-full md:brightness-100 brightness-70"
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
        </div>
      </div>
    </div>
  );
};

export default SecondHomeBorder;
