import { Link } from "react-router-dom";
import { adminNavbarList, contactList, navbarList } from "../constants";
import { useUser } from "../hooks/useUserContext";
import { useEffect, useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { useAudioPlayer } from "../context/AudioPlayerContext";
import { logo, logo2 } from "../utils";

const Navbar = () => {
  const { user } = useUser();
  const { currentTrack } = useAudioPlayer();
  const [show, setShow] = useState<boolean>(false);

  useEffect(() => {
    // console.log("Navbar user:", user);
  }, [user]);

  return (
    <header>
      <nav
        className={`w-15 hover:w-50 group transition-all ${
          currentTrack ? "h-[calc(100vh-3rem)]" : "h-screen"
        } xl:h-screen text-white fixed top-0 left-0 py-5 z-50 bg-black sm:block hidden`}
      >
        <div className="h-full border-r border-t border-b border-white/20 rounded-br-lg rounded-tr-lg flex flex-col justify-between pb-2 pt-5">
          <div className="flex flex-col gap-1">
            <div className="flex flex-col gap-1 overflow-hidden">
              <div className="pb-5">
                <div className="w-10 transition-all duration-300 flex group-hover:hidden items-center pl-5 pt-[2.5px]">
                  <img src={logo} alt="FullLogo" className="h-full" />
                </div>
                <div className="w-45 transition-all duration-300 hidden group-hover:flex items-center px-5">
                  <img src={logo2} alt="FullLogo" className="h-full" />
                </div>
              </div>

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
      {/* Mobile Navbar */}
      <nav className="w-full h-12 bg-black text-white fixed top-0 left-0 z-50 flex items-center justify-between px-4 sm:hidden">
        <div className="flex items-center justify-between w-full">
          <CiMenuFries
            className="cursor-pointer"
            onClick={() => setShow(!show)}
          />
        </div>
        {/* Overlay */}
        {show && (
          <div
            className="fixed inset-0 bg-black/50 z-40"
            onClick={() => setShow(false)}
          />
        )}
        <div
          className={`absolute top-0 w-48 ${
            currentTrack ? "h-[calc(100vh-3rem)]" : "h-screen"
          } bg-black border-r border-white/20 z-50 transition-transform duration-500 ease-out ${
            show ? "translate-x-0" : "-translate-x-full"
          } left-0`}
        >
          <div className="flex flex-col gap-5 h-full pb-5 pt-4 px-5">
            <CiMenuFries
              className="cursor-pointer"
              onClick={() => setShow(!show)}
            />
            <div className="flex flex-col justify-between h-full">
              <div className="flex flex-col gap-1">
                <div className="flex flex-col gap-1">
                  <div className="border-b border-white/20 pb-2">
                    <div className="w-30 transition-all duration-300 flex items-center">
                      <img src={logo2} alt="FullLogo" className="h-full" />
                    </div>
                  </div>
                  {navbarList.map((item) => {
                    const Icon = item.icon;
                    return (
                      <Link
                        key={item.id}
                        className="w-full h-10 flex gap-4 cursor-pointer overflow-hidden hover:bg-white/10 flex items-center"
                        title={item.title}
                        to={item.link}
                        onClick={() => setShow(false)}
                      >
                        <Icon className="text-lg w-5 flex-shrink-0" />
                        <span className="text-xs whitespace-nowrap">
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
                          className="w-full h-10 flex gap-4 cursor-pointer overflow-hidden hover:bg-white/10 flex items-center"
                          title={item.title}
                          to={item.link}
                          onClick={() => setShow(false)}
                        >
                          <Icon className="text-lg w-5 flex-shrink-0" />
                          <span className="text-xs whitespace-nowrap">
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
                      className="w-full h-10 flex gap-4 cursor-pointer overflow-hidden hover:bg-white/10 flex items-center"
                      title={item.title}
                      to={item.link}
                      onClick={() => setShow(false)}
                    >
                      <Icon className="text-lg w-5 flex-shrink-0" />
                      <span className="text-xs whitespace-nowrap">
                        {item.title}
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
