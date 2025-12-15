import axios from "axios";
import { API_URL } from "../config";

export const deleteProjectService = async (projectId: number): Promise<void> => {
  try {
    await axios.delete(`${API_URL}/projects/${projectId}`);
    console.log("Project deleted successfully");
  } catch {
    throw new Error("Failed to delete project");
  }
};
