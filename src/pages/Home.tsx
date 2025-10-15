import HomeBorder from "../components/HomeBorder";
import Topics from "../components/topics/Topics";

const Home = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-between gap-3 p-5">
      <HomeBorder />
      <div className="flex items-center justify-between">
        <Topics />
      </div>
    </div>
  );
};

export default Home;
