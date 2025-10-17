import HomeBorder from "../components/home/HomeBorder";
import HomeTables from "../components/home/HomeTables";
import HomeVideos from "../components/home/HomeVideos";

const Home = () => {
  return (
    <div className="w-full h-screen p-5 flex flex-col justify-between gap-3 overflow-hidden">
      <HomeTables />
      <HomeVideos />
      <HomeBorder />
    </div>
  );
};

export default Home;
