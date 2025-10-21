import { useState } from "react";
import { useMusics } from "../hooks/useMusics";

const CreateMusic = () => {
  const { createMusic, loading } = useMusics();
  const [formData, setFormData] = useState({
    title: "",
    musicImg: "",
  });
  const [musicFile, setMusicFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string>("");

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
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        setFormData((prev) => ({
          ...prev,
          musicImg: base64String,
        }));
        setImagePreview(base64String);
      };
      reader.readAsDataURL(file);
    }
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
    <div className="w-full h-screen p-8 flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 overflow-y-auto">
      <div className="w-full max-w-2xl bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-8 border border-white/20">
        <h1 className="text-4xl font-bold text-white mb-8 text-center">
          Create Music
        </h1>

        <div className="space-y-6">
          {/* Title Input */}
          <div className="flex flex-col gap-2">
            <label htmlFor="title" className="text-white text-sm font-medium">
              Music Title
            </label>
            <input
              id="title"
              name="title"
              type="text"
              value={formData.title}
              onChange={handleChange}
              placeholder="Enter music title..."
              className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            />
          </div>

          {/* Music File Upload */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="musicFile"
              className="text-white text-sm font-medium"
            >
              Upload Music File
            </label>
            <input
              id="musicFile"
              name="musicFile"
              type="file"
              accept="audio/*"
              onChange={handleMusicFileChange}
              className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-600 file:text-white hover:file:bg-blue-700 file:cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            />
            {musicFile && (
              <p className="text-sm text-green-400 mt-1">
                Selected: {musicFile.name}
              </p>
            )}
          </div>

          {/* Music Image Upload (Base64) */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="musicImg"
              className="text-white text-sm font-medium"
            >
              Upload Music Cover Image
            </label>
            <input
              id="musicImg"
              name="musicImg"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-purple-600 file:text-white hover:file:bg-purple-700 file:cursor-pointer focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
            />
            {imagePreview && (
              <div className="mt-2 w-full h-48 rounded-lg overflow-hidden border border-white/20">
                <img
                  src={imagePreview}
                  alt="Preview"
                  className="w-full h-full object-cover"
                />
              </div>
            )}
          </div>

          {/* Submit Button */}
          <button
            onClick={handleSubmit}
            disabled={loading}
            className="w-full mt-8 px-6 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Creating..." : "Create Music"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateMusic;
