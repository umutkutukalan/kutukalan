import { useNavigate } from "react-router-dom";
import { contactList, navbarList } from "../constants";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="w-15 bg-white/10 m-5 text-white rounded-lg flex flex-col items-center justify-between p-2">
      <div className="flex flex-col items-center gap-1">
        {navbarList.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.id}
              className="w-10 h-10 flex items-center justify-center rounded-lg cursor-pointer hover:bg-white/10"
              title={item.title}
              onClick={() => navigate(item.link)}
            >
              <Icon className="text-lg" />
            </div>
          );
        })}
      </div>
      <div className="flex flex-col items-center gap-1">
        {contactList.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.id}
              className="w-10 h-10 flex items-center justify-center rounded-lg cursor-pointer hover:bg-white/10"
              title={item.title}
            >
              <Icon className="text-lg" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Navbar;
