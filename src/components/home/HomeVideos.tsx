import { discovery, iphonechip, sahnesen } from "../../utils";
import HomeVideosCard from "../ui/HomeVideosCard";

const HomeVideos = () => {
  const projects = [
    {
      id: 1,
      image: sahnesen,
      title: "Sahnesen",
    },
    {
      id: 2,
      image: iphonechip,
      title: "iPhone Chip",
    },
    {
      id: 3,
      image: discovery,
      title: "Discovery",
    },
  ];

  return (
    <div className="w-full h-1/5 overflow-hidden rounded-lg">
      <ul className="w-full h-full grid grid-cols-3 gap-2">
        {projects.map((project) => (
          <HomeVideosCard
            key={project.title}
            id={project.id}
            cardImage={project.image}
            cardTitle={project.title}
          />
        ))}
      </ul>
    </div>
  );
};

export default HomeVideos;
