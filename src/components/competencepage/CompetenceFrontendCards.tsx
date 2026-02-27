import { iphonechip, runaley2 } from "../../utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useRef } from "react";
gsap.registerPlugin(ScrollTrigger);

const CompetenceFrontendCards = () => {
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
    <section className="px-5 sm:px-10 py-10">
      <div
        className="h-full grid grid-cols-1 md:grid-cols-2 gap-5 cardsContainer"
        ref={containerRef}
      >
        <div className="w-full h-[clamp(30rem,30vw,40rem)] 3xl:h-[clamp(35rem,30vw,45rem)] 4xl:h-[clamp(40rem,35vw,50rem)] rounded-2xl bg-[#0e0e10] flex flex-col p-5">
          <div className="h-[clamp(24rem,30vw,32rem)] 3xl:h-[clamp(29rem,30vw,37rem)] 4xl:h-[clamp(34rem,35vw,42rem)] w-full flex items-center justify-center overflow-hidden relative">
            <div className="absolute inset-0 h-20 bg-gradient-to-b from-[#0e0e10] to-transparent"></div>
            <div className="absolute h-full right-0 w-30 bg-gradient-to-l from-[#0e0e10] to-transparent"></div>
            <img
              src={iphonechip}
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="absolute h-full right-0 left-0 w-30 bg-gradient-to-r from-[#0e0e10] to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 h-50 bg-gradient-to-t from-[#0e0e10] to-transparent"></div>
          </div>
          <div className="h-1/5 w-full flex items-end">
            <div className="flex flex-col gap-1">
              <h4 className="text-[clamp(1rem,2vw,1.25rem)] 3xl:text-[clamp(1.75rem,2vw,2rem)] 4xl:text-[clamp(2rem,2vw,2.5rem)]">
                Web Geliştirme
              </h4>
              <p className="text-[clamp(0.7rem,1.5vw,0.75rem)] 3xl:text-[clamp(0.75rem,1.5vw,1rem)] 4xl:text-[clamp(1rem,1.5vw,1.25rem)] text-gray-400">
                React, Next.js teknolojileri ile modern, responsive ve kullanıcı odaklı web siteleri
                geliştiriyorum. Temiz tasarımı ve akıcı deneyimi önceliklendiriyorum.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full h-[clamp(30rem,30vw,40rem)] 3xl:h-[clamp(35rem,30vw,45rem)] 4xl:h-[clamp(40rem,35vw,50rem)] rounded-2xl bg-[#0e0e10] flex flex-col p-5">
          <div className="h-[clamp(24rem,30vw,32rem)] 3xl:h-[clamp(29rem,30vw,37rem)] 4xl:h-[clamp(34rem,35vw,42rem)] w-full flex items-start justify-center overflow-hidden relative pt-2">
            <img
              src={runaley2}
              alt=""
              className="w-80 3xl:w-[clamp(20rem,20vw,30rem)] 4xl:w-[clamp(25rem,25vw,35rem)]"
            />
            <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#0e0e10] to-transparent"></div>
          </div>
          <div className="h-1/5 w-full flex items-end">
            <div className="flex flex-col gap-1">
              <h4 className="text-[clamp(1rem,2vw,1.25rem)] 3xl:text-[clamp(1.75rem,2vw,2rem)] 4xl:text-[clamp(2rem,2vw,2.5rem)]">
                Mobil Uygulama Geliştirme
              </h4>
              <p className="text-[clamp(0.7rem,1.5vw,0.75rem)] 3xl:text-[clamp(0.75rem,1.5vw,1rem)] 4xl:text-[clamp(1rem,1.5vw,1.25rem)] text-gray-400">
                React Native ve Expo çerçevesi ile mobil uygulamalar geliştiriyorum.
                Component mimarisi, ekran düzeni ve performans odaklı
                ilerliyorum.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompetenceFrontendCards;
