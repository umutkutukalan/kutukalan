import { useRef } from "react";
import type { AboutProps } from "../../pages/About";
import { garanticard, iphonechip, poppin, sabiroto } from "../../utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const AboutHeader = ({ userResponse }: AboutProps) => {
  const images = [garanticard, sabiroto, iphonechip, poppin];

  const listRef = useRef<HTMLUListElement>(null);

  // useGSAP(() => {
  //   const list = listRef.current!;
  //   const singleWidth = list.scrollWidth / 2;
  //   const distanceY = 300;

  //   gsap.to(list, {
  //     x: `-=${singleWidth}`,
  //     y: `+=${distanceY}`,
  //     duration: 15,
  //     ease: "linear",
  //     repeat: -1,
  //     modifiers: {
  //       x: gsap.utils.unitize((x) => parseFloat(x) % singleWidth),
  //       y: gsap.utils.unitize((y) => parseFloat(y) % distanceY),
  //     },
  //   });
  // }, []);

  useGSAP(() => {
    const items = listRef.current?.querySelectorAll("li");
    if (!items || items.length === 0) return;

    gsap.from(items, {
      opacity: 0,
      y: 0,
      x: -320,
      z: -1,
      duration: 1,
      ease: "power2.out",
      stagger: 0.4,
    });
  }, []);

  return (
    <section className="w-full overflow-hidden relative h-[100vh] py-15 sm:py-10">
      <div className="relative w-full flex items-end">
        <div className="w-full flex items-end justify-between z-30 px-5 sm:px-10">
          <div className="flex flex-col">
            <h1 className="text-[80px] font-semibold bg-gradient-to-r from-gray-400 via-gray-200 to-gray-400 text-transparent bg-clip-text">
              kutukalan.
            </h1>
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="[perspective:-1000px] w-full h-140 relative z-10">
          <ul
            ref={listRef}
            className="flex gap-4 h-full -mt-20 [transform-style:preserve-3d] 
    [transform:rotateX(-40deg)_rotateY(-20deg)_rotateZ(-32deg)] flex items-end justify-center"
          >
            {[...images].map((img, i) => (
              <li
                key={i}
                className="h-90 w-80 shrink-0 rounded-xl overflow-hidden border border-white/10 bg-black"
                style={
                  {
                    // boxShadow: "-2px 2px 2px 2px rgba(255, 255, 255, 1)",
                  }
                }
              >
                <img src={img} className="w-full h-full object-cover" />
              </li>
            ))}
          </ul>
        </div>
        {/* <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e10] h-full to-transparent z-20"></div> */}
      </div>
      <div className="absolute bottom-6 right-6 z-50 text-right max-w-sm">
        <div className="flex flex-col">
          <h2 className="text-sm text-gray-200">
            {userResponse?.firstName} {userResponse?.lastName}
          </h2>
          <h3 className="text-xs text-gray-300 leading-relaxed">
            {userResponse?.aboutMe}
          </h3>
        </div>
      </div>
    </section>
  );
};

export default AboutHeader;
