import {
  getPlaylistDetailsByIdService,
  getPlaylistDetailsService,
} from "../../services/settings/getPlaylistDetailsService";
import { useState } from "react";

export interface Playlist {
  id: number;
  title: string;
  description: string;
  playlistImage: string;
}

export const usePlaylistDetails = () => {
  const [allPlaylists, setAllPlaylists] = useState<Playlist[]>([]);
  const [playlist, setPlaylist] = useState<Playlist | null>(null);

  const getAllPlaylists = async () => {
    const response = await getPlaylistDetailsService();
    setAllPlaylists(response);
    return response;
  };

  const getPlaylistDetails = async (playlistId: number) => {
    const response = await getPlaylistDetailsByIdService(playlistId);
    setPlaylist(response);
    return response;
  };

  return { allPlaylists, playlist, getAllPlaylists, getPlaylistDetails };
};
