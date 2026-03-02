import { useState } from "react";
import { desktopApps } from "../../../constants";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const DesktopApp = () => {
  const [currentSlideIdx, setCurrentSlideIdx] = useState(0);  

  const slideMap = desktopApps.flatMap((desktopApp, desktopAppIdx) =>
    desktopApp.content.map((content) => ({
      desktopAppIdx,
      content,
      githubLink: desktopApp.githubLink,
    })),
  );

  const totalSlides = slideMap.length;
  const currentSlide = totalSlides ? slideMap[currentSlideIdx] : null;
  const activeDesktopAppIdx = currentSlide?.desktopAppIdx ?? 0;

  const handleDesktopAppPrev = () => {
    if (!totalSlides) return;
    setCurrentSlideIdx((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const handleDesktopAppNext = () => {
    if (!totalSlides) return;
    setCurrentSlideIdx((prev) => (prev + 1) % totalSlides);
  };

  return (
    <div className="w-full h-full overflow-hidden text-black relative group">
      <div className="absolute inset-0 left-0 top-0 bg-gradient-to-br from-black via-black/40 to-transparent z-50"></div>
      <div className="absolute inset-0 left-5 top-5 z-70">
        <div className="flex items-center gap-5 w-full relative">
          <div className="flex items-center gap-2 text-[clamp(0.5rem,4vw,0.75rem)] 3xl:text-[clamp(1rem,4vw,1.25rem)] 4xl:text-[clamp(1.25rem,4vw,1.5rem)]">
            <BsChevronLeft
              className="cursor-pointer text-white"
              onClick={handleDesktopAppPrev}
            />
            <BsChevronRight
              className="cursor-pointer text-white"
              onClick={handleDesktopAppNext}
            />
          </div>
          <ul className="flex items-center gap-1">
            {Array.from({ length: desktopApps.length }).map((_, i) => (
              <li
                key={i}
                className={`w-3 h-3 3xl:w-4 3xl:h-4 4xl:w-5 4xl:h-5 rounded-full overflow-hidden ${
                  i === activeDesktopAppIdx ? "bg-white" : "bg-white/50"
                }`}
              ></li>
            ))}
          </ul>
        </div>
      </div>
      {slideMap.map((slide, i) => (
        <div key={`${slide.desktopAppIdx}-${slide.content.id}`}>
          <div className="absolute right-2 top-2 z-80 flex items-center gap-2">
            <div className="bg-black px-3 py-1 rounded-sm">
              <h3 className="text-white text-sm 3xl:text-[clamp(1.25rem,4vw,1.5rem)] 4xl:text-[clamp(1.5rem,4vw,2rem)]">
                {slide.content.title}
              </h3>
            </div>
          </div>

          <div className="absolute bottom-2 left-2 z-80">
            <Link to={slide.githubLink} target="_blank">
              <FaGithub className="text-white" />
            </Link>
          </div>

          <div className="absolute inset-0 w-full z-0">
            <img
              src={slide.content.desktopAppsImg}
              alt=""
              className={`w-full h-full object-cover brightness-75 transition-opacity duration-500 ${
                i === currentSlideIdx ? "opacity-100" : "opacity-0"
              }`}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default DesktopApp;
