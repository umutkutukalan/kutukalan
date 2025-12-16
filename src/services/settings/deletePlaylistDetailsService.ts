import axios from "axios";
import { API_URL } from "../config";

export const deletePlaylistDetailsService = async (playlistId: number) => {
  try {
    await axios.delete(`${API_URL}/playlist-details/${playlistId}`);
    console.log("Playlist details deleted for id:", playlistId);
  } catch (error) {
    console.error("Error deleting playlist details:", error);
    throw error;
  }
};
