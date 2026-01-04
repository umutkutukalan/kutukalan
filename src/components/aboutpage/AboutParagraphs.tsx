import { useGSAP } from "@gsap/react";
import type { AboutProps } from "../../pages/About";
import { BsStar } from "react-icons/bs";
import { HiOutlineArrowSmRight } from "react-icons/hi";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const AboutParagraphs = ({ userResponse }: AboutProps) => {
  useGSAP(() => {
    gsap.fromTo(
      ".aboutMe",
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
          trigger: ".aboutMe",
          start: "top 90%",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <section className="w-full h-[50vh] bg-black p-6 relative px-5 sm:px-10">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0e0e10] to-transparent h-60 z-10"></div>
      <div className="w-full h-full flex flex-col gap-5 relative z-20 aboutMe">
        <div className="">
          <h2 className="text-6xl">
            Crafting Interfaces <br /> That Feel Alive
          </h2>
        </div>
        <div className="w-full flex justify-end">
          <div className="flex items-start gap-4">
            <BsStar size={64} className="text-white" />
            <div className="flex flex-col gap-4">
              <h4 className="text-sm max-w-sm">
                Dijital ürünleri sadece çalışır değil, hissettirir hale
                getiriyorum.
              </h4>
              <div className="flex items-center gap-2">
                <button className="p-2 text-xs rounded-2xl bg-[#5166e7] flex items-center gap-1">
                  <div className="p-1 bg-white/80 rounded-full">
                    <HiOutlineArrowSmRight size={16} color="black" />
                  </div>
                  <span>Get Started For Free</span>
                </button>
                <button className="p-2 text-xs rounded-2xl border border-white/20 flex items-center gap-1">
                  <div className="p-1 bg-white/80 rounded-full">
                    <HiOutlineArrowSmRight size={16} color="black" />
                  </div>
                  <span>Book Free Demo</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* <ul className="grid grid-cols-2 gap-4">
        {userResponse?.aboutMeItems?.map((paragraph, index) => (
          <li key={index} className="w-full h-full">
            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
              {paragraph}
            </p>
          </li>
        ))}
      </ul> */}
      </div>
    </section>
  );
};

export default AboutParagraphs;
