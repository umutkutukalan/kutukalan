import { FaHome } from "react-icons/fa";
import { BsMusicNote, BsMusicNoteList } from "react-icons/bs";
import { BsDisplayFill } from "react-icons/bs";
import { BsBraces } from "react-icons/bs";
import { BsFileEarmarkTextFill } from "react-icons/bs";
import { BsEnvelopeFill } from "react-icons/bs";

// import { SiElectron } from 'react-icons/si';
import { BiLogoReact, BiSolidUser } from "react-icons/bi";
import { BiLogoSpringBoot } from "react-icons/bi";
import { DiJava } from "react-icons/di";
import { BiLogoJavascript } from 'react-icons/bi';
import { BiLogoTypescript } from 'react-icons/bi';
import { DiPostgresql } from "react-icons/di";
import { DiMysql } from "react-icons/di";
import { RiNextjsFill } from 'react-icons/ri';

export const navbarList = [
  { id: 1, title: "Home", link: "/", icon: FaHome },
  { id: 2, title: "Musics", link: "/musics", icon: BsMusicNote },
  { id: 3, title: "Projects", link: "/projects", icon: BsDisplayFill },
  { id: 4, title: "Skills", link: "/skills", icon: BsBraces },
  { id: 5, title: "Blogs", link: "/blogs", icon: BsFileEarmarkTextFill },
  { id: 6, title: "Admin", link: "/admin", icon: BiSolidUser },
  { id: 7, title: "Create Music", link: "/create-music", icon: BsMusicNoteList },
];

export const contactList = [
  { id: 1, title: "Contact", link: "/contact", icon: BsEnvelopeFill },
];

export const technologies = [
  { id: 1, icon: DiJava },
  { id: 2, icon: BiLogoSpringBoot },
  { id: 3, icon: BiLogoJavascript },
  { id: 4, icon: BiLogoTypescript },
  { id: 5, icon: BiLogoReact },
  // { id: 6, icon: SiElectron },
  { id: 7, icon: RiNextjsFill },
  { id: 8, icon: DiMysql },
  { id: 9, icon: DiPostgresql },
];
