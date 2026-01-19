import HomeBorder from "../components/home/HomeBorder";
import HomeTables from "../components/home/HomeTables";
import HomeVideos from "../components/home/HomeVideos";
import LoadingScreen from "../components/LoadingScreen";
import { useAudioPlayer } from "../context/AudioPlayerContext";
import { useAboutContext } from "../hooks/useAboutContext";

const Home = () => {
  const { currentTrack } = useAudioPlayer();
  const { isLoading } = useAboutContext();

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <section className="flex flex-col">
      <div className="xl:px-5">
        <div
          className={`w-full pt-12 md:pt-5 ${
            currentTrack ? "pb-15" : ""
          } xl:pb-5 p-5 flex flex-col justify-between gap-3 overflow-hidden`}
        >
          <HomeTables />
          <HomeVideos />
          <HomeBorder />
        </div>
      </div>
    </section>
  );
};

export default Home;
