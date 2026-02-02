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

  useEffect(() => {
    // Sayfa yüklendiğinde başa kaydır
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  return (
    <div
      className={`w-full px-[clamp(1rem,4vw,2rem)] pt-[clamp(3.75rem,4vw,3.75rem)] lg:pt-[clamp(2.5rem,4vw,2.5rem)] 2xl:pt-[clamp(5rem,4vw,5rem)] xl:pb-[clamp(2.5rem,4vw,2.5rem)] flex items-center justify-center ${
        currentTrack ? "pb-20" : "pb-5"
      }`}
    >
      <div className="w-[clamp(300px,80vw,800px)] 3xl:w-[clamp(50rem,60vw,70rem)] flex flex-col gap-5">
        <div className="w-full border-b border-gray-300 flex flex-col pb-5 gap-5">
          <div className="flex items-start gap-1">
            <h1 className="font-bold text-[clamp(1.5rem,4vw,2rem)] 3xl:text-[clamp(2rem,4vw,2.5rem)] 4xl:text-[clamp(2.5rem,4vw,3rem)]">
              {project.title}
            </h1>
          </div>
          <div className="w-full flex items-center justify-between text-sm">
            <div className="w-full flex items-center gap-2">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 3xl:w-10 3xl:h-10 4xl:w-12 4xl:h-12 rounded-full overflow-hidden">
                  <img
                    src={project.user.profileImg}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-xs 3xl:text-2xl 4xl:text-2xl text-gray-300">
                  {project.user.username}
                </p>
              </div>
              <span className="text-xs 3xl:text-2xl 4xl:text-2xl">·</span>
              <span className="text-xs 3xl:text-2xl 4xl:text-2xl text-gray-300">
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
                    <BiLogoTypescript className="text-[clamp(0.75rem,1.2vw,0.75rem)] 3xl:text-[clamp(1rem,1.3vw,1.125rem)] 4xl:text-[1.5rem]" />
                  )}
                  {tech === "JavaScript" && (
                    <BiLogoJavascript className="text-[clamp(0.75rem,1.2vw,0.75rem)] 3xl:text-[clamp(1rem,1.3vw,1.125rem)] 4xl:text-[1.5rem]" />
                  )}
                  {tech === "ReactJS" && (
                    <BiLogoReact className="text-[clamp(0.75rem,1.2vw,0.75rem)] 3xl:text-[clamp(1rem,1.3vw,1.125rem)] 4xl:text-[1.5rem]" />
                  )}
                  {tech === "NextJS" && (
                    <RiNextjsFill className="text-[clamp(0.75rem,1.2vw,0.75rem)] 3xl:text-[clamp(1rem,1.3vw,1.125rem)] 4xl:text-[1.5rem]" />
                  )}
                  {tech === "Spring Boot" && (
                    <BiLogoSpringBoot className="text-[clamp(0.75rem,1.2vw,0.75rem)] 3xl:text-[clamp(1rem,1.3vw,1.125rem)] 4xl:text-[1.5rem]" />
                  )}
                  {tech === "Java" && (
                    <DiJava className="text-[clamp(0.75rem,1.2vw,0.75rem)] 3xl:text-[clamp(1rem,1.3vw,1.125rem)] 4xl:text-[1.5rem]" />
                  )}
                  {tech === "PostgreSQL" && (
                    <DiPostgresql className="text-[clamp(0.75rem,1.2vw,0.75rem)] 3xl:text-[clamp(1rem,1.3vw,1.125rem)] 4xl:text-[1.5rem]" />
                  )}
                  {tech === "MySQL" && (
                    <DiMysql className="text-[clamp(0.75rem,1.2vw,0.75rem)] 3xl:text-[clamp(1rem,1.3vw,1.125rem)] 4xl:text-[1.5rem]" />
                  )}
                  {tech === "ElectronJS" && (
                    <SiElectron className="text-[clamp(0.75rem,1.2vw,0.75rem)] 3xl:text-[clamp(1rem,1.3vw,1.125rem)] 4xl:text-[1.5rem]" />
                  )}
                  {tech === "React Native" && (
                    <TbBrandReactNative className="text-[clamp(0.75rem,1.2vw,0.75rem)] 3xl:text-[clamp(1rem,1.3vw,1.125rem)] 4xl:text-[1.5rem]" />
                  )}
                  {tech === "PostGIS" && (
                    <span className="text-[clamp(0.75rem,1.2vw,0.75rem)] 3xl:text-[clamp(1rem,1.3vw,1.125rem)] 4xl:text-[1.5rem]">
                      PGIS
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <ul className="flex flex-col gap-5 3xl:gap-7 4xl:gap-10">
          {project.contentItems.map((item, index) => (
            <li
              key={index}
              className={`w-full ${
                item.size === "large"
                  ? "h-full"
                  : item.size === "medium"
                    ? "h-[clamp(400px,30vw,600px)]"
                    : item.size === "small"
                      ? "h-[clamp(200px,15vw,300px)]"
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
                <p className="text-[clamp(1rem,1.2vw,0.7rem)] 3xl:text-[clamp(1rem,1.3vw,1.5rem)] 4xl:text-[2rem] leading-7 3xl:leading-[2.5rem] 4xl:leading-[3.25rem] whitespace-pre-line text-gray-300">
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
