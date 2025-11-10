import { generateSlug } from "./GenerateSlug";
import { NavigateFunction } from "react-router-dom";

export interface Project {
  contentItems: unknown[];
  createdAt: string;
  description: string;
  githubUrl: string;
  id: number;
  liveUrl: string;
  mainImg: string;
  technologies: string[];
  title: string;
  updatedAt: string;
}

export const handleViewProject = (
  project: Project,
  navigate: NavigateFunction,
): void => {
  const projectSlug = generateSlug(project.title);
  navigate(`/projeler/${projectSlug}`, {
    state: { project },
  });
};
