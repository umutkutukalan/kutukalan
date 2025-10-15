import HomeBorder from "../components/HomeBorder";
import HomeTables from "../components/HomeTables";
import Topics from "../components/topics/Topics";

const Home = () => {
  return (
    <div className="w-full h-screen p-5 flex flex-col justify-between gap-3">
      <HomeTables />
      <HomeBorder />
    </div>
  );
};

export default Home;
