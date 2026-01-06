import { useEffect } from "react";
import { useLocation } from "react-router-dom";
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
import { useAudioPlayer } from "../context/AudioPlayerContext";

const ProjectDetail = () => {
  const location = useLocation();
  const { currentTrack } = useAudioPlayer();

  const { formatRelativeTime } = useRelativeTime();

  // handleViewProject ile gönderilen state üzerinden proje verisini al
  const project: Project = location.state?.project;

  console.log("Project Detail: ", project);

  useEffect(() => {
    // Sayfa yüklendiğinde başa kaydır
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  return (
    <div
      className={`w-full px-10 pt-15 lg:pt-10 xl:pb-10 flex items-center justify-center ${
        currentTrack ? "pb-20" : "pb-5"
      }`}
    >
      <div className="xl:w-full w-full flex flex-col gap-5">
        <div className="w-full border-b border-gray-300 flex flex-col pb-5 gap-5">
          <div className="flex items-start gap-1">
            <h1 className="font-bold text-3xl sm:text-4xl">{project.title}</h1>
          </div>
          <div className="w-full flex items-center justify-between text-sm">
            <div className="w-full flex items-center gap-2">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 sm:w-6 sm:h-6 rounded-full overflow-hidden">
                  <img
                    src={project.user.profileImg}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-xs text-gray-300">{project.user.username}</p>
              </div>
              <span>·</span>
              <span className="text-xs text-gray-300">
                {formatRelativeTime(project.createdAt)}
              </span>
            </div>
            <ul className="flex items-center gap-2">
              {project.technologies.map((tech) => (
                <li
                  key={tech}
                  className="text-xs pointer-events-none flex items-center"
                >
                  {tech === "TypeScript" && (
                    <BiLogoTypescript className="text-xs sm:text-sm" />
                  )}
                  {tech === "JavaScript" && (
                    <BiLogoJavascript className="text-xs sm:text-sm" />
                  )}
                  {tech === "ReactJS" && (
                    <BiLogoReact className="text-xs sm:text-sm" />
                  )}
                  {tech === "NextJS" && (
                    <RiNextjsFill className="text-xs sm:text-sm" />
                  )}
                  {tech === "Spring Boot" && (
                    <BiLogoSpringBoot className="text-xs sm:text-sm" />
                  )}
                  {tech === "Java" && <DiJava className="text-xs sm:text-sm" />}
                  {tech === "PostgreSQL" && (
                    <DiPostgresql className="text-xs sm:text-sm" />
                  )}
                  {tech === "MySQL" && (
                    <DiMysql className="text-xs sm:text-sm" />
                  )}
                  {tech === "ElectronJS" && (
                    <SiElectron className="text-xs sm:text-sm" />
                  )}
                  {tech === "React Native" && (
                    <TbBrandReactNative className="text-xs sm:text-sm" />
                  )}
                  {tech === "PostGIS" && <span className="text-xs">PGIS</span>}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <ul className="flex flex-col gap-5">
          {project.contentItems.map((item, index) => (
            <li
              key={index}
              className={`w-full ${
                item.size === "large"
                  ? "h-full"
                  : item.size === "medium"
                  ? "h-100"
                  : item.size === "small"
                  ? "h-80"
                  : ""
              } flex relative focus:outline-none focus-visible:outline-none focus:ring-0 focus:border-none`}
            >
              {item?.type === "image" && (
                <img
                  src={item?.content}
                  alt=""
                  className={`w-full h-full rounded-lg pointer-events-none focus:outline-none ${
                    item.size === "large"
                      ? "object-contain"
                      : item.size === "medium"
                      ? "object-cover"
                      : "object-contain"
                  } `}
                />
              )}
              {item?.type === "paragraph" && (
                <p className="text-sm sm:text-base leading-7 whitespace-pre-line text-gray-300">
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
