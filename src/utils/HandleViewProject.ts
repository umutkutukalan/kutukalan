import type { NavigateFunction } from "react-router-dom";
import { generateSlug } from "./GenerateSlug";
export type { NavigateFunction } from "react-router-dom";

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
  navigate(`/projects/${projectSlug}`, {
    state: { project },
  });
};
