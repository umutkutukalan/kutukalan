import { sahnesen } from "../utils";

const HomeBorder = () => {
  return (
    <div className="w-full h-full rounded-2xl shadow-2xl overflow-hidden relative">
      {/* <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/50" /> */}
      <img
        src={sahnesen}
        alt=""
        className="w-full h-full object-cover object-top"
      />
    </div>
  );
};

export default HomeBorder;
