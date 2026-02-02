import axios from "axios";
import { API_URL } from "../config";

export const getPlaylistDetailsByIdService = async (playlistId: number) => {
  try {
    const response = await axios.get(
      `${API_URL}/playlist-details/${playlistId}`,
      {
        withCredentials: true,
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching playlist details:", error);
    throw error;
  }
};

export const getPlaylistDetailsService = async () => {
  try {
    const response = await axios.get(`${API_URL}/playlist-details`, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching playlist details:", error);
    throw error;
  }
};
