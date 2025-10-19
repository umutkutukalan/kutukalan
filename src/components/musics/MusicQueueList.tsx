import { nikegreen, oakley, redw, runwoman } from "../../utils";
import "./musicList.css";
import { FaClock } from "react-icons/fa";

const MusicQueueList = () => {
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
        <h2 className="">MUZIKLER</h2>
        <button className="text-xs cursor-pointer">Tümünü Gör</button>
      </div>
      <div className="flex flex-col">
        {musics.map((music) => (
          <div
            key={music.id}
            className="musicItem flex items-center justify-between hover:bg-white/10 p-2 rounded-lg cursor-pointer"
          >
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg overflow-hidden">
                <img
                  src={music.image}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-sm flex flex-col gap-1">
                <h3 className="">{music.title}</h3>
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

export default MusicQueueList;
