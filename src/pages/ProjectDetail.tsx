import { useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import { naturerun } from "../utils";
import type { Project } from "../services/project/projectServices";
import { useRelativeTime } from "../hooks/useRelativeTime";
import {
  BiLogoJavascript,
  BiLogoReact,
  BiLogoSpringBoot,
  BiLogoTypescript,
} from "react-icons/bi";
import { RiNextjsFill } from "react-icons/ri";
import { DiJava, DiMysql, DiPostgresql } from "react-icons/di";
import { SiElectron } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

const ProjectDetail = () => {
  const { projectSlug } = useParams();
  const location = useLocation();

  const { formatRelativeTime } = useRelativeTime();

  // handleViewProject ile gönderilen state üzerinden proje verisini al
  const project: Project = location.state?.project;

  useEffect(() => {
    // Sayfa yüklendiğinde başa kaydır
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  return (
    <div className="w-full p-10 flex items-center justify-center">
      <div className="w-200 flex flex-col gap-5">
        <div className="w-full border-b border-gray-300 flex flex-col pb-5 gap-5">
          <div className="flex items-start gap-1">
            <h1 className="font-bold text-4xl">{project.title}</h1>
          </div>
          <div className="w-full flex items-center justify-between text-sm">
            <div className="w-full flex items-center gap-2">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full overflow-hidden">
                  <img
                    src={naturerun}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
                <p>kutukalan</p>
              </div>
              <span>·</span>
              <span className="">{formatRelativeTime(project.createdAt)}</span>
            </div>
            <ul className="flex items-center gap-2">
              {project.technologies.map((tech) => (
                <li
                  key={tech}
                  className="text-xs pointer-events-none flex items-center"
                >
                  {tech === "TypeScript" && <BiLogoTypescript size={16} />}
                  {tech === "JavaScript" && <BiLogoJavascript size={16} />}
                  {tech === "ReactJS" && <BiLogoReact size={16} />}
                  {tech === "NextJS" && <RiNextjsFill size={16} />}
                  {tech === "Spring Boot" && <BiLogoSpringBoot size={16} />}
                  {tech === "Java" && <DiJava size={16} />}
                  {tech === "PostgreSQL" && <DiPostgresql size={16} />}
                  {tech === "MySQL" && <DiMysql size={16} />}
                  {tech === "ElectronJS" && <SiElectron size={16} />}
                  {tech === "React Native" && <TbBrandReactNative size={16} />}
                  {tech === "PostGIS" && <span className="text-xs">PGIS</span>}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <ul className="flex flex-col gap-5">
          {project.contentItems.map((item, index) => (
            <li key={index}>
              {item?.type === "image" && (
                <img
                  src={item?.content}
                  alt=""
                  className="w-full h-auto object-cover rounded-md"
                />
              )}
              {item?.type === "paragraph" && (
                <p className="text-base leading-7 whitespace-pre-line text-gray-300">
                  {item?.content}
                </p>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProjectDetail;
