import { useEffect } from "react";
import { usePlaylistDetails } from "../../hooks/settings/usePlaylistDetails";
import { useMusicContext } from "../../hooks/useMusicContext";
import { useUser } from "../../hooks/useUserContext";
import { itstime } from "../../utils";

const PlaylistDetail = () => {
  const { musics } = useMusicContext();
  const { user } = useUser();
  const { playlist, getPlaylistDetails } = usePlaylistDetails();

  useEffect(() => {
    getPlaylistDetails(1);
  }, []);

  useEffect(() => {
    console.log("Playlist Details:", playlist);
  }, [playlist]);

  return (
    <div
      className={`w-auto flex flex-col md:flex-row items-center sm:items-start md:items-end gap-5 px-10 sm:rounded-tr-2xl relative py-5 overflow-hidden`}
    >
      <div className="sm:absolute h-full w-full bg-gradient-to-r from-black to-white/60"></div>
      <div className="sm:hidden absolute h-70 w-full bg-gradient-to-t from-white/20 to-black "></div>
      <div
        className="w-50 h-50 lg:w-60 lg:h-60 rounded-md overflow-hidden relative z-20 flex-shrink-0 md:mt-0 sm:mt-5 mt-0 md:mb-2"
        style={{ boxShadow: "3px 5px 10px 0px rgba(0, 0, 0, 0.4)" }}
      >
        <img
          src={playlist?.playlistImage || itstime}
          alt=""
          className="h-full w-full object-cover brightness-80 sm:brightness-60"
        />
      </div>
      <div className="flex flex-col gap-4 mb-2 sm:flex hidden z-20 md:mb-4">
        <div className="flex flex-col gap-3">
          <h1 className="text-2xl sm:text-5xl lg:text-6xl xl:text-5xl font-semibold">
            {playlist?.title}
          </h1>
          <p className="text-xs sm:w-100">{playlist?.description}</p>
        </div>
        <div className="flex items-center gap-1">
          <div className="flex items-center gap-1">
            <div className="w-6 h-6 rounded-full overflow-hidden border border-white/20">
              <img
                src={user?.profileImg}
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
            <p className="text-xs">
              {user?.firstName} {user?.lastName}
            </p>
          </div>
          <span className="text-xs">•</span>
          <div className="flex items-center gap-2">
            <p className="text-xs">{musics.length} müzik</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaylistDetail;
