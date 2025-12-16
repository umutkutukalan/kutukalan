import { useEffect, useRef, useState } from "react";
import { usePlaylistDetails } from "../../hooks/settings/usePlaylistDetails";
import { CiImageOff } from "react-icons/ci";

const PlaylistSettings = () => {
  const { playlist, getPlaylistDetails } = usePlaylistDetails();
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

  const handleUpdate = async () => {
    if (playlist?.id) {
      const response = await (playlist.id,
      title,
      description,
      playlistImage !== "" && playlistImage
        ? playlistImage
        : playlist.playlistImage || null);
      if (response) {
        window.location.reload();
      }
    }
  };

  return (
    <>
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
            console.log("Playlist resmi base64 olarak kaydedildi");
          };
          reader.readAsDataURL(file);
          e.target.value = "";
        }}
      />
      <div
        className={`w-full border-b border-white/20 pb-5 flex flex-col md:flex-row items-start md:items-end sm:justify-between md:gap-30 ${
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
        <div className="flex flex-col sm:flex-row items-start sm:items-end gap-4">
          <div
            className="h-40 w-40 md:w-40 md:h-40 rounded-md border border-white/20 overflow-hidden flex items-center justify-center flex-shrink-0 cursor-pointer hover:opacity-80 transition-all"
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
          <div className="flex flex-col gap-1">
            <input
              type="text"
              value={title}
              className={`border border-white/20 rounded-lg p-2 focus:outline-none focus:ring-1 ${
                playlist?.title !== title ? "ring-1 ring-green-500" : ""
              } w-full bg-transparent text-white text-4xl font-semibold`}
              onChange={(e) => setTitle(e.target.value)}
            />

            <p className="text-xs text-gray-400 md:w-full">
              Her ritim bir duygunun yankısı, her beat kendi hikayesini
              fısıldar. Müzik, kelimelerle anlatamadığım şeyleri duyurmanın
              yolu.
            </p>
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
