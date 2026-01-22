import { useState } from "react";
import { useAudioPlayer } from "../context/AudioPlayerContext";
import ImageReader from "../utils/ImageReader";

const CreateMobilApp = () => {
  const { currentTrack } = useAudioPlayer();
  const [imagePreview, setImagePreview] = useState<string>("");
  const [logoPreview, setLogoPreview] = useState<string>("");
  const [formData, setFormData] = useState({
    logo: "",
    mainImg: "",
    status: "IN_PROGRESS",
  });

  const handleStatusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, status: e.target.value }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    ImageReader.handleChange(e, (base64) => {
      setFormData((prev) => ({ ...prev, mainImg: base64 }));
      setImagePreview(base64);
    });
  };

  const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    ImageReader.handleChange(e, (base64) => {
      setFormData((prev) => ({ ...prev, logo: base64 }));
      setLogoPreview(base64);
    });
  };

  return (
    <div
      className={`xl:pb-5 pt-15 lg:pt-5 px-8 md:px-0 ${currentTrack ? "pb-20" : "pb-5"} flex items-center justify-center h-screen`}
    >
      <div className="h-140 w-2xl flex items-center justify-center overflow-hidden p-5">
        <div className="h-full w-full flex flex-col gap-5">
          <div className="flex items-center gap-5 h-full w-full items-center">
            <div className="h-full w-110 border border-white/20 rounded-4xl overflow-hidden relative flex items-center justify-center">
              <label className="flex items-center justify-center w-full h-full cursor-pointer">
                <span className="px-4 py-2 rounded-lg bg-gray-600 hover:bg-orange-700 text-white font-semibold transition-all text-xs">
                  {imagePreview ? "Resim Değiştir" : "Resim Seç"}
                </span>
                <input
                  id="mainImg"
                  name="mainImg"
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                />
              </label>
              {imagePreview && (
                <div className="absolute inset-0 h-full w-full group flex items-center justify-center">
                  <img
                    src={imagePreview}
                    alt="Preview"
                    className="object-cover h-full w-full"
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
            <div className="h-full w-full border border-white/20 relative overflow-hidden rounded-3xl">
              <form action="" className="h-full w-full">
                <div className="flex flex-col h-full w-full">
                  <div className="w-full overflow-hidden h-100 relative items-center justify-center border-b border-white/20 flex">
                    <label className="flex items-center justify-center w-full h-full cursor-pointer">
                      {!logoPreview && (
                        <span className="px-4 py-2 rounded-lg bg-gray-600 hover:bg-orange-700 text-white font-semibold transition-all text-xs">
                          {logoPreview ? "Resim Değiştir" : "Resim Seç"}
                        </span>
                      )}
                      <input
                        id="logo"
                        name="logo"
                        type="file"
                        accept="image/*"
                        onChange={handleLogoChange}
                        className="hidden"
                      />
                    </label>
                    {logoPreview && (
                      <div className="absolute inset-0 h-full w-full group flex items-center justify-center border border-white/20">
                        <img
                          src={logoPreview}
                          alt="Preview"
                          className="object-cover max-w-40"
                        />
                        {/* Overlay ile Değiştir Butonu */}
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                          <label className="px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg cursor-pointer font-semibold transition-all text-xs">
                            Değiştir
                            <input
                              type="file"
                              accept="image/*"
                              onChange={handleLogoChange}
                              className="hidden"
                            />
                          </label>
                        </div>
                      </div>
                    )}
                  </div>
                  <ul className="h-full w-full flex flex-col">
                    <li className="w-full h-full border-b border-white/10 flex items-center justify-center cursor-pointer">
                      <input
                        type="radio"
                        name="status"
                        id="completed"
                        value="COMPLETED"
                        checked={formData.status === "COMPLETED"}
                        onChange={handleStatusChange}
                        className="hidden"
                      />
                      <label
                        htmlFor="completed"
                        className={`w-full h-full flex items-center justify-center text-sm cursor-pointer ${formData.status === "COMPLETED" ? "bg-green-600" : ""}`}
                      >
                        Tamamlandı
                      </label>
                    </li>
                    <li className="w-full h-full border-b border-white/10 flex items-center justify-center cursor-pointer">
                      <input
                        type="radio"
                        name="status"
                        id="in-progress"
                        value="IN_PROGRESS"
                        checked={formData.status === "IN_PROGRESS"}
                        onChange={handleStatusChange}
                        className="hidden"
                      />
                      <label
                        htmlFor="in-progress"
                        className={`w-full h-full flex items-center justify-center text-sm cursor-pointer ${formData.status === "IN_PROGRESS" ? "bg-yellow-600" : ""}`}
                      >
                        Devam Ediyor
                      </label>
                    </li>
                    <li className="w-full h-full border-b border-white/10 flex items-center justify-center cursor-pointer">
                      <input
                        type="radio"
                        name="status"
                        id="planned"
                        value="PLANNED"
                        checked={formData.status === "PLANNED"}
                        onChange={handleStatusChange}
                        className="hidden"
                      />
                      <label
                        htmlFor="planned"
                        className={`w-full h-full flex items-center justify-center text-sm cursor-pointer ${formData.status === "PLANNED" ? "bg-blue-600" : ""}`}
                      >
                        Planlanıyor
                      </label>
                    </li>
                  </ul>
                </div>
              </form>
            </div>
          </div>
          <button className="py-4 text-center bg-[#2c2c2c] hover:bg-[#1a1a1a] text-white text-sm transition-all w-full cursor-pointer rounded-xl">
            Uygulamayı Oluştur
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateMobilApp;
