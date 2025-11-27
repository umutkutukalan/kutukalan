import { useCallback, useState } from "react";
import { GetBlogByIdService } from "../../services/blog/blogServices";

export const useGetBlogById = () => {
  const [blog, setBlog] = useState("");
  const getBlogById = useCallback(async (blogId: number) => {
    try {
      const response = await GetBlogByIdService(blogId);
      setBlog(response);
      return response;
    } catch (error) {
      console.error("Error fetching blog by ID:", error);
      throw error;
    }
  }, []);

  return { blog, getBlogById };
};
