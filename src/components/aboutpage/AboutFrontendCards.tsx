import { iphonechip, runaley2 } from "../../utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useRef } from "react";
gsap.registerPlugin(ScrollTrigger);

const AboutFrontendCards = () => {
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
        start: "top 80%",
        scrub: true,
      },
    });
  }, []);

  return (
    <section className="px-5 sm:px-10 py-10">
      <div className="h-full grid grid-cols-1 md:grid-cols-2 gap-5 cardsContainer" ref={containerRef}>
        <div className="w-full h-100 sm:h-120 rounded-2xl bg-[#0e0e10] flex flex-col p-5">
          <div className="h-4/5 w-full flex items-center justify-center overflow-hidden relative">
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
              <h4 className="text-xl">Web Tasarımı</h4>
              <p className="text-[10px] lg:text-xs text-gray-400">
                React ile modern, responsive ve kullanıcı odaklı web arayüzleri
                geliştiriyorum. Temiz tasarım ve akıcı deneyim önceliğim.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full h-100 sm:h-120 rounded-2xl bg-[#0e0e10] flex flex-col p-5">
          <div className="h-4/5 w-full flex items-start justify-center overflow-hidden relative pt-2">
            <img src={runaley2} alt="" className="w-80" />
            <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#0e0e10] to-transparent"></div>
          </div>
          <div className="h-1/5 w-full flex items-end">
            <div className="flex flex-col gap-1">
              <h4 className="text-xl">Mobil Uygulama Geliştirme</h4>
              <p className="text-[10px] lg:text-xs text-gray-400">
                React Native ve Expo ile mobil uygulamalar geliştiriyorum.
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

export default AboutFrontendCards;
