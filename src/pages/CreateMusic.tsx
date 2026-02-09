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
    producer: "",
    album: "",
    featuredArtists: "",
    releaseDate: "",
  });
  const [musicFile, setMusicFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string>("");
  const [featuredArtistList, setFeaturedArtistList] = useState<string[]>([]);

  const handleAddFeaturedArtist = () => {
    if (!formData.featuredArtists.trim()) return;
    setFeaturedArtistList((prev) => [...prev, formData.featuredArtists.trim()]);
    setFormData((prev) => ({ ...prev, featuredArtists: "" }));
  };

  const handleRemoveFeaturedArtist = (index: number) => {
    setFeaturedArtistList((prev) => prev.filter((_, i) => i !== index));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    console.log("formData: ", formData);
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
    data.append("producer", formData.producer); // Producer
    data.append("album", formData.album); // Album
    featuredArtistList.forEach((artist) => {
      data.append("featuredArtists", artist); // Featured artists as multiple entries
    });
    data.append("releaseDate", formData.releaseDate); // Release date

    await createMusic(data);
  };

  return (
    <div
      className={`xl:pb-5 pt-15 lg:pt-5 px-8 md:px-0 ${currentTrack ? "pb-20" : "pb-5"} flex items-center justify-center min-h-screen`}
    >
      <div className="h-full max-w-4xl flex items-center justify-center overflow-hidden p-5">
        <div className="flex flex-col gap-6">
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
                  id="featuredArtists"
                  name="featuredArtists"
                  type="text"
                  value={formData.featuredArtists}
                  onChange={handleChange}
                  placeholder="Featured Artists"
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer text-white/70 hover:text-white">
                  <FaUserPlus onClick={handleAddFeaturedArtist} />
                </div>
              </div>
              {featuredArtistList.length > 0 && (
                <div className="flex flex-wrap gap-2 pt-2">
                  {featuredArtistList.map((artist, idx) => (
                    <span
                      key={`${artist}-${idx}`}
                      onClick={() => handleRemoveFeaturedArtist(idx)}
                      className="px-3 py-1 rounded-full bg-white/10 text-white text-xs border border-white/20 cursor-pointer hover:bg-white/20 transition-colors max-w-[180px] truncate"
                      title={artist}
                    >
                      {artist}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-5 place-items-center">
            <div className="relative w-40 sm:w-50 h-40 sm:h-50 px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white overflow-hidden">
              <label className="flex items-center justify-center w-full h-full cursor-pointer">
                <span className="px-4 py-2 rounded-lg bg-gray-600 hover:bg-gray-700 text-white font-semibold transition-all text-xs">
                  {musicFile ? musicFile.name : "Müzik Seç"}
                </span>
                <input
                  id="musicFile"
                  name="musicFile"
                  type="file"
                  accept="audio/*"
                  onChange={handleMusicFileChange}
                  className="hidden"
                />
              </label>
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
                    <label className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg cursor-pointer font-semibold transition-all text-xs">
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
            <div className="relative w-40 sm:w-50 h-40 sm:h-50 px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white overflow-hidden z-10">
              <label className="flex items-center justify-center w-full h-full cursor-pointer">
                <span className="px-4 py-2 rounded-lg bg-orange-500 hover:bg-orange-600 text-white font-semibold transition-all text-xs">
                  {imagePreview ? "Resim Değiştir" : "Resim Seç"}
                </span>
                <input
                  id="musicImg"
                  name="musicImg"
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                />
              </label>
              {imagePreview && (
                <div className="absolute inset-0 h-full w-full group">
                  <img
                    src={imagePreview}
                    alt="Preview"
                    className="w-full h-full object-cover"
                  />
                  {/* Overlay ile Değiştir Butonu */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                    <label className="px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg cursor-pointer font-semibold transition-all text-xs">
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

          {/* Release Date Input */}
          <div>
            <label className="block text-sm font-medium text-white/80 mb-2">
              Tasarım Tarihi
            </label>
            <input
              id="releaseDate"
              name="releaseDate"
              type="date"
              value={formData.releaseDate}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
            />
          </div>

          {/* Submit Button */}
          <button
            onClick={handleSubmit}
            disabled={loading}
            className="w-full px-6 py-2 bg-gray-600 hover:bg-gray-700 text-white font-semibold rounded-lg transform transition-all duration-200 disabled:opacity-50 cursor-pointer"
          >
            {loading ? "Oluşturuluyor..." : "Beat Oluştur"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateMusic;
