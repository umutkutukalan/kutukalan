/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect } from "react";
import ProjectList from "../components/project/ProjectList";
import { useInfiniteScroll } from "../hooks/useInfiniteScroll";
import ProjectHeader from "../components/pageheader/ProjectHeader";
import { useAudioPlayer } from "../context/AudioPlayerContext";
import { useGetProjects } from "../hooks/project/useGetProjects";
import LoadingScreen from "../components/LoadingScreen";

const Projects = () => {
  const {
    projects,
    isLoading,
    isLoadingMore,
    hasMore,
    loadMoreProjects,
    getProjects,
    // currentPage,
    // totalPages,
  } = useGetProjects();

  const { currentTrack } = useAudioPlayer();

  // Infinite scroll hook'unu kullan
  useInfiniteScroll(loadMoreProjects, hasMore, isLoadingMore);

  useEffect(() => {
    // İlk yüklemede projeleri al
    getProjects(0, false);
  }, [getProjects]);

  if (isLoading) {
    return <LoadingScreen key={location.pathname}/>;
  } else if (projects.length === 0) {
    return (
      <div
        className={`pt-15 px-5 sm:px-10 xl:pb-5 ${currentTrack ? "pb-10" : ""}`}
      >
        <ProjectHeader />
        <div className="w-full h-full flex flex-col gap-1 mt-5">
          <h2 className="text-[clamp(1rem,1.6vw,2rem)] 3xl:text-[clamp(1.5rem,1.8vw,2rem)] 4xl:text-[3rem] font-semibold text-gray-300">
            Henüz proje bulunmamaktadır.
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
        <ProjectHeader />
        <ProjectList
          projects={projects}
          onProjectDeleted={() => getProjects(0, false)}
        />
      </div>

      {/* Veri Bittiğinde Gösterilecek Mesaj */}
      {!hasMore && projects.length > 0 && (
        <div className="flex justify-center items-center py-8">
          <p className="text-gray-500 text-[clamp(0.75rem,1.2vw,0.75rem)] 3xl:text-[clamp(1rem,1.3vw,1.125rem)] 4xl:text-[1.5rem]">Tüm projeler yüklendi.</p>
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
    </div>
  );
};

export default Projects;
