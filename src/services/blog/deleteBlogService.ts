import axios from "axios";
import { API_URL } from "../config";

export const deleteBlogService = async (blogId: number): Promise<void> => {
  try {
    await axios.delete(`${API_URL}/blogs/${blogId}`, {
      withCredentials: true,
    });
  } catch {
    throw new Error("Failed to delete blog");
  }
};
