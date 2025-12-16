import axios from "axios";
import { API_URL } from "../config";

export interface PlaylistData {
  title: string;
  description: string;
  playlistImage: string | null;
}

export const updatePlaylistDetailsService = async (
  playlistId: number,
  playlistData: PlaylistData
) => {
  try {
    const response = await axios.put(
      `${API_URL}/playlist-details/${playlistId}`,
      playlistData
    );
    console.log("Playlist details updated:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error updating playlist details:", error);
    throw error;
  }
};
