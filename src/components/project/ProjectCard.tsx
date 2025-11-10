import type { Project } from "../../services/project/projectServices";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  console.log("ProjectCard project:", project.id, project);
  return <div>ProjectCard</div>;
};

export default ProjectCard;
