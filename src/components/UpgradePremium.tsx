import { FaArrowUp } from "react-icons/fa";
const UpgradePremium = () => {
  return (
    <div className="flex items-center justify-between p-4 bg-white/10 rounded-2xl">
      <div className="flex flex-col gap-1">
        <h3 className="font-semibold">Upgrade To Premium</h3>
        <p className="text-xs">
          Upgrade to premium plan to get premium & insights
        </p>
      </div>
      <button className="rounded-2xl px-4 py-1 text-sm flex items-center gap-1 bg-white text-orange-700">
        Upgrade
        <FaArrowUp className="text-xs" />
      </button>
    </div>
  );
};

export default UpgradePremium;
