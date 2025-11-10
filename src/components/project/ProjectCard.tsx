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

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const { formatRelativeTime } = RelativeTime();

  return (
    <div className="flex flex-col gap-5 pb-5 border-b border-gray-400 text-xs">
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-5">
          <div className="w-30 h-30 rounded-md border border-white/20">
            <img
              src={project.mainImg}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-gray-400">
              {formatRelativeTime(project.createdAt)}
            </span>
            <Link to={`/projects/${project.githubUrl}`}>Github</Link>
          </div>
        </div>
        <h2 className="text-xl">{project.title}</h2>
        <p className="text-gray-400">{project.description}</p>
      </div>
      <ul className="flex flex-wrap items-center gap-2">
        {project.technologies.map((tech) => (
          <li
            key={tech}
            className="text-xs pointer-events-none flex items-center"
          >
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
      </ul>
    </div>
  );
};

export default ProjectCard;
