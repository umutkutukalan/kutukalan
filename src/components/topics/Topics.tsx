import { useState } from "react";
import "./topics.css";
import { FaRocket } from "react-icons/fa";
import { BsMusicNote } from "react-icons/bs";
import { BsMicFill } from "react-icons/bs";
import { BsFileEarmarkTextFill } from "react-icons/bs";

const Topics = () => {
  const [activeId, setActiveId] = useState<number | null>(null);

  const topicsList = [
    { id: 1, name: "Yazılım Projeleri", icon: FaRocket },
    { id: 2, name: "Bloglar & Araştırmalar", icon: BsFileEarmarkTextFill },
    { id: 3, name: "Beat & Müzik", icon: BsMusicNote },
    { id: 4, name: "Podcast & Sohbetler", icon: BsMicFill },
  ];

  return (
    <div className="w-3/7">
      <div className="flex flex-col gap-2">
        <h2 className="text-lg">BASLIKLAR</h2>
        <div className="grid grid-cols-2 gap-2">
          {topicsList.map((topic) => {
            const Icon = topic.icon;
            return (
              <div
                key={topic.id}
                onClick={() => setActiveId(topic.id)}
                className={`topicsBox ${activeId === topic.id ? "active" : ""}`}
              >
                <Icon className="text-xl" />
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
