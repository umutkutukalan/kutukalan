import type { IconType } from "react-icons";
import { technologiesForHome } from "../../constants";
import { manrunning3 } from "../../utils";

export interface Tech {
  id: number;
  icon: IconType | null;
  title: string;
}

const HomeTables = () => {
  return (
    <div
      className="w-full h-[clamp(200px,32vw,300px)] 2xl:h-[clamp(400px,32vw,600px)] 3xl:h-[clamp(400px,32vw,500px)] 4xl:h-[clamp(500px,32vw,600px)]
 overflow-hidden relative"
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black/70"></div>
        <img
          src={manrunning3}
          alt=""
          className="object-cover w-full h-full object-[center_35%]"
        />
      </div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="w-full h-7/8 py-3 sm:px-5 px-3 flex flex-col gap-2 relative">
          <div className="h-full w-full flex flex-col gap-2 text-left z-10">
            <div className="flex flex-col gap-2 2xl:gap-4">
              <h1 className="text-xs sm:text-base 2xl:text-[clamp(1rem,2vw,2rem)] oswald-300">
                Umut Kütükalan | Yazılım Mühendisi
              </h1>

              <h2
                className="
                  sm:h-21
                  md:h-25
                  lg:h-34
                  xl:h-30
                  2xl:h-[13rem]
                  
                  leading-8
                  sm:leading-10
                  md:leading-12
                  lg:leading-16
                  xl:leading-14
                  2xl:leading-[clamp(5.5rem,6vw,6rem)]

                  text-2xl
                  sm:text-4xl
                  md:text-[2.5rem]
                  lg:text-[3.5rem]
                  xl:text-[3rem]
                  2xl:text-[clamp(3rem,6vw,5rem)]

                  max-w-[14rem]
                  sm:max-w-[20rem]
                  md:max-w-[25rem]
                  lg:max-w-[30rem]
                  xl:max-w-[25rem]
                  2xl:max-w-[48rem]
                  oswald-400
                  bg-gradient-to-r from-white via-gray-350 to-gray-500 text-transparent bg-clip-text
                "
              >
                ÖZEN, SÜREKLİLİK VE AMAÇ ÜZERİNE...
              </h2>
            </div>
            <p
              className="text-[10px] sm:text-xs 2xl:text-2xl max-w-[15rem] sm:max-w-sm 2xl:max-w-xl
            bg-gradient-to-r from-white via-gray-250 to-gray-400 text-transparent bg-clip-text
            "
            >
              Zamanla değer kazanan, özen ve süreklilikle şekillenen işler,
              yalnızca çalışmakla kalmayıp anlam taşıyor.
            </p>
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
