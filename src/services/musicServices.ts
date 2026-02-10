import axios from "axios";
import { API_URL } from "./config";
import type { UpdateMusicPayload } from "../components/musics/MusicForm";

export const createMusicService = async (musicData: FormData) => {
  try {
    const response = await axios.post(`${API_URL}/musics/upload`, musicData, {
      withCredentials: true, // HttpOnly cookie gönder
    });
    return response;
  } catch (error) {
    console.error("Müzik yüklenirken hata - services:", error);
    throw error; // Rethrow the error for further handling if needed
  }
};

export const updateMusicService = async (
  musicData: UpdateMusicPayload,
  musicId: number,
) => {
  try {
    const response = await axios.put(
      `${API_URL}/musics/update/${musicId}`,
      musicData,
      {
        withCredentials: true, // HttpOnly cookie gönder
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
    return response;
  } catch (error) {
    console.error("Müzik güncellenirken hata - services:", error);
    throw error; // Rethrow the error for further handling if needed
  }
};

export const getMusicByIdService = async (musicId: number) => {
  return axios.get(`${API_URL}/musics/${musicId}`, {
    withCredentials: true,
  });
};

export const getAllMusicsService = async (page = 0, size = 5) => {
  try {
    const response = await axios.get(
      `${API_URL}/musics?page=${page}&size=${size}&sort=createdAt,desc`,
      {
        withCredentials: true, // HttpOnly cookie gönder
      },
    );
    return response;
  } catch (error) {
    console.error("müzikler çekilirken hata - services:", error);
    throw error; // Rethrow the error for further handling if needed
  }
};
