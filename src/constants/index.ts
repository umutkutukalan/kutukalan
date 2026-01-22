// import { SiElectron } from 'react-icons/si';
import { BiLogoReact } from "react-icons/bi";
import { BiLogoSpringBoot } from "react-icons/bi";
import { DiJava } from "react-icons/di";
import { BiLogoJavascript } from "react-icons/bi";
import { BiLogoTypescript } from "react-icons/bi";
import { DiPostgresql } from "react-icons/di";
import { DiMysql } from "react-icons/di";
import { RiNextjsFill } from "react-icons/ri";
import { MdComputer, MdOutlineAppShortcut, MdOutlineLibraryMusic } from "react-icons/md";
import { SiElectron } from "react-icons/si";
import {
  TbBrandReactNative,
  TbBrandThreejs,
  TbMusicPlus,
} from "react-icons/tb";
import { LuFiles } from "react-icons/lu";
import { IoIdCardOutline } from "react-icons/io5";
import { RxText } from "react-icons/rx";
import { GoHome } from "react-icons/go";
// import { PiCertificate } from "react-icons/pi";
// import { AiOutlineShopping } from "react-icons/ai";
import { LuUserCog } from "react-icons/lu";
import { FiUser } from "react-icons/fi";
import type { IconType } from "react-icons";

export const navbarList = [
  { id: 1, title: "Anasayfa", link: "/", icon: GoHome },
  { id: 2, title: "Müzikler", link: "/musics", icon: MdOutlineLibraryMusic },
  {
    id: 3,
    title: "Projeler",
    link: "/projects",
    icon: MdComputer,
  },
  // { id: 4, title: "Skills", link: "/skills", icon: BsBraces },
  {
    id: 4,
    title: "Bloglar",
    link: "/blogs",
    icon: LuFiles,
  },
  // {
  //   id: 5,
  //   title: "Sertifikalar",
  //   link: "/certificates",
  //   icon: PiCertificate,
  // },
  // {
  //   id: 6,
  //   title: "Hizmet Fiyatlandırması",
  //   link: "/service-pricing",
  //   icon: AiOutlineShopping,
  // },
];

export const adminNavbarList = [
  {
    id: 7,
    title: "Ayarlar",
    link: "/settings",
    icon: LuUserCog,
  },
  {
    id: 8,
    title: "Homecard Oluştur",
    link: "/create-homecard",
    icon: IoIdCardOutline,
  },
  {
    id: 9,
    title: "Mobil App Oluştur",
    link: "/create-mobile-app",
    icon: MdOutlineAppShortcut,
  },
  {
    id: 10,
    title: "Müzik Oluştur",
    link: "/create-music",
    icon: TbMusicPlus,
  },
  {
    id: 11,
    title: "İçerik Oluştur",
    link: "/create-content",
    icon: RxText,
  },
];

export const contactList = [
  { id: 1, title: "Hakkında", link: "/about", icon: FiUser },
  // { id: 2, title: "İletişim", link: "/contact", icon: IoMailOutline },
];

export interface TechnologyForHome {
  id: number;
  icon: IconType | null;
  title: string;
}

export interface TechnologyForCreateContent {
  id: number;
  icon: IconType | null;
  title: string;
}

export const technologiesForHome: TechnologyForHome[] = [
  { id: 1, icon: DiJava, title: "Java" },
  { id: 2, icon: BiLogoSpringBoot, title: "Spring Boot" },
  { id: 3, icon: BiLogoJavascript, title: "JavaScript" },
  { id: 4, icon: BiLogoTypescript, title: "TypeScript" },
  { id: 5, icon: BiLogoReact, title: "ReactJS" },
  { id: 7, icon: SiElectron, title: "ElectronJS" },
  { id: 8, icon: RiNextjsFill, title: "NextJS" },
  { id: 9, icon: DiMysql, title: "MySQL" },
  { id: 10, icon: DiPostgresql, title: "PostgreSQL" },
];

export const technologiesForCreateContent: TechnologyForCreateContent[] = [
  { id: 1, icon: DiJava, title: "Java" },
  { id: 2, icon: BiLogoSpringBoot, title: "Spring Boot" },
  { id: 3, icon: BiLogoJavascript, title: "JavaScript" },
  { id: 4, icon: BiLogoTypescript, title: "TypeScript" },
  { id: 5, icon: BiLogoReact, title: "ReactJS" },
  { id: 7, icon: SiElectron, title: "ElectronJS" },
  { id: 8, icon: RiNextjsFill, title: "NextJS" },
  { id: 9, icon: TbBrandReactNative, title: "React Native" },
  { id: 10, icon: DiMysql, title: "MySQL" },
  { id: 11, icon: DiPostgresql, title: "PostgreSQL" },
  { id: 12, icon: null, title: "PostGIS" },
  { id: 13, icon: TbBrandThreejs, title: "ThreeJS" },
  { id: 14, icon: null, title: "GSAP" },
];

export const tagsForCreateContent = [
  { id: 1, title: "Technology" },
  { id: 2, title: "Music" },
  { id: 3, title: "Travel" },
  { id: 4, title: "Food" },
  { id: 5, title: "Lifestyle" },
  { id: 6, title: "Education" },
  { id: 7, title: "Health" },
  { id: 8, title: "Finance" },
  { id: 9, title: "Software" },
];
