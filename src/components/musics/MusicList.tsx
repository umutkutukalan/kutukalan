import { nikegreen, oakley, redw, runwoman } from "../../utils";
import "./musicList.css";
import { FaClock } from "react-icons/fa";

const MusicList = () => {
  const musics = [
    {
      id: 1,
      title: "Sehzade : Born from Absence",
      duration: "3:45",
      image: nikegreen,
    },
    {
      id: 2,
      title: "Balqis ft Sehzade : Exclusive Talks",
      duration: "4:20",
      image: oakley,
    },
    {
      id: 3,
      title: "Morning Breakfast With Helena",
      duration: "2:58",
      image: redw,
    },
    {
      id: 4,
      title: "The Josephyne Alexandria Show",
      duration: "5:10",
      image: runwoman,
    },
  ];
  return (
    <div className="flex flex-col gap-4 text-white">
      <div className="w-full flex items-center justify-between">
        <h2 className="">MY QUEUE</h2>
        <button className="text-xs">View Alls</button>
      </div>
      <div className="flex flex-col gap-4">
        {musics.map((music) => (
          <div
            key={music.id}
            className="musicItem flex items-center justify-between"
          >
            <div className="flex items-center gap-2">
              <div className="w-12 h-12 rounded-lg overflow-hidden">
                <img
                  src={music.image}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-sm flex flex-col gap-1">
                <h3 className="font-medium">{music.title}</h3>
                <div className="flex items-center gap-1 text-gray-400 text-xs">
                  <FaClock />
                  <p>{music.duration}</p>
                </div>
              </div>
            </div>
            <button className="playButton">Play</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MusicList;
