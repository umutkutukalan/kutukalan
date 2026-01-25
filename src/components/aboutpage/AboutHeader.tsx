import { useRef } from "react";
import type { AboutProps } from "../../pages/About";
import { garanticard, iphonechip, logo2, poppin, sabiroto } from "../../utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useAudioPlayer } from "../../context/AudioPlayerContext";

const AboutHeader = ({ userResponse }: AboutProps) => {
  const { currentTrack } = useAudioPlayer();
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

    gsap.from(".banner", {
      opacity: 0,
      y: 20,
      x: 0,
      duration: 1,
      delay: 1.8,
      ease: "power2.out",
    });

    gsap.from(".nameJob", {
      opacity: 0,
      y: 20,
      x: 0,
      duration: 1,
      delay: 2,
      ease: "power2.out",
    });
  }, []);

  return (
    <section
      className={`w-full overflow-hidden relative xl:h-[100vh] ${
        currentTrack ? "h-[calc(100vh-50px)]" : "h-[100vh]"
      } py-[clamp(4rem,4vw,5rem)] 3xl:py-[clamp(5rem,4vw,6rem)]`}
    >
      <div className="relative w-full flex items-end">
        <div className="w-full flex items-end justify-between z-30 px-5 sm:px-15">
          <div className="flex flex-col banner">
            <div className="flex items-center">
              <div className="">
                <img
                  src={logo2}
                  alt="Logo"
                  className="w-[clamp(15rem,30vw,25rem)] 3xl:w-[clamp(20rem,30vw,30rem)] 4xl:w-[clamp(25rem,30vw,35rem)]"
                />
              </div>
              {/* <h1 className="text-[80px] font-semibold bg-gradient-to-r from-gray-400 via-gray-200 to-gray-400 text-transparent bg-clip-text">
                kutukalan.
              </h1> */}
            </div>
            <div className="max-w-xl">
              <h3 className="text-lg sm:text-xl bg-gradient-to-r from-gray-400 via-gray-200 to-gray-400 text-transparent bg-clip-text">
                işlevselliğin estetiği.
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="[perspective:-1000px] w-full h-[clamp(35rem,30vw,80rem)] 3xl:h-[clamp(40rem,30vw,90rem)] 4xl:h-[clamp(45rem,35vw,100rem)] relative z-10">
          <ul
            ref={listRef}
            className="flex gap-4 h-full -mt-20 [transform-style:preserve-3d] 
    [transform:rotateX(-40deg)_rotateY(-20deg)_rotateZ(-32deg)] flex items-end justify-center"
          >
            {[...images].map((img, i) => (
              <li
                key={i}
                className="h-[clamp(25rem,30vw,30rem)] w-[clamp(25rem,20vw,40rem)] 3xl:h-[clamp(30rem,30vw,35rem)] 3xl:w-[clamp(30rem,20vw,40rem)] 4xl:h-[clamp(35rem,30vw,40rem)] 4xl:w-[clamp(35rem,20vw,45rem)] shrink-0 rounded-xl overflow-hidden border border-white/10 bg-black"
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
      <div className="absolute bottom-6 right-6 z-50 text-right max-w-sm nameJob">
        <div className="flex flex-col">
          <h2 className="text-sm text-gray-200">
            {userResponse?.firstName} {userResponse?.lastName}
          </h2>
          <h3 className="text-sm text-gray-300 leading-relaxed">
            {userResponse?.job}
          </h3>
        </div>
      </div>
    </section>
  );
};

export default AboutHeader;
