import axios from "axios";
import { API_URL } from "../config";

export const MusicDeleteService = async (musicId: number) => {
  try {
    await axios.delete(`${API_URL}/musics/${musicId}`, {
      withCredentials: true,
    });
  } catch (error) {
    console.error("Error deleting music:", error);
  }
};
