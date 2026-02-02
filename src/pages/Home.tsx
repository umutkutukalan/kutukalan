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
    return <LoadingScreen key={location.pathname} />;
  }

  return (
    <section className="flex flex-col h-full">
      <div className="w-full h-full overflow-y-auto hide-scrollbar">
        <div
          className={`w-full pt-12 lg:pt-5 ${
            currentTrack ? "pb-15" : ""
          } xl:pb-5 p-4 flex flex-col justify-between gap-3 overflow-hidden`}
        >
          <HomeTables />
          <HomeVideos />
          <HomeBorder />
          {/* <div
            className="xl:h-140 lg:h-120 sm:h-100 h-60 w-full overflow-hidden
          "
          >
            <img src={sahnesen} alt="" className="w-full h-full object-cover" />
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Home;
