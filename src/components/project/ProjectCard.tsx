import type { Project } from "../../services/project/projectServices";
import { RelativeTime } from "../../utils/RelativeTime";

// import { SiElectron } from 'react-icons/si';
import { BiLogoReact } from "react-icons/bi";
import { BiLogoSpringBoot } from "react-icons/bi";
import { DiJava } from "react-icons/di";
import { BiLogoJavascript } from "react-icons/bi";
import { BiLogoTypescript } from "react-icons/bi";
import { DiPostgresql } from "react-icons/di";
import { DiMysql } from "react-icons/di";
import { RiNextjsFill } from "react-icons/ri";
import { SiElectron } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { Link, useNavigate } from "react-router-dom";
import { FaGithub, FaYoutube } from "react-icons/fa";
import { handleViewProject } from "../../utils/HandleViewProject";
import { IoIosArrowForward } from "react-icons/io";
import { nikegreen } from "../../utils";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const navigate = useNavigate();
  const { formatRelativeTime } = RelativeTime();

  return (
    <div className="w-full h-50 hover:bg-white/5 hover:scale-[1.02] transition-all p-5 rounded-lg hover:border-none border-b border-white/10">
      <div className="w-full h-full flex gap-5">
        <div className="w-1/5 h-full rounded-lg relative flex-shrink-0 relative">
          <div className="absolute inset-0 bg-black opacity-20" />
          <div className="absolute inset-0 w-full h-full overflow-hidden rounded-md z-10">
            <img
              src={project.mainImg}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute w-full h-full rounded-md -left-2 -top-2 z-5 overflow-hidden">
            <div className="relative w-full h-full">
              <div className="absolute inset-0 bg-black opacity-30"></div>
              <img
                src={nikegreen}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col justify-between">
          <div className="w-full flex flex-col gap-5">
            <div className="w-full flex items-center justify-between">
              <span className="text-xs text-gray-400">
                {formatRelativeTime(project.createdAt)}
              </span>
              <ul className="flex flex-wrap items-center gap-2">
                {project.technologies.map((tech) => (
                  <li
                    key={tech}
                    className="pointer-events-none flex items-center"
                  >
                    {tech === "TypeScript" && <BiLogoTypescript size={12} />}
                    {tech === "JavaScript" && <BiLogoJavascript size={12} />}
                    {tech === "ReactJS" && <BiLogoReact size={12} />}
                    {tech === "NextJS" && <RiNextjsFill size={12} />}
                    {tech === "Spring Boot" && <BiLogoSpringBoot size={12} />}
                    {tech === "Java" && <DiJava size={12} />}
                    {tech === "PostgreSQL" && <DiPostgresql size={12} />}
                    {tech === "MySQL" && <DiMysql size={12} />}
                    {tech === "ElectronJS" && <SiElectron size={12} />}
                    {tech === "React Native" && (
                      <TbBrandReactNative size={12} />
                    )}
                    {tech === "PostGIS" && (
                      <span className="text-xs">PGIS</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-xl font-semibold line-clamp-2">
                {project.title}
              </h3>
              <p className="text-xs text-white/60 flex-1 overflow-hidden text-ellipsis line-clamp-2">
                {project.description}
              </p>
            </div>
          </div>
          <div className="w-full flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Link
                to={project.githubUrl}
                className="flex items-center gap-1 text-xs hover:text-gray-300 transition-all"
              >
                <FaGithub title="Github Url" size={12} />
                <span>Github</span>
              </Link>
              <span>·</span>
              <Link
                to={project.liveUrl}
                className="flex items-center gap-1 text-xs hover:text-gray-300 transition-all"
              >
                <FaYoutube title="Youtube Url" size={12} color="#ff0034" />
                <span>YouTube</span>
              </Link>
            </div>

            <div className="flex items-center gap-2 text-xs">
              <button
                onClick={() => handleViewProject(project, navigate)}
                className="cursor-pointer transition-all hover:text-gray-300 flex items-center gap-1"
              >
                <span>Projeyi İncele</span>
                <IoIosArrowForward />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
