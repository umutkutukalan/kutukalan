import {
  CreateBlogService,
  type BlogData,
} from "../../services/blog/blogServices";

export const useCreateBlog = () => {
  const createBlog = async (blogData: BlogData) => {
    try {
      const response = await CreateBlogService(blogData);
      console.log("Blog created:", response);
      return response;
    } catch (error) {
      console.error("Error in useCreateBlog:", error);
    }
  };

  return { createBlog };
};
