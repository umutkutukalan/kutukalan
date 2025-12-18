import { RelativeTime } from "../../utils/RelativeTime";

// import { SiElectron } from 'react-icons/si';
import { Link, useNavigate } from "react-router-dom";
import { FaPen, FaYoutube } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import type { Blog } from "../../services/blog/blogServices";
import { handleViewBlog } from "../../utils/HandleViewBlog";
import { useUser } from "../../hooks/useUserContext";
import { LuTrash2 } from "react-icons/lu";
import { useEffect, useRef, useState } from "react";
import { useDeleteBlog } from "../../hooks/blog/useDeleteBlog";
import { CiImageOff } from "react-icons/ci";

interface BlogCardProps {
  blog: Blog;
  onBlogDeleted?: () => void;
}

const BlogCard = ({ blog, onBlogDeleted }: BlogCardProps) => {
  const { user } = useUser();
  const navigate = useNavigate();
  const { formatRelativeTime } = RelativeTime();

  const { deleteBlog } = useDeleteBlog(onBlogDeleted);
  const [deleteShow, setDeleteShow] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (deleteShow && modalRef.current) {
      modalRef.current.focus();
    }
  }, [deleteShow]);

  console.log("BlogCard render:", blog);

  return (
    <>
      <div className="w-full h-50 hover:bg-white/5 hover:scale-[1.02] transition-all p-2 sm:p-5 rounded-lg hover:border-none border-b border-white/10">
        <div className="w-full h-full flex gap-5">
          <div className="sm:w-1/4 md:w-1/4 lg:w-1/5 h-full rounded-lg relative flex-shrink-0 relative sm:block hidden">
            <div className="absolute inset-0 bg-black opacity-20" />
            <div className="absolute inset-0 w-full h-full overflow-hidden rounded-md z-10">
              {blog.mainImg ? (
                <img
                  src={blog.mainImg}
                  alt=""
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-[#111111] flex items-center justify-center text-gray-500">
                  <CiImageOff className="text-2xl" />
                </div>
              )}
            </div>
            <div className="absolute w-full h-full rounded-md -left-2 -top-2 z-5 overflow-hidden">
              <div className="relative w-full h-full">
                <div className="absolute inset-0 bg-black opacity-70"></div>
                {blog.mainImg ? (
                  <img
                    src={blog.mainImg}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-400 flex items-center justify-center text-gray-500">
                    <CiImageOff />
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col justify-between">
            <div className="w-full flex flex-col gap-5">
              <div className="w-full flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-xs text-gray-400">
                    {formatRelativeTime(blog.createdAt)}
                  </span>
                  <span className="text-gray-400 select-none">·</span>
                  {user?.role === "ADMIN" && (
                    <div className="flex items-center gap-1">
                      <FaPen
                        className="cursor-pointer text-[10px] hover:text-green-500 transition-all"
                        onClick={() => {}}
                      />
                      <LuTrash2
                        className="cursor-pointer text-[10px] hover:text-red-500 transition-all"
                        onClick={() => setDeleteShow(true)}
                      />
                    </div>
                  )}
                </div>
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
                {blog.youtubeUrl && (
                  <Link
                    to={blog.youtubeUrl}
                    className="flex items-center gap-1 text-xs hover:text-gray-300 transition-all"
                  >
                    <FaYoutube title="Youtube Url" size={12} color="#ff0034" />
                    <span>YouTube</span>
                  </Link>
                )}
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
      {/* Delete Confirmation Modal */}
      {deleteShow && (
        <div
          ref={modalRef}
          className="fixed w-full inset-0 bg-black/50 flex items-center justify-center z-50"
          onClick={() => setDeleteShow(false)}
          onKeyDown={(e) => {
            if (e.key === "Escape") {
              e.preventDefault();
              setDeleteShow(false);
            } else if (e.key === "Enter") {
              e.preventDefault();
              deleteBlog(blog.id);
              setDeleteShow(false);
            }
          }}
          tabIndex={-1}
        >
          <div
            className="bg-gray-800 p-6 rounded-lg w-80"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-lg font-semibold mb-4 text-white">
              Blog Silme Onayı
            </h2>
            <p className="mb-6 text-white">
              Bu blogu silmek istediğinize emin misiniz?
            </p>
            <div className="flex justify-end gap-4">
              <button
                onClick={() => setDeleteShow(false)}
                className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
              >
                İptal
              </button>
              <button
                onClick={() => {
                  // Call delete function here
                  deleteBlog(blog.id);
                  setDeleteShow(false);
                }}
                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
              >
                Sil
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BlogCard;
