import { notlybanner3 } from "../../../utils";

const DesktopApp = () => {
  return (
    <div className="w-full h-full overflow-hidden border border-white/10 text-black relative group">
      <div className="absolute inset-0 left-0 top-0 bg-gradient-to-br from-black via-black/40 to-transparent z-50"></div>
      <div className="absolute inset-0 w-full h-full flex items-center justify-center z-0">
        <img
          src={notlybanner3}
          alt=""
          className="w-full h-full object-cover brightness-75"
        />
      </div>
    </div>
  );
};

export default DesktopApp;
