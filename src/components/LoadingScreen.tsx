import { useRef } from "react";
import { logo } from "../utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const LoadingScreen = () => {
  const logoRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      logoRef.current,
      { opacity: 0, scale: 0.5 },
      {
        opacity: 1,
        scale: 1,
        rotate: 15,
        duration: 0.8,
        ease: "back.out",
        yoyo: true,
        repeat: -1,
      },
    );
  }, []);

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <img ref={logoRef} src={logo} alt="" className="w-[clamp(60px,10vw,80px)] 3xl:w-[clamp(120px,14vw,160px)] 4xl:w-[clamp(140px,16vw,180px)]" />
    </div>
  );
};

export default LoadingScreen;
