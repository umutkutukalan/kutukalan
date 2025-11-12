import type { Project } from "../../services/project/projectServices";
import ProjectCard from "./ProjectCard";

interface ProjectListProps {
  projects: Project[];
}

const ProjectList = ({ projects }: ProjectListProps) => {
  console.log("ProjectList projects ProjectList:", projects);
  return (
    <ul className="flex flex-col gap-5">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </ul>
  );
};

export default ProjectList;
