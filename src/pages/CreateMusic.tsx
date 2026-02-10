import MusicForm, { type SubmitData } from "../components/musics/MusicForm";
import { useMusics } from "../hooks/useMusics";

const CreateMusic = () => {
  const { createMusic, loading } = useMusics();

  const handleCreateSubmit = async (data: SubmitData) => {
    await createMusic(data as FormData);
  };

  return (
    <MusicForm mode="create" loading={loading} onSubmit={handleCreateSubmit} />
  );
};

export default CreateMusic;
