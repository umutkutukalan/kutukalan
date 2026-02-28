import { useEffect } from "react";
import { useMusicContext } from "../hooks/useMusicContext";
import { useInfiniteScroll } from "../hooks/useInfiniteScroll";
import MusicList from "../components/musics/MusicList";
import PlaylistDetail from "../components/musics/PlaylistDetail";

const Musics = () => {
  const { hasMore, isLoadingMore, loadMoreMusics, fetchMusics } =
    useMusicContext();

  useEffect(() => {
    fetchMusics(0, false);
  }, [fetchMusics]);

  useInfiniteScroll(loadMoreMusics, hasMore, isLoadingMore);

  return (
    <div className="pt-15 lg:pt-5 pb-5 px-0 sm:px-5 h-full">
      <PlaylistDetail />
      <MusicList />

      {isLoadingMore && (
        <div className="w-full flex justify-center items-center py-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
          <span className="text-gray-600 text-sm">
            Daha fazla müzik yükleniyor...
          </span>
        </div>
      )}
    </div>
  );
};

export default Musics;
