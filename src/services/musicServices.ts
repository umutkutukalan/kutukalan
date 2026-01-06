import axios from "axios";
import { API_URL } from "./config";

export const createMusicService = async (musicData: FormData) => {
  try {
    const response = await axios.post(`${API_URL}/musics/upload`, musicData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      withCredentials: true, // HttpOnly cookie gönder
    });
    return response;
  } catch (error) {
    console.error("Müzik yüklenirken hata - services:", error);
    throw error; // Rethrow the error for further handling if needed
  }
};

export const getAllMusicsService = async (page = 0, size = 5) => {
  try {
    const response = await axios.get(
      `${API_URL}/musics?page=${page}&size=${size}&sort=createdAt,desc`,
      {
        withCredentials: true, // HttpOnly cookie gönder
      }
    );
    // console.log("Müzikler çekildi:", response.data); // Debug için kaldırıldı
    return response;
  } catch (error) {
    console.error("müzikler çekilirken hata - services:", error);
    throw error; // Rethrow the error for further handling if needed
  }
};
