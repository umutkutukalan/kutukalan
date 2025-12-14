import type { IconType } from "react-icons";
import { technologiesForHome } from "../../constants";
import { abstract1, abstract2, mor } from "../../utils";

export interface Tech {
  id: number;
  icon: IconType | null;
  title: string;
}

const HomeTables = () => {
  return (
    <div className="w-full h-60 md:h-80 overflow-hidden relative">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black/70"></div>
        <img src={mor} alt="" className="object-cover w-full h-full" />
      </div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="w-full h-7/8 py-3 px-5 flex flex-col gap-2">
          <div className="absolute left-20 top-1/2 -translate-y-1/2">
            <img
              src={abstract1}
              alt=""
              className="w-80 h-80 object-cover brightness-30"
            />
          </div>
          <div className="absolute right-25 top-10 sm:flex hidden">
            <img
              src={abstract2}
              alt=""
              className="w-80 h-80 object-cover brightness-30 -rotate-50"
            />
          </div>
          <div className="h-full w-full flex flex-col items-center justify-center gap-2 text-center z-10">
            <h1 className="text-sm sm:text-base oswald-300">
              Umut Kutukalan | Software Engineer
            </h1>
            <h2 className="text-4xl md:text-6xl xl:text-5xl w-80 md:w-120 xl:w-100 oswald-400">
              BLENDING ART, CODE AND PURPOSE
            </h2>
          </div>
        </div>
        <div className="w-full h-1/8 z-20 relative">
          <div className="h-full w-full flex items-center justify-between">
            {technologiesForHome.map((tech: Tech, index: number) => {
              const Icon = tech.icon;
              return (
                <div
                  key={tech.id}
                  className={`w-full h-full flex items-center justify-center ${
                    index === technologiesForHome.length - 1
                      ? ""
                      : "border-r border-white/10"
                  }`}
                >
                  {Icon && <Icon className={`text-xl md:text-3xl`} />}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeTables;
