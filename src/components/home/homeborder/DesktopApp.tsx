import { gray, notlybanner2 } from "../../../utils";

const DesktopApp = () => {
  return (
    <div className="w-full h-full overflow-hidden border border-white/10 text-black relative group">
      <div className="absolute inset-0 left-0 top-0">
        <img src={gray} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="absolute inset-0 w-full flex items-center justify-center z-0">
        <img
          src={notlybanner2}
          alt=""
          className="sm:w-120 w-80 object-cover brightness-75"
        />
      </div>
    </div>
  );
};

export default DesktopApp;
