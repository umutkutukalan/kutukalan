import { Link } from "react-router-dom";
import { adminNavbarList, contactList, navbarList } from "../constants";
import { useUser } from "../hooks/useUserContext";
import { useEffect, useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { useAudioPlayer } from "../context/AudioPlayerContext";
import { logo2, navbarlogo } from "../utils";

const Navbar = () => {
  const { user } = useUser();
  const { currentTrack } = useAudioPlayer();
  const [show, setShow] = useState(false);

  /* 🔒 Mobile menu açıkken body scroll kilidi */
  useEffect(() => {
    if (typeof document === "undefined") return;

    const body = document.body;
    if (!body) return;

    body.style.overflow = show ? "hidden" : "";

    return () => {
      body.style.overflow = "";
    };
  }, [show]);

  return (
    <header>
      {/* ===== DESKTOP / TABLET SIDEBAR ===== */}
      <nav
        className={`
          w-15 hover:w-50 group transition-all
          fixed top-0 left-0 z-50
          text-white py-5
          ${currentTrack ? "h-full" : "h-full"}
          2xl:hidden lg:block hidden
        `}
      >
        <div className="h-full bg-black border-r border-white/20 rounded-br-lg rounded-tr-lg flex flex-col justify-between pb-2 pt-5">
          {/* ÜST */}
          <div className="flex flex-col gap-1 overflow-hidden">
            <div className="pb-4">
              <div className="w-45 flex group-hover:hidden items-center px-5">
                <img src={navbarlogo} alt="Logo" />
              </div>
              <div className="w-45 hidden group-hover:flex items-center px-5">
                <img src={logo2} alt="FullLogo" />
              </div>
            </div>

            {navbarList.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.id}
                  to={item.link}
                  className="w-full h-10 flex items-center gap-4 px-5 hover:bg-white/10"
                >
                  <Icon className="text-lg w-5 shrink-0" />
                  <span className="text-xs opacity-0 group-hover:opacity-100 whitespace-nowrap transition">
                    {item.title}
                  </span>
                </Link>
              );
            })}

            {user?.role === "ADMIN" && (
              <div className="border-t border-white/20 pt-1">
                {adminNavbarList.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.id}
                      to={item.link}
                      className="w-full h-10 flex items-center gap-4 px-5 hover:bg-white/10"
                    >
                      <Icon className="text-lg w-5 shrink-0" />
                      <span className="text-xs opacity-0 group-hover:opacity-100 whitespace-nowrap transition">
                        {item.title}
                      </span>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>

          {/* ALT */}
          <div className="flex flex-col gap-1">
            {contactList.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.id}
                  to={item.link}
                  className="w-full h-10 flex items-center gap-4 px-5 hover:bg-white/10"
                >
                  <Icon className="text-lg w-5 shrink-0" />
                  <span className="text-xs opacity-0 group-hover:opacity-100 whitespace-nowrap transition">
                    {item.title}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </nav>

      {/* ===== MOBILE TOP BAR ===== */}
      <nav className="fixed top-0 left-0 w-full h-12 z-50 flex items-center px-4 bg-black lg:hidden">
        <CiMenuFries
          className="text-2xl cursor-pointer"
          onClick={() => setShow(true)}
        />
      </nav>

      {/* OVERLAY */}
      {show && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setShow(false)}
        />
      )}

      {/* ===== MOBILE SLIDE MENU ===== */}
      <aside
        className={`
          fixed top-0 left-0 z-50 bg-black border-r border-white/20
          w-48 2xl:w-96
          transition-transform duration-500 ease-out
          ${show ? "translate-x-0" : "-translate-x-full"}
          ${currentTrack ? "min-h-[calc(100dvh-3rem)]" : "min-h-dvh"}
          overflow-y-auto
        `}
      >
        <div className="flex flex-col min-h-dvh px-5 pt-4 pb-5">
          <CiMenuFries
            className="text-2xl mb-4 cursor-pointer"
            onClick={() => setShow(false)}
          />

          <div className="flex flex-col justify-between flex-1">
            <div className="flex flex-col gap-1">
              <div className="border-b border-white/20 pb-2 mb-2">
                <img src={logo2} alt="FullLogo" className="w-30" />
              </div>

              {navbarList.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.id}
                    to={item.link}
                    onClick={() => setShow(false)}
                    className="h-10 flex items-center gap-4 hover:bg-white/10"
                  >
                    <Icon className="text-lg w-5 shrink-0" />
                    <span className="text-xs">{item.title}</span>
                  </Link>
                );
              })}

              {user?.role === "ADMIN" && (
                <div className="border-t border-white/20 pt-1">
                  {adminNavbarList.map((item) => {
                    const Icon = item.icon;
                    return (
                      <Link
                        key={item.id}
                        to={item.link}
                        onClick={() => setShow(false)}
                        className="h-10 flex items-center gap-4 hover:bg-white/10"
                      >
                        <Icon className="text-lg w-5 shrink-0" />
                        <span className="text-xs">{item.title}</span>
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
                    to={item.link}
                    onClick={() => setShow(false)}
                    className="h-10 flex items-center gap-4 hover:bg-white/10"
                  >
                    <Icon className="text-lg w-5 shrink-0" />
                    <span className="text-xs">{item.title}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </aside>
    </header>
  );
};

export default Navbar;
