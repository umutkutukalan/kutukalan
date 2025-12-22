import { useGSAP } from "@gsap/react";
import { itstime, mor } from "../../utils";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

interface AboutBoxProps {
  aboutBox1: React.RefObject<HTMLLIElement | null>;
  aboutBox2: React.RefObject<HTMLLIElement | null>;
  aboutBox3: React.RefObject<HTMLLIElement | null>;
}

const AboutBox = ({ aboutBox1, aboutBox2, aboutBox3 }: AboutBoxProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  const img1Ref = useRef<HTMLImageElement>(null);
  const img2Ref = useRef<HTMLImageElement>(null);
  const img3Ref = useRef<HTMLImageElement>(null);
  const card2InnerRef = useRef<HTMLDivElement>(null);
  const card3InnerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (
      !aboutBox1.current ||
      !aboutBox2.current ||
      !aboutBox3.current ||
      !sectionRef.current
    )
      return;

    gsap.set([card2InnerRef.current, card3InnerRef.current], {
      rotateY: 0,
      transformOrigin: "center center",
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "center center",
        end: "+=3000",
        scrub: 2,
        pin: true,
        pinSpacing: true,
        anticipatePin: 1,
      },
    });

    tl.to(
      aboutBox1.current,
      {
        scale: 1,
        ease: "none",
        zIndex: 40,
      },
      0
    )

      .to(
        [aboutBox2.current],
        {
          opacity: 1,
          duration: 12,
          ease: "power2.inOut",
          zIndex: 20,
        },
        0
      )

      .to(
        card2InnerRef.current,
        {
          rotateY: 180,
          duration: 12,
          ease: "power2.inOut",
        },
        0
      )

      .to(
        [aboutBox3.current],
        {
          opacity: 1,
          duration: 12,
          ease: "power2.inOut",
          zIndex: 10,
        },
        12
      )

      .to(
        card3InnerRef.current,
        {
          rotateY: 180,
          duration: 12,
          ease: "power2.inOut",
        },
        12
      )

      .to(
        aboutBox3.current,
        {
          opacity: 0,
          duration: 6,
          ease: "power2.inOut",
          zIndex: 0,
          x: "-100%",
        },
        24
      )

      .to(
        aboutBox2.current,
        {
          opacity: 0,
          duration: 6,
          ease: "power2.inOut",
          zIndex: 0,
          x: "-100%",
        },
        30
      )

      .to(
        aboutBox1.current,
        {
          scale: 1.2,
          x: "100%",
          duration: 6,
          ease: "none",
          zIndex: 10,
        },
        36
      );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="px-5 h-[50vh] flex items-center justify-center"
    >
      <ul className="h-full w-full grid grid-cols-3 gap-5">
        <li
          ref={aboutBox1}
          className="w-full h-full relative"
          style={{ perspective: "1000px" }}
        >
          <img
            ref={img1Ref}
            src={mor}
            alt=""
            className="w-full h-full object-cover absolute inset-0 border border-gray-400 rounded-md"
          />
        </li>
        <li ref={aboutBox2}>
          <div className="card">
            <div ref={card2InnerRef} className="card-inner">
              <div className="card-face front">
                <img
                  ref={img2Ref}
                  src={itstime}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="card-face back">
                <img src={mor} alt="" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </li>
        <li ref={aboutBox3}>
          <div className="card">
            <div ref={card3InnerRef} className="card-inner">
              <div className="card-face front">
                <img
                  ref={img3Ref}
                  src={mor}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="card-face back bg-blue-200">
                <img src={itstime} alt="" className="absolute inset-0 w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default AboutBox;
