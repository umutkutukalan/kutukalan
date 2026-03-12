import { useState } from "react";
import { useAboutContext } from "../../../hooks/useAboutContext";
import { gray } from "../../../utils";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const AboutItem = () => {
  const { abouts } = useAboutContext();

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
    <div className="rounded-xl bg-white/10 h-full w-full relative overflow-hidden select-none">
      {currentAbout ? (
        <div className="relative h-full w-full">
          <div className="relative w-full h-full">
            <div className="absolute inset-0 bg-black/20"></div>
            <img src={gray} alt="" className="w-full h-full object-cover" />
            <div className="absolute top-13 sm:top-11 md:top-13 lg:top-11 xl:top-13 2xl:top-20 2xl:left-5 left-2 z-20">
              <p className="text-[clamp(1.4rem,4vw,1.5rem)] 3xl:text-[clamp(1.75rem,4vw,2.25rem)] 4xl:text-[clamp(1.75rem,4vw,2.5rem)] text-white leading-snug max-w-[clamp(160px,14vw,300px)]">
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
                        i === aboutCurrentIdx ? "bg-gray-800" : "bg-white/40"
                      }`}
                    ></li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-5 sm:-bottom-25 md:-bottom-5 lg:-bottom-10 xl:-bottom-5 left-1/2 -translate-x-1/2 w-full">
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
  );
};

export default AboutItem;
