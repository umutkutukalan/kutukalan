import { useNavigate } from "react-router-dom";
import { adminNavbarList, contactList, navbarList } from "../constants";
import { useUser } from "../hooks/useUserContext";

const Navbar = () => {
  const { user } = useUser();
  console.log("Navbar user:", user);
  const navigate = useNavigate();
  return (
    <nav className="w-15 h-screen text-white fixed top-0 left-0 py-5 z-10">
      <div className="h-full border-r border-t border-b border-white/20 rounded-br-lg rounded-tr-lg flex flex-col items-center justify-between py-2 px-5">
        <div className="flex flex-col items-center gap-1">
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
          {user?.role === "ADMIN" && (
            <div className="flex flex-col items-center gap-1">
              {adminNavbarList.map((item) => {
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
          )}
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
    </nav>
  );
};

export default Navbar;
