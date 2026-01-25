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
        <div className="w-full h-[clamp(30rem,30vw,40rem)] 3xl:h-[clamp(35rem,30vw,45rem)] 4xl:h-[clamp(40rem,35vw,50rem)] rounded-2xl bg-[#0e0e10] flex flex-col p-5">
          <div className="h-[clamp(24rem,30vw,32rem)] 3xl:h-[clamp(29rem,30vw,37rem)] 4xl:h-[clamp(34rem,35vw,42rem)] w-full flex items-center justify-center overflow-hidden relative">
            <img
              src={dockerpostman}
              alt=""
              className="w-[clamp(20rem,20vw,30rem)] 3xl:w-[clamp(25rem,25vw,35rem)] 4xl:w-[clamp(30rem,30vw,40rem)] h-[clamp(20rem,20vw,30rem)] 3xl:h-[clamp(25rem,25vw,35rem)] 4xl:h-[clamp(30rem,30vw,40rem)] object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 h-[clamp(10rem,10vw,15rem)] 3xl:h-[clamp(15rem,15vw,20rem)] 4xl:h-[clamp(20rem,20vw,25rem)] bg-gradient-to-t from-[#0e0e10] to-transparent"></div>
          </div>
          <div className="h-1/5 w-full flex items-end">
            <div className="flex flex-col gap-1">
              <h4 className="text-[clamp(1rem,2vw,1.25rem)] 3xl:text-[clamp(1.75rem,2vw,2rem)] 4xl:text-[clamp(2rem,2vw,2.5rem)]">
                Postman & Docker
              </h4>
              <p className="text-[clamp(0.7rem,1.5vw,0.75rem)] 3xl:text-[clamp(0.75rem,1.5vw,1rem)] 4xl:text-[clamp(1rem,1.5vw,1.25rem)] text-gray-400">
                API testlerini Postman ile yapıyor, projeleri Docker kullanarak
                izole ve taşınabilir ortamlarda çalıştırıyorum.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full h-[clamp(30rem,30vw,40rem)] 3xl:h-[clamp(35rem,30vw,45rem)] 4xl:h-[clamp(40rem,35vw,50rem)] rounded-2xl bg-[#0e0e10] flex flex-col p-5">
          <div className="h-[clamp(24rem,30vw,32rem)] 3xl:h-[clamp(29rem,30vw,37rem)] 4xl:h-[clamp(34rem,35vw,42rem)] w-full flex items-center justify-center relative">
            <img src={sunucu} alt="" className="w-full h-full object-cover" />
            <div className="absolute bottom-0 left-0 right-0 h-[clamp(10rem,10vw,15rem)] 3xl:h-[clamp(15rem,15vw,20rem)] 4xl:h-[clamp(20rem,20vw,25rem)] bg-gradient-to-t from-[#0e0e10] to-transparent"></div>
          </div>
          <div className="h-1/5 w-full flex items-end">
            <div className="flex flex-col gap-1">
              <h4 className="text-[clamp(1rem,2vw,1.25rem)] 3xl:text-[clamp(1.75rem,2vw,2rem)] 4xl:text-[clamp(2rem,2vw,2.5rem)]">
                Sunucu & Deploy
              </h4>
              <p className="text-[clamp(0.7rem,1.5vw,0.75rem)] 3xl:text-[clamp(0.75rem,1.5vw,1rem)] 4xl:text-[clamp(1rem,1.5vw,1.25rem)] text-gray-400">
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
