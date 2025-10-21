import { BsThreeDotsVertical } from "react-icons/bs";
import { FaPause, FaPlay } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";
import { useMusicContext } from "../../hooks/useMusicContext";
import { useFormatDate } from "../../hooks/useFormatDate";

const MusicList = () => {
  const { musics } = useMusicContext();
  const { formatDate } = useFormatDate();
  console.log(musics);

  const isPlaying = false;
  const user = {
    role: "USER", // or "USER"
  };

  return (
    <div className="overflow-hidden">
      <div className="w-full grid grid-cols-[3fr_2fr] py-1 px-10 text-xs text-gray-300 border-b border-white/10">
        <div className="flex items-center gap-5 pl-5">
          <div className="flex items-center">
            <div className="flex items-center gap-1">
              <span>#</span>
              <span>Başlık</span>
            </div>
          </div>
        </div>
        <div
          className={`w-full px-5 py-2 grid ${
            user?.role == "ADMIN"
              ? "grid-cols-[3fr_2fr_0fr]"
              : "grid-cols-[2fr_0fr]"
          } items-center`}
        >
          <span className="text-left">Tarih</span>
          <span className="text-left">Süre</span>
          {user?.role === "ADMIN" && (
            <span className="text-left">
              <BsThreeDotsVertical />
            </span>
          )}
        </div>
      </div>
      <div className="px-10 w-full py-5">
        <ul className="flex flex-col w-full">
          {musics.map((music, index) => (
            <li
              key={music.id}
              className="w-full h-[70px] rounded-md grid grid-cols-[3fr_2fr] hover:bg-[#424242b3] items-center group"
            >
              <div className="flex items-center gap-5">
                <div className="flex items-center">
                  <div className="relative px-6 flex items-center justify-center w-10 h-10">
                    {isPlaying ? (
                      <div>a</div>
                    ) : (
                      //   <DotLottieReact
                      //     className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-6 group-hover:opacity-0 z-10"
                      //     src="https://lottie.host/81713459-6e3e-433e-b2e5-1ef0bc8e5e87/48XmKJpqK7.lottie"
                      //     loop
                      //     autoplay
                      //   />
                      <p className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:opacity-0 z-10">
                        {index + 1}
                      </p>
                    )}
                    <div className="absolute flex items-center justify-center w-full h-full opacity-0 group-hover:opacity-100 z-20 text-sm">
                      {isPlaying ? (
                        <FaPause className="cursor-pointer" />
                      ) : (
                        <FaPlay className="cursor-pointer" />
                      )}
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-lg overflow-hidden relative">
                      <img
                        src={music.musicImg}
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex flex-col">
                      <h1 className="text-sm">{music.title}</h1>
                      <p className="text-xs text-gray-500">kutukalan</p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={`w-full px-5 py-2 grid ${
                  user?.role == "ADMIN"
                    ? "grid-cols-[3fr_2fr_0fr]"
                    : "grid-cols-[2fr_0fr]"
                } items-center`}
              >
                <p className="text-xs text-left">
                  {formatDate(music.createdAt as string)}
                </p>
                <p className="text-xs text-left">3.22</p>
                {user && user.role === "ADMIN" && (
                  <RiDeleteBinLine className="text-xs cursor-pointer text-red-300 hover:text-red-500 transition-all duration-100" />
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MusicList;
