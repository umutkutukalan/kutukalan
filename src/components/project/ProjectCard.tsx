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
import { nikegreen } from "../../utils";
import { FaGithub } from "react-icons/fa";
import { handleViewProject } from "../../utils/HandleViewProject";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const navigate = useNavigate();
  const { formatRelativeTime } = RelativeTime();

  return (
    <div className="w-full h-50 overflow-hidden">
      <div className="w-full h-full flex gap-5">
        <div className="w-1/3 h-full overflow-hidden relative flex-shrink-0 rounded-xl">
          <div className="absolute inset-0 bg-black opacity-20" />
          <img
            src={project.mainImg}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full flex flex-col justify-between">
          <div className="w-full flex flex-col gap-5">
            <div className="w-full flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs">
                <div className="w-5 h-5 rounded-full overflow-hidden">
                  <img
                    src={nikegreen}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <span>kutukalan</span>
                </div>
              </div>
              <span className="text-xs text-gray-400">
                {formatRelativeTime(project.createdAt)}
              </span>
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-2xl font-semibold line-clamp-2">
                {project.title}
              </h3>
              <p className="text-sm text-white/60 flex-1 overflow-hidden text-ellipsis line-clamp-2">
                {project.description}
              </p>
            </div>
          </div>
          <div className="w-full flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs">
              <Link
                to={project.githubUrl}
                className="flex items-center gap-1 border-r pr-2"
              >
                <FaGithub
                  size={12}
                  className="hover:text-blue-500 transition-all"
                />
              </Link>
              <button
                onClick={() => handleViewProject(project, navigate)}
                className="hover:underline"
              >
                Projeyi İncele
              </button>
            </div>
            <ul className="flex flex-wrap items-center gap-2">
              {project.technologies.map((tech) => (
                <li
                  key={tech}
                  className="pointer-events-none flex items-center"
                >
                  {tech === "TypeScript" && <BiLogoTypescript size={15} />}
                  {tech === "JavaScript" && <BiLogoJavascript size={15} />}
                  {tech === "ReactJS" && <BiLogoReact size={15} />}
                  {tech === "NextJS" && <RiNextjsFill size={15} />}
                  {tech === "Spring Boot" && <BiLogoSpringBoot size={15} />}
                  {tech === "Java" && <DiJava size={15} />}
                  {tech === "PostgreSQL" && <DiPostgresql size={15} />}
                  {tech === "MySQL" && <DiMysql size={15} />}
                  {tech === "ElectronJS" && <SiElectron size={15} />}
                  {tech === "React Native" && <TbBrandReactNative size={15} />}
                  {tech === "PostGIS" && <span className="text-xs">PGIS</span>}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
