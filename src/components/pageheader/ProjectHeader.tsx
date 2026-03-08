import { projectbanner } from "../../utils";

const ProjectHeader = () => {
  return (
    <div className="w-full flex items-center justify-between pb-2 relative h-[clamp(5rem,10vw,8rem)] overflow-hidden mb-5 rounded-md">
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={projectbanner}
          alt=""
          className="h-full w-full object-cover object-[center_50%] brightness-40"
        />
      </div>

      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-[clamp(1rem,1.6vw,2rem)] 3xl:text-[clamp(1.5rem,1.8vw,2rem)] 4xl:text-[3rem] font-semibold">
          PROJELER
        </h1>
      </div>
    </div>
  );
};

export default ProjectHeader;
