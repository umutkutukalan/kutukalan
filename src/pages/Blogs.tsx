import { useEffect } from "react";
import { useInfiniteScroll } from "../hooks/useInfiniteScroll";
import { useGetBlogs } from "../hooks/blog/useGetBlogs";
import BlogHeader from "../components/pageheader/BlogHeader";
import BlogList from "../components/blog/BlogList";

const Blogs = () => {
  const {
    blogs,
    isLoading,
    isLoadingMore,
    hasMore,
    loadMoreBlogs,
    getBlogs,
    currentPage,
    totalPages,
  } = useGetBlogs();

  // Infinite scroll hook'unu kullan
  useInfiniteScroll(loadMoreBlogs, hasMore, isLoadingMore);

  useEffect(() => {
    // İlk yüklemede projeleri al
    getBlogs(0, false);
  }, [getBlogs]);

  if (isLoading) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  return (
    <div className="py-8 px-10">
      <div className="flex flex-col gap-5">
        <BlogHeader />
        <BlogList blogs={blogs} />
      </div>

      {/* Veri Bittiğinde Gösterilecek Mesaj */}
      {!hasMore && blogs.length > 0 && (
        <div className="flex justify-center items-center py-8">
          <p className="text-gray-500 text-xs">Tüm bloglar yüklendi.</p>
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

      {/* Sayfa Bilgisi */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center py-4">
          <p className="text-sm text-gray-400">
            Sayfa {currentPage + 1} / {totalPages} • {blogs.length} blog
            gösteriliyor
          </p>
        </div>
      )}
    </div>
  );
};

export default Blogs;
