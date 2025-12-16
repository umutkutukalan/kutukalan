import axios from "axios";
import { API_URL } from "../config";

export const getPlaylistDetailsByIdService = async (playlistId: number) => {
  try {
    const response = await axios.get(
      `${API_URL}/playlist-details/${playlistId}`
    );
    console.log("Playlist details by id fetched:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching playlist details:", error);
    throw error;
  }
};

export const getPlaylistDetailsService = async () => {
  try {
    const response = await axios.get(`${API_URL}/playlist-details`);
    console.log("Playlist details fetched:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching playlist details:", error);
    throw error;
  }
};
