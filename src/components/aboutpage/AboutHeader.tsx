import { useRef } from "react";
import type { AboutProps } from "../../pages/About";
import { garanticard, iphonechip, poppin, sabiroto } from "../../utils";

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

  return (
    <section className="w-full h-full overflow-hidden relative">
      <div className="relative w-full flex items-end px-10 z-30">
        <div className="w-full flex items-end justify-between">
          <div className="flex flex-col">
            <h1 className="text-[80px] font-semibold bg-gradient-to-r from-gray-400 via-gray-200 to-gray-400 text-transparent bg-clip-text">
              kutukalan.
            </h1>
            <h2 className="text-sm text-gray-400 -mt-4">{userResponse?.aboutMe}</h2>
          </div>
        </div>
      </div>
      <div className="relative h-full -mt-5">
        <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent h-50 z-20"></div>
        <div className="[perspective:-1000px] w-full h-140 overflow-hidden relative z-10">
          <ul
            ref={listRef}
            className="flex gap-4 h-full -mt-20 [transform-style:preserve-3d] 
    [transform:rotateX(-40deg)_rotateY(-20deg)_rotateZ(-32deg)] flex items-end justify-center"
          >
            {[...images].map((img, i) => (
              <li
                key={i}
                className="h-90 w-80 shrink-0 rounded-xl overflow-hidden border border-white/10 shadow-lg shadow-white/30"
                style={{
                  // boxShadow: "-2px 2px 2px 2px rgba(255, 255, 255, 1)",
                }}
              >
                <img src={img} className="w-full h-full object-cover" />
              </li>
            ))}
          </ul>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-20"></div>
      </div>
    </section>
  );
};

export default AboutHeader;
