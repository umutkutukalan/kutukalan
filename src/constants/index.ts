import { FaHome } from "react-icons/fa";
import { BsMusicNote } from "react-icons/bs";
import { BsDisplayFill } from "react-icons/bs";
import { BsBraces } from "react-icons/bs";
import { BsFileEarmarkTextFill } from "react-icons/bs";
import { BsEnvelopeFill } from "react-icons/bs";

export const navbarList = [
  { id: 1, title: "Home", link: "/", icon: FaHome },
  { id: 2, title: "Musics", link: "/musics", icon: BsMusicNote },
  { id: 3, title: "Projects", link: "/projects", icon: BsDisplayFill },
  { id: 4, title: "Skills", link: "/skills", icon: BsBraces },
  { id: 5, title: "Blogs", link: "/blogs", icon: BsFileEarmarkTextFill },
];

export const contactList = [
  { id: 1, title: "Contact", link: "/contact", icon: BsEnvelopeFill },
];
