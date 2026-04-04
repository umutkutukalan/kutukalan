// import { SiElectron } from 'react-icons/si';
import { BiCodeCurly, BiLogoReact } from "react-icons/bi";
import { BiLogoSpringBoot } from "react-icons/bi";
import { DiJava } from "react-icons/di";
import { BiLogoJavascript } from "react-icons/bi";
import { BiLogoTypescript } from "react-icons/bi";
import { DiPostgresql } from "react-icons/di";
import { DiMysql } from "react-icons/di";
import { RiNextjsFill } from "react-icons/ri";
import { BiLogoRedux } from "react-icons/bi";
import {
  MdComputer,
  MdOutlineAppShortcut,
  MdOutlineLibraryMusic,
} from "react-icons/md";
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
import { BiBookBookmark } from "react-icons/bi";
import type { IconType } from "react-icons";
import {
  fgaranticard,
  fgaranticard2,
  iphonechip,
  iphoneweb,
  iphoneweb2,
  notly2,
  notly3,
  notlybanner3,
  poppin,
  poppinweb,
  pure,
  pure2,
  sabirozelservis,
  sabirozelservis3,
  sahnesen,
  sahnesen2,
  sahnesen3,
} from "../utils";
import { BsFileMusicFill, BsPersonVcardFill } from "react-icons/bs";
import { FaBookOpen } from "react-icons/fa";
import { FaPersonWalkingLuggage } from "react-icons/fa6";

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
  { id: 1, title: "Yetkinlikler", link: "/competencies", icon: BiBookBookmark },
  // { id: 2, title: "Hakkımda", link: "/about", icon: FiUser },
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
  { id: 6, icon: RiNextjsFill, title: "NextJS" },
  { id: 7, icon: SiElectron, title: "ElectronJS" },
  { id: 8, icon: DiMysql, title: "MySQL" },
  { id: 9, icon: DiPostgresql, title: "PostgreSQL" },
];

export const technologiesForCreateContent: TechnologyForCreateContent[] = [
  { id: 1, icon: DiJava, title: "Java" },
  { id: 2, icon: BiLogoSpringBoot, title: "Spring Boot" },
  { id: 3, icon: BiLogoJavascript, title: "JavaScript" },
  { id: 4, icon: BiLogoTypescript, title: "TypeScript" },
  { id: 5, icon: BiLogoReact, title: "ReactJS" },
  { id: 6, icon: SiElectron, title: "ElectronJS" },
  { id: 7, icon: RiNextjsFill, title: "NextJS" },
  { id: 8, icon: TbBrandReactNative, title: "React Native" },
  { id: 9, icon: DiMysql, title: "MySQL" },
  { id: 10, icon: DiPostgresql, title: "PostgreSQL" },
  { id: 11, icon: null, title: "PostGIS" },
  { id: 12, icon: TbBrandThreejs, title: "ThreeJS" },
  { id: 13, icon: null, title: "GSAP" },
  { id: 14, icon: BiLogoRedux, title: "Redux" },
];

export const tagsForCreateContent: TechnologyForCreateContent[] = [
  { id: 1, icon: BiCodeCurly, title: "Teknoloji" },
  { id: 2, icon: FaPersonWalkingLuggage, title: "Sosyal" },
  { id: 3, icon: BsFileMusicFill, title: "Müzik" },
  { id: 4, icon: BsPersonVcardFill, title: "Kişisel" },
  { id: 5, icon: FaBookOpen, title: "Okuma/Paylaşım" },
];

// export const tagsForCreateContent = [
//   { id: 1, title: "Technology" },
//   { id: 2, title: "Music" },
//   { id: 3, title: "Travel" },
//   { id: 4, title: "Food" },
//   { id: 5, title: "Lifestyle" },
//   { id: 6, title: "Education" },
//   { id: 7, title: "Health" },
//   { id: 8, title: "Finance" },
//   { id: 9, title: "Software" },
// ];

export const websites = [
  {
    id: 1,
    githubLink: null,
    live: null,
    content: [
      {
        id: 1,
        title: "Sahnesen",
        websiteImg: sahnesen,
      },
      {
        id: 2,
        title: "Sahnesen",
        websiteImg: sahnesen2,
      },
      {
        id: 3,
        title: "Sahnesen",
        websiteImg: sahnesen3,
      },
    ],
  },

  {
    id: 2,
    githubLink: null,
    live: "https://sabirozelservis.com/",
    content: [
      {
        id: 1,
        title: "Sabır Otomotiv",
        websiteImg: sabirozelservis,
      },
      {
        id: 2,
        title: "Sabır Otomotiv",
        websiteImg: sabirozelservis3,
      },
    ],
  },

  {
    id: 3,
    githubLink: null,
    live: "https://poppin-full.vercel.app/",
    content: [
      {
        id: 1,
        title: "Poppin",
        websiteImg: poppinweb,
      },
      {
        id: 2,
        title: "Poppin",
        websiteImg: poppin,
      },
    ],
  },

  {
    id: 4,
    githubLink: "https://github.com/umutkutukalan/pure-flashlight",
    live: null,
    content: [
      {
        id: 1,
        title: "Pure",
        websiteImg: pure,
      },
      {
        id: 2,
        title: "Pure",
        websiteImg: pure2,
      },
    ],
  },

  {
    id: 5,
    githubLink: "https://github.com/umutkutukalan/iPhone15Pro-w-react",
    live: null,
    content: [
      {
        id: 1,
        title: "iPhone15 Pro - Clone Website",
        websiteImg: iphonechip,
      },
      {
        id: 2,
        title: "iPhone15 Pro - Clone Website",
        websiteImg: iphoneweb,
      },
      {
        id: 3,
        title: "iPhone15 Pro - Clone Website",
        websiteImg: iphoneweb2,
      },
    ],
  },

  {
    id: 6,
    githubLink: null,
    live: null,
    content: [
      {
        id: 1,
        title: "Garanti Card",
        websiteImg: fgaranticard,
      },
      {
        id: 2,
        title: "Garanti Card",
        websiteImg: fgaranticard2,
      },
    ],
  },
];

export const desktopApps = [
  {
    id: 1,
    githubLink: "https://github.com/umutkutukalan/notly-editorapp",
    content: [
      {
        id: 1,
        title: "Notly",
        link: "https://kutukalan-react.vercel.app/",
        desktopAppsImg: notlybanner3,
      },
      {
        id: 2,
        title: "Notly",
        link: "https://kutukalan-spring-boot.vercel.app/",
        desktopAppsImg: notly2,
      },
      {
        id: 3,
        title: "Notly",
        link: "https://kutukalan-spring-boot.vercel.app/",
        desktopAppsImg: notly3,
      },
    ],
  },
];
