import { useEffect, useRef, useState } from "react";
import { CiImageOff } from "react-icons/ci";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { usePlaylistDetails } from "../../hooks/settings/usePlaylistDetails";

const PlaylistSettings = () => {
  const {
    playlist,
    getPlaylistDetails,
    updatePlaylist,
    getLoading,
    updateLoading,
  } = usePlaylistDetails();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [playlistImage, setPlaylistImage] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  useEffect(() => {
    getPlaylistDetails(1);
  }, []);

  useEffect(() => {
    if (playlist) {
      setTitle(playlist.title ?? "");
      setDescription(playlist.description ?? "");
    }
  }, [playlist]);

  const isChanged =
    title !== (playlist?.title ?? "") ||
    description !== (playlist?.description ?? "") ||
    playlistImage !== "";

  const updateData = {
    title,
    description,
    playlistImage:
      playlistImage !== "" && playlistImage
        ? playlistImage
        : playlist?.playlistImage || null,
  };

  const handleUpdate = async () => {
    if (playlist?.id) {
      const response = await updatePlaylist(playlist.id, updateData);
      if (response) {
        window.location.reload();
      }
    }
  };

  if (updateLoading || getLoading) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <DotLottieReact
          className="w-20 h-20"
          src="https://lottie.host/c13e1dc0-f7ee-4254-835f-f023d14021b1/CsVgXfNTS6.lottie"
          loop
          autoplay
        />
      </div>
    );
  }

  return (
    <>
      <div
        className={`w-full border-b border-white/20 pb-5 flex flex-col md:flex-row items-start md:items-end sm:justify-between md:gap-20 ${
          isChanged ? "gap-5" : ""
        }`}
        onKeyDown={(e) => {
          if (e.key === "Enter" && isChanged) {
            e.preventDefault();
            handleUpdate();
          }
        }}
        tabIndex={-1}
      >
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          style={{ display: "none" }}
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (!file) return;

            const reader = new FileReader();
            reader.onloadend = () => {
              if (!reader.result) return;

              const base64 = reader.result as string;
              setPlaylistImage(base64); // Base64'ü state'e kaydet
            };
            reader.readAsDataURL(file);
            e.target.value = "";
          }}
        />
        <div className="w-full flex flex-col sm:flex-row items-start sm:items-end gap-4">
          <div
            className={`h-40 w-40 md:w-40 md:h-40 rounded-md overflow-hidden flex items-center justify-center flex-shrink-0 cursor-pointer hover:opacity-80 transition-all ${
              playlistImage !== "" ? "border-3 border-green-500" : ""
            }`}
            onClick={() => {
              if (fileInputRef.current) {
                fileInputRef.current.click(); // Finder açılır
              }
            }}
          >
            {playlistImage || playlist?.playlistImage ? (
              <img
                src={playlistImage || playlist?.playlistImage}
                alt="Playlist"
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-gray-400 flex items-center justify-center text-gray-500">
                <CiImageOff className="text-3xl" />
              </div>
            )}
          </div>
          <div className="w-full flex flex-col gap-2">
            <input
              type="text"
              value={title}
              className={`border border-white/20 rounded-lg p-2 focus:outline-none focus:ring-1 ${
                playlist?.title !== title ? "ring-1 ring-green-500" : ""
              } w-full bg-transparent text-white text-2xl font-semibold`}
              onChange={(e) => setTitle(e.target.value)}
            />

            <textarea
              value={description}
              className={`border border-white/20 rounded-lg p-2 focus:outline-none focus:ring-1 ${
                playlist?.description !== description
                  ? "ring-1 ring-green-500"
                  : ""
              } w-full bg-transparent text-white resize-none text-xs`}
              rows={2}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Açıklama ekle..."
            />
          </div>
        </div>
        <div className="w-full md:w-auto flex items-end justify-end">
          {isChanged && (
            <button
              className={`w-full text-xs px-3 py-2 rounded bg-blue-700 text-white cursor-pointer hover:bg-blue-600 transition-all`}
              onClick={handleUpdate}
            >
              Güncelle
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default PlaylistSettings;
