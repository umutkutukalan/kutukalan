import { useState } from "react";
import { MusicDeleteService } from "../../services/music/musicDeleteService";

export const useMusicDelete = () => {
  const [isLoading, setIsLoading] = useState(false);
  const deleteMusic = async (musicId: number) => {
    try {
      setIsLoading(true);
      await MusicDeleteService(musicId);
      window.location.reload();
    } catch (error) {
      console.error("Failed to delete music:", error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };
  return { deleteMusic, isLoading };
};
