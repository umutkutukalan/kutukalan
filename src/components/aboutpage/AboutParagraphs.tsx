import { useGSAP } from "@gsap/react";
import { FcGallery } from "react-icons/fc";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useRef } from "react";
gsap.registerPlugin(ScrollTrigger);

interface AboutParagraphsProps {
  title?: string;
  description?: string;
  grayeffect?: boolean;
  face?: "frontend" | "backend";
}

const AboutParagraphs = ({
  title,
  description,
  grayeffect,
  face,
}: AboutParagraphsProps) => {
  const triggerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!triggerRef.current) return;

    gsap.fromTo(
      triggerRef.current,
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top 90%",
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      ".frontendImage",
      {
        opacity: 0,
        rotate: -10,
      },
      {
        opacity: 1,
        rotate: 0,
        delay: 2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top 90%",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <section className="w-full h-[40vh] bg-black p-6 relative px-5 sm:px-10">
      {grayeffect && (
        <div className="absolute inset-0 bg-gradient-to-b from-[#0e0e10] to-transparent h-60 z-10"></div>
      )}
      <div
        className="w-full h-full flex flex-col gap-8 relative z-20 aboutMe"
        ref={triggerRef}
      >
        {face === "frontend" && (
          <>
            <div className="max-w-lg">
              <h2 className="text-5xl sm:text-6xl bg-gradient-to-r from-gray-400 via-gray-200 to-gray-400 text-transparent bg-clip-text">
                {/* Crafting Interfaces <br /> That Feel Alive */}
                {title}
              </h2>
            </div>
            <div className="w-full flex justify-end">
              <div className="flex items-center gap-5">
                <div>
                  <FcGallery className="w-20 sm:w-30 h-20 sm:h-30" />
                </div>
                <div className="flex flex-col gap-4">
                  <h4 className="max-w-sm text-sm text-gray-300">
                    {description}
                  </h4>
                  {/* <div className="flex items-center gap-2 hidden sm:flex">
                    <button className="p-2 text-xs rounded-2xl bg-[#e87602] flex items-center gap-1 cursor-pointer">
                      <div className="p-1 bg-white/80 rounded-full">
                        <HiOutlineArrowSmRight size={16} color="black" />
                      </div>
                      <span>Get Started For Free</span>
                    </button>
                    <button className="p-2 text-xs rounded-2xl border border-white/20 flex items-center gap-1 cursor-pointer">
                      <div className="p-1 bg-white/80 rounded-full">
                        <HiOutlineArrowSmRight size={16} color="black" />
                      </div>
                      <span>Book Free Demo</span>
                    </button>
                  </div> */}
                </div>
              </div>
            </div>
          </>
        )}
        {face === "backend" && (
          <>
            <div className="max-w-lg">
              <h2 className="text-5xl sm:text-6xl bg-gradient-to-r from-gray-400 via-gray-200 to-gray-400 text-transparent bg-clip-text">
                {/* Crafting Interfaces <br /> That Feel Alive */}
                {title}
              </h2>
            </div>
            <div className="w-full flex">
              <div className="flex items-center gap-5">
                <div className="flex flex-col gap-5">
                  <h4 className="max-w-lg text-base sm:text-lg bg-gradient-to-r from-gray-400 via-gray-200 to-gray-400 text-transparent bg-clip-text">
                    {description}
                  </h4>
                </div>
              </div>
            </div>
          </>
        )}
        {/* {face === "frontend" && (
          <>
            <div className="absolute -bottom-20 left-10 -z-10 frontendImage">
              <img src={garanti1} alt="" className="w-100 brightness-15" />
            </div>
          </>
        )}
        {face === "backend" && (
          <div className="absolute bottom-5 left-5 text-xs text-gray-500">
            Backend Development
          </div>
        )} */}
      </div>
    </section>
  );
};

export default AboutParagraphs;
