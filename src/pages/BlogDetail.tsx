import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useRelativeTime } from "../hooks/useRelativeTime";
import { TbBurger } from "react-icons/tb";
import type { Blog } from "../services/blog/blogServices";
import { useAudioPlayer } from "../context/AudioPlayerContext";

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

  console.log("Blog Detail Page - Blog Data:", blog);
  console.log(
    "Blog images sizes",
    blog.contentItems.map((item) => item.size)
  );

  return (
    <div
      className={`w-full px-10 pt-15 sm:pt-10 xl:pb-10 flex items-center justify-center ${
        currentTrack ? "pb-20" : "pb-5"
      }`}
    >
      <div className="w-200 flex flex-col gap-5">
        <div className="w-full border-b border-gray-300 flex flex-col pb-5 gap-5">
          <div className="flex items-start gap-1">
            <h1 className="font-bold text-3xl sm:text-4xl">{blog.title}</h1>
          </div>
          <div className="w-full flex items-center justify-between text-sm">
            <div className="w-full flex items-center gap-2">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 sm:w-6 sm:h-6 rounded-full overflow-hidden">
                  <img
                    src={blog.user.profileImg}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-xs text-gray-300">{blog.user.username}</p>
              </div>
              <span>·</span>
              <span className="text-xs text-gray-300">
                {formatRelativeTime(blog.createdAt)}
              </span>
            </div>
            <ul className="flex items-center gap-2">
              {blog.tags.map((tag) => (
                <li
                  key={tag}
                  className="text-xs pointer-events-none flex items-center"
                >
                  {tag === "Food" && (
                    <TbBurger className="text-xs sm:text-sm" />
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <ul className="flex flex-col gap-5">
          {blog.contentItems.map((item, index) => (
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

export default BlogDetail;
