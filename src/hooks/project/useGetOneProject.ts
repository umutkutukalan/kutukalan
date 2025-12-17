import { useCallback, useState } from "react";
import { GetProjectByIdService } from "../../services/project/projectServices";

export const useGetProjectById = () => {
  const [project, setProject] = useState("");
  const getProjectById = useCallback(async (projectId: number) => {
    try {
      const response = await GetProjectByIdService(projectId);
      setProject(response);
      console.log("Fetched project:", response);
      return response;
    } catch (error) {
      console.error("Error fetching project by ID:", error);
      throw error;
    }
  }, []);

  return { project, getProjectById };
};
