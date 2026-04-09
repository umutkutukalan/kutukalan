import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useRelativeTime } from "../hooks/useRelativeTime";
import type { Blog } from "../services/blog/blogServices";
import { useAudioPlayer } from "../context/AudioPlayerContext";
import { BiCodeCurly } from "react-icons/bi";
import { FaPersonWalkingLuggage } from "react-icons/fa6";
import { BsFileMusicFill, BsPersonVcardFill, BsRobot } from "react-icons/bs";
import { FaBookOpen } from "react-icons/fa";

const BlogDetail = () => {
  const location = useLocation();
  const { currentTrack } = useAudioPlayer();
  const { formatRelativeTime } = useRelativeTime();

  // handleViewProject ile gönderilen state üzerinden proje verisini al
  const blog: Blog = location.state?.blog;

  useEffect(() => {
    // Sayfa yüklendiğinde başa kaydır
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  return (
    <div
      className={`w-full pt-[clamp(3.75rem,4vw,3.75rem)] lg:pt-[clamp(2.5rem,4vw,2.5rem)] 2xl:pt-[clamp(5rem,4vw,5rem)] xl:pb-[clamp(2.5rem,4vw,2.5rem)] flex items-center justify-center ${currentTrack ? "pb-20" : "pb-5"
        }`}
    >
      <div className="w-[clamp(300px,80vw,800px)] 3xl:w-[clamp(50rem,60vw,70rem)] flex flex-col gap-5">
        <div className="w-full border-b border-gray-300 flex flex-col pb-5 gap-5">
          <div className="flex items-start gap-1">
            <h1 className="font-bold text-[clamp(1.5rem,4vw,2rem)] 3xl:text-[clamp(2rem,4vw,2.5rem)] 4xl:text-[clamp(2.5rem,4vw,3rem)]">
              {blog.title}
            </h1>
          </div>
          <div className="w-full flex items-center justify-between text-sm">
            <div className="w-full flex items-center gap-2">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 3xl:w-10 3xl:h-10 4xl:w-12 4xl:h-12 rounded-full overflow-hidden">
                  <img
                    src={blog.user.profileImg}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-xs 3xl:text-2xl 4xl:text-2xl text-gray-300">
                  {blog.user.username}
                </p>
              </div>
              <span className="text-xs 3xl:text-2xl 4xl:text-2xl">·</span>
              <span className="text-xs 3xl:text-2xl 4xl:text-2xl text-gray-300">
                {formatRelativeTime(blog.createdAt)}
              </span>
            </div>
            <ul className="flex items-center gap-2">
              {blog.tags.map((tag) => (
                <li
                  title={tag}
                  key={tag}
                  className="flex items-center"
                >
                  {tag === "Yazılım" && (
                    <BiCodeCurly
                      title="Yazılım"
                      className="text-[clamp(0.75rem,1.2vw,0.75rem)] 3xl:text-[clamp(1rem,1.3vw,1.125rem)] 4xl:text-[1.5rem]" />
                  )}
                  {tag === "Yapay Zeka" && (
                    <BsRobot
                      title="Yapay Zeka"
                      className="text-[clamp(0.75rem,1.2vw,0.75rem)] 3xl:text-[clamp(1rem,1.3vw,1.125rem)] 4xl:text-[1.5rem]" />
                  )}
                  {tag === "Sosyal" && (
                    <FaPersonWalkingLuggage
                      title="Sosyal"
                      className="text-[clamp(0.75rem,1.2vw,0.75rem)] 3xl:text-[clamp(1rem,1.3vw,1.125rem)] 4xl:text-[1.5rem]" />
                  )}
                  {tag === "Müzik" && (
                    <BsFileMusicFill
                      title="Müzik"
                      className="text-[clamp(0.75rem,1.2vw,0.75rem)] 3xl:text-[clamp(1rem,1.3vw,1.125rem)] 4xl:text-[1.5rem]" />
                  )}
                  {tag === "Kişisel" && (
                    <BsPersonVcardFill
                      title="Kişisel"
                      className="text-[clamp(0.75rem,1.2vw,0.75rem)] 3xl:text-[clamp(1rem,1.3vw,1.125rem)] 4xl:text-[1.5rem]" />
                  )}
                  {tag === "Okuma/Paylaşım" && (
                    <FaBookOpen
                      title="Okuma/Paylaşım"
                      className="text-[clamp(0.75rem,1.2vw,0.75rem)] 3xl:text-[clamp(1rem,1.3vw,1.125rem)] 4xl:text-[1.5rem]" />
                  )}
                </li>

              ))}
            </ul>
          </div>
        </div>
        <ul className="flex flex-col gap-5 3xl:gap-7 4xl:gap-10">
          {blog.contentItems.map((item, index) => (
            <li
              key={index}
              className={`w-full ${item.size === "large"
                ? "h-full"
                : item.size === "medium"
                  ? "h-[clamp(400px,40vw,500px)]"
                  : item.size === "small"
                    ? "h-[clamp(200px,15vw,300px)]"
                    : ""
                } flex relative focus:outline-none focus-visible:outline-none focus:ring-0 focus:border-none`}
            >
              {item?.type === "image" && (
                <img
                  src={item?.content}
                  alt=""
                  className={`w-full h-full rounded-lg pointer-events-none focus:outline-none ${item.size === "large"
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

export default BlogDetail;
