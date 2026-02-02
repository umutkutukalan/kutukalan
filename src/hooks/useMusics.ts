import { useState } from "react";
import { createMusicService } from "../services/musicServices";

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

  return { createMusic, loading, error };
};
