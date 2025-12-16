import axios from "axios";
import { API_URL } from "../config";

export interface PlaylistData {
  title: string;
  description: string;
  playlistImage: string | null;
}

export const postPlaylistDetailsService = async (
  playlistData: PlaylistData
) => {
  try {
    const response = await axios.post(
      `${API_URL}/playlist-details`,
      playlistData
    );
    console.log("Playlist details posted:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error posting playlist details:", error);
    throw error;
  }
};
