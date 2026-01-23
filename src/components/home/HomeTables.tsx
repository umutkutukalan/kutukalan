import type { IconType } from "react-icons";
import { technologiesForHome } from "../../constants";
import { abstract1, abstract2 } from "../../utils";

export interface Tech {
  id: number;
  icon: IconType | null;
  title: string;
}

const HomeTables = () => {
  return (
    <div
      className="w-full h-[clamp(240px,20vw,600px)]
 overflow-hidden relative"
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black/70"></div>
        {/* <img src={mor} alt="" className="object-cover w-full h-full" /> */}
      </div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="w-full h-7/8 py-3 px-5 flex flex-col gap-2">
          <div className="h-full absolute left-20 top-1/2 -translate-y-1/2">
            <img
              src={abstract1}
              alt=""
              className="h-[clamp(240px,20vw,600px)] w-[clamp(240px,20vw,600px)] object-cover brightness-30"
            />
          </div>
          <div className="absolute right-25 top-10">
            <img
              src={abstract2}
              alt=""
              className="h-[clamp(240px,20vw,600px)] w-[clamp(240px,20vw,600px)] object-cover brightness-30 -rotate-50"
            />
          </div>
          <div className="h-full w-full flex flex-col items-center justify-center gap-2 text-center z-10">
            <h1 className="text-sm sm:text-base 2xl:text-3xl oswald-300">
              Umut Kütükalan | Yazılım Mühendisi
            </h1>

            <h2
              className="
                  text-4xl
                  md:text-5xl
                  2xl:text-7xl
                  max-w-[20rem]
                  md:max-w-[40rem]
                  xl:max-w-[35rem]
                  2xl:max-w-[48rem]
                  oswald-400
                "
            >
              BLENDING ART, CODE AND PURPOSE
            </h2>
          </div>
        </div>
        <div className="w-full h-1/8 z-20 relative">
          <div className="h-full w-full flex items-center justify-between pb-1 2xl:pb-3">
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
                  {Icon && (
                    <Icon
                      className={`
                    text-xl
                    md:text-3xl
                    2xl:text-5xl
                    4xl:text-6xl
                    `}
                    />
                  )}
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
