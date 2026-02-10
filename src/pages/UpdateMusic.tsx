import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useMusics } from "../hooks/useMusics";
import type { Music } from "../context/AudioPlayerContext";
import MusicForm, {
  type SubmitData,
  type UpdateMusicPayload,
} from "../components/musics/MusicForm";
import { getMusicByIdService } from "../services/musicServices";

export const UpdateMusic = () => {
  const { id } = useParams();
  const { updateMusic, loading } = useMusics();
  const [music, setMusic] = useState<Music | null>(null);

  const mapMusicToPayload = (music: Music): UpdateMusicPayload => ({
    title: music.title ?? "",
    musicImg: music.musicImg ?? "",
    producer: music.producer ?? "",
    album: music.album ?? "",
    featuredArtists: music.featuredArtists ?? [],
    releaseDate: music.releaseDate ?? "",
  });

  useEffect(() => {
    getMusicByIdService(Number(id)).then((r) => setMusic(r.data));
  }, [id]);

  console.log("music: ", music);

  const handleUpdateSubmit = async (data: SubmitData) => {
    await updateMusic(data as UpdateMusicPayload, Number(id));
  };

  if (!music) return <div>Yükleniyor...</div>;

  return (
    <MusicForm
      mode="update"
      initialData={mapMusicToPayload(music)}
      loading={loading}
      onSubmit={handleUpdateSubmit}
    />
  );
};
