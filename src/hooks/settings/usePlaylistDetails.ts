import {
  getPlaylistDetailsByIdService,
  getPlaylistDetailsService,
} from "../../services/settings/getPlaylistDetailsService";
import { useState } from "react";
import { updatePlaylistDetailsService } from "../../services/settings/updatePlaylistDetailsService copy";

export interface Playlist {
  id: number;
  user: {
    firstName: string;
    lastName: string;
    username: string;
    profileImg: string;
  };
  title: string;
  description: string;
  playlistImage?: string;
}

export const usePlaylistDetails = () => {
  const [allPlaylists, setAllPlaylists] = useState<Playlist[]>([]);
  const [playlist, setPlaylist] = useState<Playlist | null>(null);
  const [getLoading, setGetLoading] = useState(false);
  const [updateLoading, setUpdateLoading] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const getAllPlaylists = async () => {
    setGetLoading(true);
    const response = await getPlaylistDetailsService();
    setAllPlaylists(response);
    setGetLoading(false);
    return response;
  };

  const getPlaylistDetails = async (playlistId: number) => {
    try {
      setIsLoading(true);
      const response = await getPlaylistDetailsByIdService(playlistId);
      setPlaylist(response);
      return response;
    } catch (error) {
      console.error("Error fetching playlist details:", error);
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  const updatePlaylist = async (
    playlistId: number,
    playlistData: {
      title: string;
      description: string;
      playlistImage: string | null;
    }
  ) => {
    try {
      setUpdateLoading(true);
      const response = await updatePlaylistDetailsService(
        playlistId,
        playlistData
      );
      return response;
    } catch (error) {
      console.error("Error updating playlist:", error);
      return null;
    } finally {
      setUpdateLoading(false);
    }
  };

  return {
    allPlaylists,
    playlist,
    getAllPlaylists,
    getPlaylistDetails,
    updatePlaylist,
    getLoading,
    updateLoading,
    isLoading,
  };
};
