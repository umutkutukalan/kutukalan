import { useCallback, useEffect, useState } from "react";
import { GetBlogService, type Blog } from "../../services/blog/blogServices";

export const useGetBlogs = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  const getBlogs = useCallback(
    async (page = 0, isLoadMore = false) => {
      try {
        if (isLoadMore) {
          setIsLoadingMore(true);
        } else {
          setIsLoading(true);
        }

        const response = await GetBlogService(page, 5); // Cookie otomatik gönderilir

        if (isLoadMore) {
          // Spring Boot pagination: response.data.content içinde projeler var
          const newBlogs: Blog[] = response.data.content || response.data;

          setBlogs((prev) => {
            // Duplicate kontrolü - id'ye göre filtreleme
            const existingIds = new Set(prev.map((blog) => blog.id));
            const uniqueNewBlogs = newBlogs.filter(
              (blog) => !existingIds.has(blog.id)
            );

            return [...prev, ...uniqueNewBlogs];
          });
        } else {
          setBlogs(response.data.content || response.data);
        }

        // Spring Boot pagination bilgilerini kullan
        if (response.data.totalPages !== undefined) {
          setTotalPages(response.data.totalPages);
          setCurrentPage(response.data.number || page);
          // Son sayfada mıyız kontrol et
          setHasMore(response.data.number + 1 < response.data.totalPages);
        } else {
          // Fallback: Eğer Spring pagination bilgisi yoksa
          const contentLength = response.data.content
            ? response.data.content.length
            : response.data.length;
          setHasMore(contentLength === 5);
          setCurrentPage(page);
        }

        setIsLoading(false);
        setIsLoadingMore(false);
      } catch (error) {
        console.error("Projeler çekilirken hata oluştu:", error);
        setIsLoading(false);
        setIsLoadingMore(false);
      }
    },
    [] // Cookie-based auth, token dependency gerekmez
  );

  const loadMoreBlogs = useCallback(() => {
    if (!isLoadingMore && hasMore) {
      getBlogs(currentPage + 1, true);
    }
  }, [currentPage, hasMore, isLoadingMore, getBlogs]);

  // Component mount olduğunda ilk verileri çek
  useEffect(() => {
    getBlogs(0, false); // Cookie varsa otomatik çalışır
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Sadece mount'ta çalışsın

  return {
    getBlogs,
    blogs,
    isLoading,
    isLoadingMore,
    hasMore,
    loadMoreBlogs,
    currentPage,
    totalPages,
  };
};
