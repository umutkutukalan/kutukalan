import { useGetProjects } from "../../hooks/project/useGetProjects";

const HomeVideos = () => {
  const { projects } = useGetProjects();

  return (
    <div className="w-full h-1/5 overflow-hidden rounded-lg">
      <ul className="w-full h-full grid grid-cols-2 gap-2">
        <li className="w-full h-full bg-gray-200 rounded-lg overflow-hidden">
          <img src="" alt="" className="w-full h-full object-cover"/>
        </li>
        <li className="w-full h-full bg-gray-200 rounded-lg overflow-hidden">
          <img src="" alt="" className="w-full h-full object-cover"/>
        </li>
      </ul>
    </div>
  );
};

export default HomeVideos;
