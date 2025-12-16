import type { Project } from "../../services/project/projectServices";
import ProjectCard from "./ProjectCard";

interface ProjectListProps {
  projects: Project[];
  onProjectDeleted?: () => void;
}

const ProjectList = ({ projects, onProjectDeleted }: ProjectListProps) => {
  return (
    <ul className="flex flex-col gap-5">
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          project={project}
          onProjectDeleted={onProjectDeleted}
        />
      ))}
    </ul>
  );
};

export default ProjectList;
