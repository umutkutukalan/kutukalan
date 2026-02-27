import AboutItem from "./homeborder/AboutItem";
import DesktopApp from "./homeborder/DesktopApp";
import MobilApp from "./homeborder/MobilApp";
import WebSites from "./homeborder/WebSites";

const HomeBorder = () => {
  return (
    <>
      <div className="w-full relative hidden md:flex flex-col gap-1 oswald-300">
        <div className="w-full h-full overflow-hidden shadow-2xl relative gap-2 grid grid-cols-2 auto-rows-fr grid-cols-[1fr_3fr]">
          <div className="relative w-full h-[clamp(350px,24vw,400px)] 3xl:h-[clamp(600px,24vw,700px)] 4xl:h-[clamp(600px,24vw,700px)] overflow-hidden grid grid-cols-1 gap-2 items-center">
            <AboutItem />
          </div>
          <div className="sm:h-full h-[clamp(280px,32vw,300px)] w-full overflow-hidden md:rounded-xl oswald-400 relative md:flex hidden">
            <WebSites />
          </div>
        </div>

        <div className="w-full h-full overflow-hidden shadow-2xl relative gap-2 grid grid-cols-2 auto-rows-fr grid-cols-[3fr_1fr]">
          <div className="sm:h-full h-[clamp(280px,32vw,300px)] w-full overflow-hidden md:rounded-xl oswald-400 relative md:flex hidden">
            <DesktopApp />
          </div>
          <div className="relative w-full h-[clamp(350px,24vw,400px)] 3xl:h-[clamp(600px,24vw,700px)] 4xl:h-[clamp(600px,24vw,700px)] overflow-hidden grid grid-cols-1 gap-2 items-center">
            <MobilApp />
          </div>
        </div>
      </div>

      <div className="w-full relative md:hidden flex flex-col gap-1 oswald-300">
        <div className="w-full h-full overflow-hidden shadow-2xl relative gap-2 grid grid-cols-2 auto-rows-fr">
          <div className="relative w-full h-[clamp(350px,24vw,400px)] 3xl:h-[clamp(600px,24vw,700px)] 4xl:h-[clamp(600px,24vw,700px)] overflow-hidden grid grid-cols-1 gap-2 items-center">
            <AboutItem />
          </div>
          <div className="relative w-full h-[clamp(350px,24vw,400px)] 3xl:h-[clamp(600px,24vw,700px)] 4xl:h-[clamp(600px,24vw,700px)] overflow-hidden grid grid-cols-1 gap-2 items-center">
            <MobilApp />
          </div>
        </div>

        <div className="w-full h-full overflow-hidden shadow-2xl relative gap-2 grid grid-cols-1">
          <div className="sm:h-full h-[clamp(240px,32vw,260px)] w-full overflow-hidden rounded-xl oswald-400 relative">
            <WebSites />
          </div>
          <div className="sm:h-full h-[clamp(240px,32vw,260px)] w-full overflow-hidden rounded-xl oswald-400 relative">
            <DesktopApp />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeBorder;
