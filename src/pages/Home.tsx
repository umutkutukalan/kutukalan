import HomeBorder from "../components/home/HomeBorder";
import HomeTables from "../components/home/HomeTables";
import HomeVideos from "../components/home/HomeVideos";
import { useAudioPlayer } from "../context/AudioPlayerContext";

const Home = () => {
  const { currentTrack } = useAudioPlayer();

  return (
    <section className="flex flex-col">
      <div className={`w-full ${ currentTrack ? "h-[calc(100vh-3rem)]" : "h-screen"} xl:h-screen p-5 flex flex-col justify-between gap-3 overflow-hidden`}>
        <HomeTables />
        <HomeVideos />
        <HomeBorder />
      </div>
    </section>
  );
};

export default Home;
