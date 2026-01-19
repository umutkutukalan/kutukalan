import { useState } from "react";
import { useMusics } from "../hooks/useMusics";
import ImageReader from "../utils/ImageReader";
import { FaUserPlus } from "react-icons/fa";
import { createMusicImg } from "../utils";
import { useAudioPlayer } from "../context/AudioPlayerContext";

const CreateMusic = () => {
  const { currentTrack } = useAudioPlayer();
  const { createMusic, loading } = useMusics();
  const [formData, setFormData] = useState({
    title: "",
    musicImg: "",
  });
  const [musicFile, setMusicFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string>("");
  const [addFeaturedArtist, setAddFeaturedArtist] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleMusicFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setMusicFile(file);
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    ImageReader.handleChange(e, (base64) => {
      setFormData((prev) => ({ ...prev, musicImg: base64 }));
      setImagePreview(base64);
    });
  };

  const handleSubmit = async () => {
    if (!musicFile || !formData.title || !formData.musicImg) {
      alert("Lütfen tüm alanları doldurun!");
      return;
    }

    const data = new FormData();
    data.append("file", musicFile); // Music file
    data.append("title", formData.title); // Title
    data.append("musicImg", formData.musicImg); // Base64 image

    await createMusic(data);
  };

  return (
    <div
      className={`xl:pb-5 pt-5 ${currentTrack ? "pb-20" : "pb-5"} flex items-center justify-center min-h-screen`}
    >
      <div className="w-full max-w-4xl flex items-center justify-center">
        <div className="flex items-start gap-5">
          <div className="flex flex-col gap-6 w-full">
            {/* Title Input */}
            <div className="flex flex-col gap-6 w-full">
              <div className="flex flex-col gap-2 w-full">
                <input
                  id="title"
                  name="title"
                  type="text"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="Beat Adı"
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>
              <div className="flex items-center gap-5">
                <input
                  id="producer"
                  name="producer"
                  type="text"
                  value={formData.producer}
                  onChange={handleChange}
                  placeholder="Producer"
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
                <input
                  id="album"
                  name="album"
                  type="text"
                  value={formData.album}
                  onChange={handleChange}
                  placeholder="Album"
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>
              <div className="flex flex-col gap-2 w-full">
                <div className="relative">
                  <input
                    id="featuredArtist"
                    name="featuredArtist"
                    type="text"
                    value={formData.featuredArtists}
                    onChange={handleChange}
                    placeholder="Featured Artist"
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer text-white/70 hover:text-white">
                    <FaUserPlus onClick={() => setAddFeaturedArtist(true)} />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex w-full items-center gap-5">
              <div className="relative w-full h-100 px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white overflow-hidden">
                <input
                  id="musicFile"
                  name="musicFile"
                  type="file"
                  accept="audio/*"
                  onChange={handleMusicFileChange}
                  className="file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-600 file:text-white hover:file:bg-blue-700 file:cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
                {musicFile && (
                  <div className="absolute inset-0 h-full w-full group">
                    <img src={createMusicImg} alt="Create Music" />
                    <div className="absolute inset-0 flex justify-center pt-2">
                      <p className="text-base text-green-400 mt-1">
                        {musicFile.name}
                      </p>
                    </div>
                    {/* Overlay ile Değiştir Butonu */}
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                      <label className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg cursor-pointer font-semibold transition-all">
                        Değiştir
                        <input
                          id="musicFile"
                          name="musicFile"
                          type="file"
                          accept="audio/*"
                          onChange={handleMusicFileChange}
                          className="hidden"
                        />
                      </label>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Submit Button */}
            <button
              onClick={handleSubmit}
              disabled={loading}
              className="w-full px-6 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Oluşturuluyor..." : "Beat Oluştur"}
            </button>
          </div>
          <div className="relative w-full h-100 px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white overflow-hidden z-10">
            <input
              id="musicImg"
              name="musicImg"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-purple-600 file:text-white hover:file:bg-purple-700 file:cursor-pointer focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
            />
            {imagePreview && (
              <div className="absolute inset-0 h-full w-full group">
                <img
                  src={imagePreview}
                  alt="Preview"
                  className="w-full h-full object-cover"
                />
                {/* Overlay ile Değiştir Butonu */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                  <label className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg cursor-pointer font-semibold transition-all">
                    Değiştir
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                      className="hidden"
                    />
                  </label>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateMusic;
