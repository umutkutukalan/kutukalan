import { useEffect } from "react";
import { useInfiniteScroll } from "../hooks/useInfiniteScroll";
import BlogHeader from "../components/pageheader/BlogHeader";
import BlogList from "../components/blog/BlogList";
import { useAudioPlayer } from "../context/AudioPlayerContext";
import { useGetBlogs } from "../hooks/blog/useGetBlogs";
import LoadingScreen from "../components/LoadingScreen";

const Blogs = () => {
  const {
    blogs,
    isLoading,
    isLoadingMore,
    hasMore,
    loadMoreBlogs,
    getBlogs,
    // currentPage,
    // totalPages,
  } = useGetBlogs();

  const { currentTrack } = useAudioPlayer();

  // Infinite scroll hook'unu kullan
  useInfiniteScroll(loadMoreBlogs, hasMore, isLoadingMore);

  useEffect(() => {
    // İlk yüklemede projeleri al
    getBlogs(0, false);
  }, [getBlogs]);

  if (isLoading) {
    return <LoadingScreen key={location.pathname} />;
  } else if (blogs.length === 0) {
    return (
      <div
        className={`pt-15 px-5 sm:px-10 xl:pb-5 ${currentTrack ? "pb-10" : ""}`}
      >
        <BlogHeader />
        <div className="w-full h-full flex flex-col gap-1 mt-5">
          <h2 className=" text-[clamp(1rem,1.6vw,2rem)] 3xl:text-[clamp(1.5rem,1.8vw,2rem)] 4xl:text-[3rem] font-semibold text-gray-300">
            Henüz blog bulunmamaktadır.
          </h2>
          <p className="text-gray-500 text-[clamp(0.75rem,1.2vw,0.75rem)] 3xl:text-[clamp(1rem,1.3vw,1.125rem)] 4xl:text-[1.5rem]">
            Lütfen daha sonra tekrar kontrol edin.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`pt-15 px-5 sm:px-10 xl:pb-5 ${currentTrack ? "pb-10" : ""}`}
    >
      <div className="flex flex-col gap-5 3xl:px-20">
        <BlogHeader />
        <BlogList blogs={blogs} onBlogDeleted={() => getBlogs(0, false)} />
      </div>

      {/* Veri Bittiğinde Gösterilecek Mesaj */}
      {!hasMore && blogs.length > 0 && (
        <div className="flex justify-center items-center py-8">
          <p className="text-gray-500 text-[clamp(0.75rem,1.2vw,0.75rem)] 3xl:text-[clamp(1rem,1.3vw,1.125rem)] 4xl:text-[1.5rem]">
            Tüm bloglar yüklendi.
          </p>
        </div>
      )}

      {/* Loading Göstergesi */}
      {isLoadingMore && (
        <div className="flex justify-center items-center py-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
          <span className="ml-3 text-gray-600">
            Daha fazla blog yükleniyor...
          </span>
        </div>
      )}
    </div>
  );
};

export default Blogs;
