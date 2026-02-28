import { useEffect } from "react";
import { useMusicContext } from "../../hooks/useMusicContext";
import { usePlaylistDetails } from "../../hooks/settings/usePlaylistDetails";
import LoadingScreen from "../LoadingScreen";

const PlaylistDetail = () => {
  const { totalMusics } = useMusicContext();
  const { playlist, getPlaylistDetails, isLoading } = usePlaylistDetails();

  useEffect(() => {
    getPlaylistDetails(1);
  }, []);

  useEffect(() => {}, [playlist]);

  if (isLoading) {
    return <LoadingScreen key={location.pathname} />;
  }

  return (
    <div
      className={`w-auto flex flex-col sm:flex-row items-center sm:items-end gap-5 px-10 sm:rounded-tr-2xl relative py-5 overflow-hidden`}
    >
      <div className="sm:absolute h-full w-full bg-gradient-to-r from-black to-white/60"></div>
      <div className="sm:hidden absolute h-70 w-full bg-gradient-to-t from-white/20 to-black "></div>
      <div
        className="w-50 h-50 lg:w-60 lg:h-60 2xl:w-100 2xl:h-100 rounded-md overflow-hidden relative z-20 flex-shrink-0 md:mt-0 sm:mt-5 mt-0 md:mb-2"
        style={{ boxShadow: "3px 5px 10px 0px rgba(0, 0, 0, 0.4)" }}
      >
        <img
          src={playlist?.playlistImage}
          alt=""
          className="h-full w-full object-cover brightness-80 sm:brightness-60"
        />
      </div>
      <div className="flex flex-col gap-4 mb-2 sm:flex hidden z-20 md:mb-4">
        <div className="flex flex-col">
          <h1 className="text-[clamp(2.5rem,4vw,3.25rem)] 3xl:text-[clamp(3rem,4vw,4rem)] 4xl:text-[clamp(4rem,4vw,5rem)] font-semibold">
            {playlist?.title}
          </h1>
          <p className="text-[clamp(0.75rem,2vw,0.75rem)] 3xl:text-[clamp(1rem,4vw,1.2rem)] 4xl:text-[clamp(1rem,4vw,1.5rem)]">
            {playlist?.description}
          </p>
        </div>
        <div className="flex items-center gap-1">
          <div className="flex items-center gap-1">
            <div className="w-6 h-6 3xl:w-10 3xl:h-10 4xl:w-12 4xl:h-12 rounded-full overflow-hidden border border-white/20">
              <img
                src={playlist?.user.profileImg}
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
            <p className="text-xs 3xl:text-2xl 4xl:text-2xl">
              {playlist?.user.firstName} {playlist?.user.lastName}
            </p>
          </div>
          <span className="text-xs 3xl:text-2xl 4xl:text-2xl">•</span>
          <div className="flex items-center gap-2">
            <p className="text-xs 3xl:text-2xl 4xl:text-2xl">
              {totalMusics} müzik
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaylistDetail;
