import HomeBorder from "../components/home/HomeBorder";
import HomeTables from "../components/home/HomeTables";
import HomeVideos from "../components/home/HomeVideos";
import { useAudioPlayer } from "../context/AudioPlayerContext";

const Home = () => {
  const { currentTrack } = useAudioPlayer();

  return (
    <section className="flex flex-col">
      <div className={`w-full ${ currentTrack ? "pb-15" : "h-screen"} xl:pb-5 p-5 flex flex-col justify-between gap-3 overflow-hidden`}>
        <HomeTables />
        <HomeVideos />
        <HomeBorder />
      </div>
    </section>
  );
};

export default Home;
