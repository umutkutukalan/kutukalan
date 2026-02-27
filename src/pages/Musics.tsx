import { useEffect } from "react";
import { useMusicContext } from "../hooks/useMusicContext";
import { useInfiniteScroll } from "../hooks/useInfiniteScroll";
import MusicList from "../components/musics/MusicList";
import PlaylistDetail from "../components/musics/PlaylistDetail";

const Musics = () => {
  const { musics, hasMore, isLoadingMore, loadMoreMusics, fetchMusics } =
    useMusicContext();

  useEffect(() => {
    fetchMusics(0, false);
  }, [fetchMusics]);

  useInfiniteScroll(loadMoreMusics, hasMore, isLoadingMore);

  return (
    <div className="pt-15 lg:pt-5 pb-5 px-0 sm:px-5 h-full">
      <PlaylistDetail />
      <MusicList />

      {!hasMore && musics.length > 0 && (
        <div className="flex justify-center items-center py-8">
          <p className="text-gray-500 text-[clamp(0.75rem,1.2vw,0.75rem)] 3xl:text-[clamp(1rem,1.3vw,1.125rem)] 4xl:text-[1.5rem]">
            Tüm müzikler yüklendi.
          </p>
        </div>
      )}

      {isLoadingMore && (
        <div className="flex justify-center items-center py-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
          <span className="ml-3 text-gray-600">Daha fazla müzik yükleniyor...</span>
        </div>
      )}
    </div>
  );
};

export default Musics;
