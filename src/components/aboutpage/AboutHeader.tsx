import type { AboutProps } from "../../pages/About";

const AboutHeader = ({ userResponse }: AboutProps) => {
  return (
    <div className="w-full rounded-tl-2xl rounded-tr-2xl overflow-hidden">
      <div className="w-full flex items-start justify-between relative relative">
        {/* h-60 sm:h-80 lg:h-130 xl:h-120 */}
        {/* <div className="absolute inset-x-0 bottom-0 h-40 sm:h-56 md:h-120 bg-gradient-to-t from-black to-transparent z-10 pointer-events-none"></div> */}

        <div className="h-full w-full flex flex-col gap-5 z-10 px-5 pt-5">
          <div className="w-full flex flex-col md:flex-row items-center md:items-center md:justify-between border-b border-white/10 pb-5 gap-10">
            <div className="w-52 h-52 rounded-full border border-white/70 overflow-hidden flex-shrink-0 flex items-center justify-center">
              <img
                src={userResponse?.profileImg}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-2xl">kutukalan.</span>
              <h1 className="text-3xl sm:text-3xl md:text-3xl lg:text-5xl font-bold text-white z-20">
                {userResponse?.aboutMe}
              </h1>
              <p className="text-gray-400 text-xs lg:text-sm">
                {userResponse?.aboutMeItems?.[0]}
              </p>
            </div>
          </div>
          <ul className="flex flex-col gap-5 text-gray-300">
            {userResponse?.aboutMeItems?.map((item, index) => (
              <>
                {index < 1 && (
                  <li key={index}>
                    <p className="text-xs sm:text-sm">{item}</p>
                  </li>
                )}
              </>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutHeader;
