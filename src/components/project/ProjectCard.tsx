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
import { Link } from "react-router-dom";
import { nikegreen } from "../../utils";
import { FaGithub } from "react-icons/fa";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const { formatRelativeTime } = RelativeTime();

  return (
    <div className="w-full h-50 overflow-hidden">
      <div className="w-full h-full flex gap-5">
        <div className="w-1/3 h-full overflow-hidden relative flex-shrink-0">
          <div className="absolute inset-0 bg-black opacity-20" />
          <img
            src={project.mainImg}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full flex flex-col justify-between">
          <div className="w-full flex flex-col gap-3">
            <div className="w-full flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs">
                <div className="w-7 h-7 rounded-full overflow-hidden">
                  <img
                    src={nikegreen}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <span>Umut Kütükalan</span>
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
              <p className="text-sm text-white/60 flex-1 overflow-hidden text-ellipsis line-clamp-3">
                {project.description}
              </p>
            </div>
          </div>
          <div className="w-full flex items-center justify-between">
            <Link to={project.githubUrl} className="flex items-center gap-1">
              <FaGithub size={12} />
              <span className="text-xs">GITHUB URL</span>
            </Link>
            <div className="flex items-center justify-between text-xs text-white/40">
              <Link
                to={`/projects/${project.id}`}
                className="text-blue-400 hover:underline"
              >
                Projeyi İncele
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

{
  /* <ul className="flex flex-wrap items-center gap-2">
  {project.technologies.map((tech) => (
    <li key={tech} className="text-xs pointer-events-none flex items-center">
      {tech === "TypeScript" && <BiLogoTypescript size={18} />}
      {tech === "JavaScript" && <BiLogoJavascript size={18} />}
      {tech === "ReactJS" && <BiLogoReact size={18} />}
      {tech === "NextJS" && <RiNextjsFill size={18} />}
      {tech === "Spring Boot" && <BiLogoSpringBoot size={18} />}
      {tech === "Java" && <DiJava size={18} />}
      {tech === "PostgreSQL" && <DiPostgresql size={18} />}
      {tech === "MySQL" && <DiMysql size={18} />}
      {tech === "ElectronJS" && <SiElectron size={18} />}
      {tech === "React Native" && <TbBrandReactNative size={18} />}
      {tech === "PostGIS" && <span className="text-xs">PGIS</span>}
    </li>
  ))}
</ul>; */
}
