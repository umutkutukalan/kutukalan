import type { AboutProps } from "../../pages/About";

const AboutHeader = ({ userResponse }: AboutProps) => {
  return (
    <div className="w-full rounded-tl-2xl rounded-tr-2xl overflow-hidden">
      <div className="w-full flex items-start justify-between relative relative">
        {/* h-60 sm:h-80 lg:h-130 xl:h-120 */}
        {/* <div className="absolute inset-x-0 bottom-0 h-40 sm:h-56 md:h-120 bg-gradient-to-t from-black to-transparent z-10 pointer-events-none"></div> */}

        <div className="h-full w-full flex flex-col gap-5 z-10 px-5 pt-5">
          <div className="flex flex-col gap-2">
            <span className="text-2xl">kutukalan.</span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white z-20">
              {userResponse?.aboutMe}
            </h1>
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
