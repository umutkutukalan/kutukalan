import { blue, mor, redw } from "../utils";

const HomeBorder = () => {
  return (
    <div className="w-full h-full rounded-2xl shadow-2xl overflow-hidden relative">
      <img
        src={mor}
        alt=""
        className="w-full h-full object-cover object-top"
      />
    </div>
  );
};

export default HomeBorder;
