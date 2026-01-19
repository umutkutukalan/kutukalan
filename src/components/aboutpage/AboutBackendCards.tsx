import { dockerpostman, sunucu } from "../../utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { useRef } from "react";

const AboutBackendCards = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const items = containerRef.current?.querySelectorAll(":scope > div");
    if (!items || items.length === 0) return;
    gsap.from(items, {
      opacity: 0,
      y: 100,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 100%",
        scrub: true,
      },
    });
  }, []);

  return (
    <section className="h-full px-5 sm:px-10 px-5 sm:px-10 py-10">
      <div
        className="h-full grid grid-cols-1 md:grid-cols-2 gap-5 cardsContainer"
        ref={containerRef}
      >
        <div className="w-full h-100 sm:h-120 rounded-2xl bg-[#0e0e10] flex flex-col p-5">
          <div className="h-4/5 w-full flex items-center justify-center overflow-hidden relative">
            <img src={dockerpostman} alt="" className="w-100" />
            <div className="absolute bottom-0 left-0 right-0 h-50 bg-gradient-to-t from-[#0e0e10] to-transparent"></div>
          </div>
          <div className="h-1/5 w-full flex items-end">
            <div className="flex flex-col gap-1">
              <h4 className="text-xl">Postman & Docker</h4>
              <p className="text-[10px] lg:text-xs text-gray-400">
                API testlerini Postman ile yapıyor, projeleri Docker kullanarak
                izole ve taşınabilir ortamlarda çalıştırıyorum.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full h-100 sm:h-120 rounded-2xl bg-[#0e0e10] flex flex-col p-5">
          <div className="h-4/5 w-full flex items-center justify-center relative">
            <img src={sunucu} alt="" className="w-full" />
            <div className="absolute bottom-0 left-0 right-0 h-50 bg-gradient-to-t from-[#0e0e10] to-transparent"></div>
          </div>
          <div className="h-1/5 w-full flex items-end">
            <div className="flex flex-col gap-1">
              <h4 className="text-xl">Sunucu & Deploy</h4>
              <p className="text-[10px] lg:text-xs text-gray-400">
                Projelerimi VPS üzerinde canlıya alıyor, React uygulamalarını
                Nginx ile, backend servislerini Spring Boot ile çalıştırıyorum.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutBackendCards;
