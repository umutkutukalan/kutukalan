import AboutItem from "./homeborder/AboutItem";
import DesktopApp from "./homeborder/DesktopApp";
import MobilApp from "./homeborder/MobilApp";
import WebSites from "./homeborder/WebSites";

const HomeBorder = () => {
  return (
    <>
      {/* Desktop and Tablet View */}
      <div className="w-full relative hidden md:flex flex-col gap-3 oswald-300">
        <div className="w-full h-full overflow-hidden shadow-2xl relative gap-2 grid grid-cols-2 auto-rows-fr">
          <div className="w-full h-full flex grid grid-cols-2 gap-3">
            <div className="relative w-full h-[clamp(350px,24vw,400px)] 3xl:h-[clamp(600px,24vw,700px)] 4xl:h-[clamp(600px,24vw,700px)] overflow-hidden grid grid-cols-1 gap-2 items-center">
              <AboutItem />
            </div>
            <div className="relative w-full h-[clamp(350px,24vw,400px)] 3xl:h-[clamp(600px,24vw,700px)] 4xl:h-[clamp(600px,24vw,700px)] overflow-hidden grid grid-cols-1 gap-2 items-center">
              <MobilApp />
            </div>
          </div>
          <div className="sm:h-full h-[clamp(280px,32vw,300px)] w-full overflow-hidden md:rounded-xl oswald-400 relative md:flex hidden">
            <DesktopApp />
          </div>
        </div>

        <div className="w-full h-full overflow-hidden shadow-2xl relative gap-2 md:rounded-xl">
          <div className="h-[clamp(550px,32vw,700px)] 3xl:h-[clamp(600px,32vw,700px)] 4xl:h-[clamp(700px,32vw,800px)] w-full overflow-hidden md:rounded-xl oswald-400 relative md:flex hidden">
            <WebSites />
          </div>
        </div>
      </div>

      {/* Mobile layout */}
      <div className="w-full relative md:hidden flex flex-col gap-3 oswald-300">
        <div className="w-full h-full overflow-hidden shadow-2xl relative gap-2 grid grid-cols-2 auto-rows-fr">
          <div className="relative w-full h-[clamp(350px,24vw,400px)] 3xl:h-[clamp(600px,24vw,700px)] 4xl:h-[clamp(600px,24vw,700px)] overflow-hidden grid grid-cols-1 gap-2 items-center">
            <AboutItem />
          </div>
          <div className="relative w-full h-[clamp(350px,24vw,400px)] 3xl:h-[clamp(600px,24vw,700px)] 4xl:h-[clamp(600px,24vw,700px)] overflow-hidden grid grid-cols-1 gap-2 items-center">
            <MobilApp />
          </div>
        </div>

        <div className="w-full h-full overflow-hidden shadow-2xl relative gap-3 grid grid-cols-1">
          <div className="h-[clamp(260px,60vw,360px)] w-full rounded-lg overflow-hidden oswald-400 relative">
            <DesktopApp />
          </div>
          <div className="h-[clamp(260px,60vw,360px)] w-full rounded-lg overflow-hidden oswald-400 relative">
            <WebSites />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeBorder;
