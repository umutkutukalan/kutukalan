import { useState } from "react";
import { createMusicService, updateMusicService } from "../services/musicServices";
import type { UpdateMusicPayload } from "../components/musics/MusicForm";

export const useMusics = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | unknown>(null);

  const createMusic = async (musicData: FormData) => {
    try {
      setLoading(true);
      await createMusicService(musicData);
    } catch (error) {
      console.error("Error creating music:", error);
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const updateMusic = async (musicData: UpdateMusicPayload, musicId: number) => {
    try {
      setLoading(true);
      await updateMusicService(musicData, musicId);
    } catch (error) {
      console.error("Error updating music:", error);
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return { createMusic, updateMusic, loading, error };
};
