import { Link } from "react-router-dom";
import { logo2 } from "../../utils";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdComputer, MdOutlineLibraryMusic } from "react-icons/md";
import { GoHome } from "react-icons/go";
import { LuFiles } from "react-icons/lu";
import { IoMailOutline } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="w-full h-full flex flex-col px-10 bg-gradient-to-r from-black via-white/10 to-black">
      <div className="w-full h-full pt-8 pb-4 flex justify-between">
        <div className="flex flex-col gap-1">
          <img src={logo2} alt="" className="w-40" />
          <p className="sm:text-[10px] text-[8px] sm:w-80 w-50">
            Zamanla değer kazanan, özen ve süreklilikle şekillenen işler,
            yalnızca çalışmakla kalmayıp anlam taşıyor.
          </p>
          <div className="flex items-center gap-2 mt-2">
            <ul className="flex items-center gap-2">
              <Link to="https://github.com/umutkutukalan">
                <FaGithub />
              </Link>
              <Link to="https://www.linkedin.com/in/umutkutukalan/">
                <FaLinkedin />
              </Link>
            </ul>
          </div>
        </div>
        <div className="flex gap-2">
          <div className="flex flex-col gap-2 text-xs">
            <ul className="flex flex-col gap-2">
              <Link to="/" className="flex items-center gap-1">
                <GoHome />
                Anasayfa
              </Link>
              <Link to="/projects" className="flex items-center gap-1">
                <MdComputer />
                Projeler
              </Link>
              <Link to="/blogs" className="flex items-center gap-1">
                <LuFiles />
                Bloglar
              </Link>
              <Link to="/musics" className="flex items-center gap-1">
                <MdOutlineLibraryMusic />
                Müzikler
              </Link>
            </ul>
          </div>
          <div>
            <h4></h4>
            <ul></ul>
          </div>
          <div>
            <h4></h4>
            <ul></ul>
          </div>
        </div>
      </div>
      <div className="w-full flex sm:flex-row flex-col items-center justify-between border-t border-white/10 py-4">
        <p className="sm:text-xs text-[10px]">© 2026 Kutukalan</p>
        <div className="flex items-center gap-1">
          <IoMailOutline />
          <p className="sm:text-xs text-[10px]">kutukalanumut@gmail.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
