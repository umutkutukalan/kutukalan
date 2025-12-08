/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect } from "react";
import ProjectList from "../components/project/ProjectList";
import { useGetProjects } from "../hooks/project/useGetProjects";
import { useInfiniteScroll } from "../hooks/useInfiniteScroll";
import ProjectHeader from "../components/pageheader/ProjectHeader";

const Projects = () => {
  const {
    projects,
    isLoading,
    isLoadingMore,
    hasMore,
    loadMoreProjects,
    getProjects,
    currentPage,
    totalPages,
  } = useGetProjects();

  // Infinite scroll hook'unu kullan
  useInfiniteScroll(loadMoreProjects, hasMore, isLoadingMore);

  useEffect(() => {
    // İlk yüklemede projeleri al
    getProjects(0, false);
  }, [getProjects]);

  if (isLoading) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  return (
    <div className="pb-8 pt-15 px-5 sm:px-10">
      <div className="flex flex-col gap-5">
        <ProjectHeader />
        <ProjectList projects={projects} />
      </div>

      {/* Veri Bittiğinde Gösterilecek Mesaj */}
      {!hasMore && projects.length > 0 && (
        <div className="flex justify-center items-center py-8">
          <p className="text-gray-500 text-xs">Tüm projeler yüklendi.</p>
        </div>
      )}

      {/* Loading Göstergesi */}
      {isLoadingMore && (
        <div className="flex justify-center items-center py-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
          <span className="ml-3 text-gray-600">
            Daha fazla proje yükleniyor...
          </span>
        </div>
      )}

      {/* Sayfa Bilgisi */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center py-4">
          <p className="text-sm text-gray-400">
            Sayfa {currentPage + 1} / {totalPages} • {projects.length} proje
            gösteriliyor
          </p>
        </div>
      )}
    </div>
  );
};

export default Projects;
