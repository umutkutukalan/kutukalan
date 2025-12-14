import { RelativeTime } from "../../utils/RelativeTime";

// import { SiElectron } from 'react-icons/si';
import { Link, useNavigate } from "react-router-dom";
import { FaYoutube } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { nikegreen } from "../../utils";
import type { Blog } from "../../services/blog/blogServices";
import { handleViewBlog } from "../../utils/HandleViewBlog";

interface BlogCardProps {
  blog: Blog;
}

const BlogCard = ({ blog }: BlogCardProps) => {
  const navigate = useNavigate();
  const { formatRelativeTime } = RelativeTime();

  return (
    <div className="w-full h-50 hover:bg-white/5 hover:scale-[1.02] transition-all py-2 p-2 sm:p-5rounded-lg hover:border-none border-b border-white/10">
      <div className="w-full h-full flex gap-5">
        <div className="sm:w-2/7 lg:w-1/5 h-full rounded-lg relative flex-shrink-0 relative sm:block hidden">
          <div className="absolute inset-0 bg-black opacity-20" />
          <div className="absolute inset-0 w-full h-full overflow-hidden rounded-md z-10">
            <img
              src={blog.mainImg}
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
                {formatRelativeTime(blog.createdAt)}
              </span>
              <ul className="flex flex-wrap items-center gap-2">
                {blog.tags.map((tag) => (
                  <li
                    key={tag}
                    className="pointer-events-none flex items-center px-2 py-0.25 bg-blue-800 text-[10px] rounded-full"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-xl font-semibold line-clamp-2">
                {blog.title}
              </h3>
              <p className="text-xs text-white/60 flex-1 overflow-hidden text-ellipsis line-clamp-2">
                {blog.description}
              </p>
            </div>
          </div>
          <div className="w-full flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Link
                to={""}
                className="flex items-center gap-1 text-xs hover:text-gray-300 transition-all"
              >
                <FaYoutube title="Youtube Url" size={12} color="#ff0034" />
                <span>YouTube</span>
              </Link>
            </div>

            <div className="flex items-center gap-2 text-xs">
              <button
                onClick={() => handleViewBlog(blog, navigate)}
                className="cursor-pointer transition-all hover:text-gray-300 flex items-center gap-1"
              >
                <span>Okumaya Devam Et</span>
                <IoIosArrowForward />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
