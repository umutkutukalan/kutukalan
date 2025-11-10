import {
  CreateProjectService,
  type ProjectData,
} from "../../services/project/projectServices";

export const useCreateProject = () => {
  const createProject = async (projectData: ProjectData) => {
    try {
      const response = await CreateProjectService(projectData);
      console.log("Project created:", response);
      return response;
    } catch (error) {
      console.error("Error in useCreateProject:", error);
    }
  };

  return { createProject };
};
