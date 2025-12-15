import axios from "axios";
import { deleteBlogService } from "../../services/blog/deleteBlogService";

export const useDeleteBlog = (onSuccess?: () => void) => {
  const deleteBlog = async (blogId: number) => {
    try {
      await deleteBlogService(blogId);
      if (onSuccess) {
        onSuccess();
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error(
          "Error deleting blog:",
          error.response?.data || error.message
        );
      } else {
        console.error("Unexpected error:", error);
      }
    }
  };
  return { deleteBlog };
};
