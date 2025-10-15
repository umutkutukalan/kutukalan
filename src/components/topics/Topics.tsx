import { useState } from "react";
import "./topics.css";
import { FaHeart, FaRocket, FaRocketchat, FaMusic } from "react-icons/fa";

const Topics = () => {
  const [activeId, setActiveId] = useState<number | null>(null);

  const topicsList = [
    { id: 1, name: "Society & Culture", icon: FaRocket },
    { id: 2, name: "Tech & Future", icon: FaRocketchat },
    { id: 3, name: "Music & Sounds", icon: FaMusic },
    { id: 4, name: "Comedy & Talks", icon: FaHeart },
  ];

  return (
    <div className="w-3/7">
      <div className="flex flex-col gap-2">
        <h2 className="text-lg">TRENDING TOPICS</h2>
        <div className="grid grid-cols-2 gap-2">
          {topicsList.map((topic) => {
            const Icon = topic.icon;
            return (
              <div
                key={topic.id}
                onClick={() => setActiveId(topic.id)}
                className={`topicsBox ${activeId === topic.id ? "active" : ""}`}
              >
                <Icon className="text-lg" />
                <h3 className="text-2xl">{topic.name}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Topics;
