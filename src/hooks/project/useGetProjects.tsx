import { useCallback, useEffect, useState } from "react";
import {
  GetProjectService,
  type Project,
} from "../../services/project/projectServices";

export const useGetProjects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  const getProjects = useCallback(
    async (page = 0, isLoadMore = false) => {
      try {
        if (isLoadMore) {
          setIsLoadingMore(true);
        } else {
          setIsLoading(true);
        }

        const response = await GetProjectService(page, 5); // Cookie otomatik gönderilir

        if (isLoadMore) {
          // Spring Boot pagination: response.data.content içinde projeler var
          const newProjects: Project[] = response.data.content || response.data;

          setProjects((prev) => {
            // Duplicate kontrolü - id'ye göre filtreleme
            const existingIds = new Set(prev.map((project) => project.id));
            const uniqueNewProjects = newProjects.filter(
              (project) => !existingIds.has(project.id)
            );

            return [...prev, ...uniqueNewProjects];
          });
        } else {
          setProjects(response.data.content || response.data);
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

  const loadMoreProjects = useCallback(() => {
    if (!isLoadingMore && hasMore) {
      getProjects(currentPage + 1, true);
    }
  }, [currentPage, hasMore, isLoadingMore, getProjects]);

  // Component mount olduğunda ilk verileri çek
  useEffect(() => {
    getProjects(0, false); // Cookie varsa otomatik çalışır
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Sadece mount'ta çalışsın

  return {
    getProjects,
    projects,
    isLoading,
    isLoadingMore,
    hasMore,
    loadMoreProjects,
    currentPage,
    totalPages,
  };
};
