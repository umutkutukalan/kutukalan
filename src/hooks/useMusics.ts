import { useState } from "react";
import { createMusicService } from "../services/musicServices";

export const useMusics = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | unknown>(null);
  const createMusic = async (musicData: FormData) => {
    try {
      setLoading(true);
      const response = await createMusicService(musicData);
      console.log("Music created successfully:", response.data);
    } catch (error) {
      console.error("Error creating music:", error);
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return { createMusic, loading, error };
};
