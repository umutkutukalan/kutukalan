import { useState } from "react";
import { useAbout } from "../hooks/useAbout";

export interface FormDataType {
  paragraph: string;
  aboutImage: string;
  orderIdx: number;
}

const Admin = () => {
  const [formData, setFormData] = useState<FormDataType>({
    paragraph: "",
    aboutImage: "",
    orderIdx: 0,
  });
  const [imagePreview, setImagePreview] = useState<string>("");
  const { createAbout } = useAbout();

  const handleSubmit = () => {
    createAbout(formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        setFormData((prev) => ({
          ...prev,
          aboutImage: base64String,
        }));
        setImagePreview(base64String);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="w-full h-screen p-8 flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="w-full max-w-2xl bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-8 border border-white/20">
        <h1 className="text-4xl font-bold text-white mb-8 text-center">
          Admin Panel
        </h1>

        <div className="space-y-6">
          {/* Paragraph Input */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="paragraph"
              className="text-white text-sm font-medium"
            >
              Paragraph
            </label>
            <textarea
              id="paragraph"
              name="paragraph"
              value={formData.paragraph}
              onChange={handleChange}
              placeholder="Enter your paragraph here..."
              rows={4}
              className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
            />
          </div>

          {/* Image Upload Input */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="aboutImage"
              className="text-white text-sm font-medium"
            >
              Upload Image
            </label>
            <input
              id="aboutImage"
              name="aboutImage"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-600 file:text-white hover:file:bg-blue-700 file:cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
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

          {/* Order Index Input */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="orderIdx"
              className="text-white text-sm font-medium"
            >
              Order Index
            </label>
            <input
              id="orderIdx"
              name="orderIdx"
              type="number"
              value={formData.orderIdx}
              onChange={handleChange}
              placeholder="0"
              className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            />
          </div>

          {/* Submit Button */}
          <button
            onClick={handleSubmit}
            className="w-full mt-8 px-6 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Admin;
