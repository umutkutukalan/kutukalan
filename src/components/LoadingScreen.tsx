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
      <img ref={logoRef} src={logo} alt="" className="w-20" />
    </div>
  );
};

export default LoadingScreen;
