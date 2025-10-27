import { useNavigate } from "react-router-dom";

interface HomeVideosCardProps {
  id: number;
  cardImage: string;
  cardTitle: string;
}

const HomeVideosCard = ({ id, cardImage, cardTitle }: HomeVideosCardProps) => {
  const navigate = useNavigate();

  const handleProjectView = (id: number) => {
    navigate(`/project/${id}`);
  };

  return (
    <li
      className="w-full h-full rounded-lg overflow-hidden border border-white/10 relative group cursor-pointer"
      onClick={() => handleProjectView(id)}
    >
      <div className="absolute inset-0 group-hover:bg-black/60 transition-all" />
      <div className="absolute top-0 left-0 p-4 hidden group-hover:flex transition-all">
        <h1 className="text-2xl">{cardTitle}</h1>
      </div>
      <img src={cardImage} alt="" className="w-full h-full object-cover" />
    </li>
  );
};

export default HomeVideosCard;
