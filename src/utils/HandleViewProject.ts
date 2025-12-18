import type { NavigateFunction } from "react-router-dom";
import { generateSlug } from "./GenerateSlug";
import type { Project } from "../services/project/projectServices";
export type { NavigateFunction } from "react-router-dom";

export const handleViewProject = (
  project: Project,
  navigate: NavigateFunction,
): void => {
  const projectSlug = generateSlug(project.title);
  navigate(`/projects/${projectSlug}`, {
    state: { project },
  });
};
