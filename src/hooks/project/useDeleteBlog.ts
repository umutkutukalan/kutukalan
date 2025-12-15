import axios from "axios";
import { deleteProjectService } from "../../services/project/deleteBlogService";

export const useDeleteProject = (onSuccess?: () => void) => {
  const deleteProject = async (projectId: number) => {
    try {
      await deleteProjectService(projectId);
      if (onSuccess) {
        onSuccess();
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error(
          "Error deleting project:",
          error.response?.data || error.message
        );
      } else {
        console.error("Unexpected error:", error);
      }
    }
  };
  return { deleteProject };
};
