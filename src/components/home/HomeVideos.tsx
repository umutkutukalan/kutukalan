import { discovery, iphonechip, sahnesen } from "../../utils";

const HomeVideos = () => {
  return (
    <div className="w-full h-1/5 overflow-hidden rounded-lg">
      <ul className="w-full h-full grid grid-cols-3 gap-2">
        <li className="w-full h-full rounded-lg overflow-hidden border border-white/10 relative group cursor-pointer">
          <div className="absolute inset-0 group-hover:bg-black/60 transition-all" />
          <div className="absolute top-0 left-0 p-4 hidden group-hover:flex transition-all">
            <h1 className="text-2xl">Sahnesen</h1>
          </div>
          <img src={sahnesen} alt="" className="w-full h-full object-cover" />
        </li>
        <li className="w-full h-full rounded-lg overflow-hidden border border-white/10 relative group cursor-pointer">
          <div className="absolute inset-0 group-hover:bg-black/60 transition-all" />
          <div className="absolute top-0 left-0 p-4 hidden group-hover:flex transition-all">
            <h1 className="text-2xl">iPhone 15 Clone Website</h1>
          </div>
          <img src={iphonechip} alt="" className="w-full h-full object-cover" />
        </li>
        <li className="w-full h-full rounded-lg overflow-hidden border border-white/10 relative group cursor-pointer">
          <div className="absolute inset-0 group-hover:bg-black/60 transition-all" />
          <div className="absolute top-0 left-0 p-4 hidden group-hover:flex transition-all">
            <h1 className="text-2xl">Discovery</h1>
          </div>
          <img src={discovery} alt="" className="w-full h-full object-cover" />
        </li>
      </ul>
    </div>
  );
};

export default HomeVideos;
