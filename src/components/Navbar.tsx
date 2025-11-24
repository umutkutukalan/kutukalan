import { Link } from "react-router-dom";
import { adminNavbarList, contactList, navbarList } from "../constants";
import { useUser } from "../hooks/useUserContext";

const Navbar = () => {
  const { user } = useUser();
  console.log("Navbar user:", user);
  return (
    <nav className="w-15 hover:w-50 group transition-all h-screen text-white fixed top-0 left-0 py-5 z-50 bg-black">
      <div className="h-full border-r border-t border-b border-white/20 rounded-br-lg rounded-tr-lg flex flex-col justify-between py-2">
        <div className="flex flex-col gap-1">
          <div className="flex flex-col gap-1">
            {navbarList.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.id}
                  className="w-full h-10 flex gap-4 cursor-pointer overflow-hidden hover:bg-white/10 flex items-center px-5"
                  title={item.title}
                  to={item.link}
                >
                  <Icon className="text-lg w-5 flex-shrink-0" />
                  <span className="text-xs transition-all duration-300 whitespace-nowrap opacity-0 group-hover:opacity-100">
                    {item.title}
                  </span>
                </Link>
              );
            })}
          </div>
          {user?.role === "ADMIN" && (
            <div className="flex flex-col gap-1 border-t border-white/20 pt-1">
              {adminNavbarList.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.id}
                    className="w-full h-10 flex gap-4 cursor-pointer overflow-hidden hover:bg-white/10 flex items-center px-5"
                    title={item.title}
                    to={item.link}
                  >
                    <Icon className="text-lg w-5 flex-shrink-0" />
                    <span className="text-xs transition-all duration-300 whitespace-nowrap opacity-0 group-hover:opacity-100">
                      {item.title}
                    </span>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
        <div className="flex flex-col gap-1">
          {contactList.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.id}
                className="w-full h-10 flex gap-4 cursor-pointer overflow-hidden hover:bg-white/10 flex items-center px-5"
                title={item.title}
                to={item.link}
              >
                <Icon className="text-lg w-5 flex-shrink-0" />
                <span className="text-xs transition-all duration-300 whitespace-nowrap opacity-0 group-hover:opacity-100">
                  {item.title}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
