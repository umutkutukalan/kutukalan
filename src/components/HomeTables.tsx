import { technologies } from "../constants";
import { homeImg } from "../utils";

const HomeTables = () => {
  return (
    <div className="w-full flex-1 overflow-hidden rounded-2xl relative">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black/40"></div>
        <img src={homeImg} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="w-full h-7/8 py-2 px-4">
          <h1 className="text-3xl oswald-400">kutukalan</h1>
        </div>
        <div className="w-full h-1/8">
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
