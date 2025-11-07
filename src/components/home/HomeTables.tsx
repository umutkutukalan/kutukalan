import { technologies } from "../../constants";
import { abstract1, abstract2, mor } from "../../utils";

const HomeTables = () => {
  return (
    <div className="w-full h-2/5 overflow-hidden relative">
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
          <div className="absolute right-25 top-10 ">
            <img
              src={abstract2}
              alt=""
              className="w-80 h-80 object-cover brightness-30 -rotate-50"
            />
          </div>
          <div className="h-full w-full flex flex-col items-center justify-center gap-2 text-center z-10">
            <h1 className="text-md oswald-300">
              Umut Kutukalan | Software Engineer
            </h1>
            <h2 className="text-5xl w-100 oswald-400">
              BLENDING ART, CODE AND PURPOSE
            </h2>
          </div>
        </div>
        <div className="w-full h-1/8 z-20 relative">
          <div className="h-full w-full flex items-center justify-between">
            {technologies.map((tech, index) => {
              const Icon = tech.icon;
              return (
                <div
                  key={tech.id}
                  className={`w-full h-full flex items-center justify-center ${
                    index === technologies.length - 1
                      ? ""
                      : "border-r border-white/10"
                  }`}
                >
                  <Icon className={`text-3xl`} size={28} />
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

{
  /* <div className="w-full h-full rounded-2xl overflow-hidden relative">
        <div className="absolute inset-0 bg-black/70"></div>
        <img src={homeImg} alt="" className="w-full h-full object-cover" />
      </div> */
}

{
  /* <div className="absolute top-5 left-5">
        <h1 className="text-7xl oswald-400">kutukalan.</h1>
      </div> */
}
