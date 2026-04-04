// import { RelativeTime } from "../../utils/RelativeTime";

// import { SiElectron } from 'react-icons/si';
import { Link, useNavigate } from "react-router-dom";
import { FaBookOpen, FaPen, FaYoutube } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import type { Blog } from "../../services/blog/blogServices";
import { handleViewBlog } from "../../utils/HandleViewBlog";
import { useUser } from "../../hooks/useUserContext";
import { LuTrash2 } from "react-icons/lu";
import { useEffect, useRef, useState } from "react";
import { useDeleteBlog } from "../../hooks/blog/useDeleteBlog";
import { CiImageOff } from "react-icons/ci";
import { BiCodeCurly } from "react-icons/bi";
import { BsFileMusicFill, BsPersonVcardFill } from "react-icons/bs";
import { FaPersonWalkingLuggage } from "react-icons/fa6";

interface BlogCardProps {
  blog: Blog;
  onBlogDeleted?: () => void;
}

const BlogCard = ({ blog, onBlogDeleted }: BlogCardProps) => {
  const { user } = useUser();
  const navigate = useNavigate();
  // const { formatRelativeTime } = RelativeTime();

  const { deleteBlog } = useDeleteBlog(onBlogDeleted);
  const [deleteShow, setDeleteShow] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (deleteShow && modalRef.current) {
      modalRef.current.focus();
    }
  }, [deleteShow]);

  return (
    <>
      <div
        className="w-full h-[clamp(220px,16vw,380px)]
       hover:bg-white/5 hover:scale-[1.02] transition-all p-2 sm:p-5 rounded-lg hover:border-none border-b border-white/10"
      >
        <div className="w-full h-full flex gap-5 3xl:gap-10">
          <div className="w-[clamp(180px,14vw,360px)] h-full rounded-lg relative flex-shrink-0 relative sm:block hidden">
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
                  <CiImageOff className="text-[clamp(12px,1vw,24px)] " />
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
                    <CiImageOff className="text-[clamp(12px,1vw,24px)]" />
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col justify-between">
            <div className="w-full flex flex-col gap-5">
              <div className="w-full flex items-center justify-between">
                <ul className="flex flex-wrap items-center gap-2">
                  {blog.tags.map((tag) => (
                    <li
                      key={tag}
                      className="pointer-events-none flex items-center"
                    >
                      {tag === "Teknoloji" && (
                        <BiCodeCurly className="text-[clamp(0.75rem,1.2vw,0.75rem)] 3xl:text-[clamp(1rem,1.3vw,1.125rem)] 4xl:text-[1.5rem]" />
                      )}
                      {tag === "Sosyal" && (
                        <FaPersonWalkingLuggage className="text-[clamp(0.75rem,1.2vw,0.75rem)] 3xl:text-[clamp(1rem,1.3vw,1.125rem)] 4xl:text-[1.5rem]" />
                      )}
                      {tag === "Müzik" && (
                        <BsFileMusicFill className="text-[clamp(0.75rem,1.2vw,0.75rem)] 3xl:text-[clamp(1rem,1.3vw,1.125rem)] 4xl:text-[1.5rem]" />
                      )}
                      {tag === "Kişisel" && (
                        <BsPersonVcardFill className="text-[clamp(0.75rem,1.2vw,0.75rem)] 3xl:text-[clamp(1rem,1.3vw,1.125rem)] 4xl:text-[1.5rem]" />
                      )}
                      {tag === "Okuma/Paylaşım" && (
                        <FaBookOpen className="text-[clamp(0.75rem,1.2vw,0.75rem)] 3xl:text-[clamp(1rem,1.3vw,1.125rem)] 4xl:text-[1.5rem]" />
                      )}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center gap-2">
                  {/* <span className="text-[clamp(0.75rem,1.2vw,0.75rem)] 3xl:text-[clamp(1rem,1.3vw,1.125rem)] 4xl:text-[1.5rem] text-gray-400">
                    {formatRelativeTime(blog.createdAt)}
                  </span> */}
                  {user?.role === "ADMIN" && (
                    <span className="text-gray-400 select-none">·</span>
                  )}
                  {user?.role === "ADMIN" && (
                    <div className="flex items-center gap-1 4xl:gap-5">
                      <FaPen
                        className="cursor-pointer text-[clamp(0.75rem,1.2vw,0.75rem)] 3xl:text-[clamp(1rem,1.3vw,1.125rem)] 4xl:text-[1.5rem] hover:text-green-500 transition-all"
                        onClick={() => { }}
                      />
                      <LuTrash2
                        className="cursor-pointer text-[clamp(0.75rem,1.2vw,0.75rem)] 3xl:text-[clamp(1rem,1.3vw,1.125rem)] 4xl:text-[1.5rem] hover:text-red-500 transition-all"
                        onClick={() => setDeleteShow(true)}
                      />
                    </div>
                  )}
                </div>
              </div>
              <div className="flex flex-col gap-[clamp(0.25rem,0.5vw,0.5rem)]">
                <h3
                  className="font-semibold line-clamp-2
text-[clamp(1rem,1.6vw,2rem)]
3xl:text-[clamp(1.5rem,1.8vw,2rem)]
4xl:text-[3rem]

  "
                >
                  {blog.title}
                </h3>

                <p
                  className="text-white/60 line-clamp-2
    text-[clamp(0.75rem,1.2vw,0.75rem)]
    3xl:text-[clamp(1rem,1.3vw,1.125rem)]
    4xl:text-[1.5rem]
  "
                >
                  {blog.description}
                </p>
              </div>
            </div>
            <div className="w-full flex items-center justify-between">
              <div className="flex items-center gap-2">
                {blog.youtubeUrl && (
                  <Link
                    to={blog.youtubeUrl}
                    className="flex items-center gap-1
                    text-[clamp(0.75rem,1.2vw,0.75rem)]
                    3xl:text-[clamp(1rem,1.3vw,1.125rem)]
                    4xl:text-[1.5rem]
                    hover:text-gray-300 transition-all"
                  >
                    <FaYoutube title="Youtube Url" color="#ff0034" />
                    <span>YouTube</span>
                  </Link>
                )}
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleViewBlog(blog, navigate)}
                  className="cursor-pointer transition-all hover:text-gray-300 flex items-center gap-1 text-[clamp(0.75rem,1.2vw,0.75rem)] 3xl:text-[clamp(1rem,1.3vw,1.125rem)] 4xl:text-[1.5rem]"
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
