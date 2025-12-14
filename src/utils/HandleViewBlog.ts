import type { NavigateFunction } from "react-router-dom";
import { generateSlug } from "./GenerateSlug";
import type { Blog } from "../services/blog/blogServices";
export type { NavigateFunction } from "react-router-dom";

export interface Data {
  contentItems: unknown[];
  createdAt: string;
  description: string;
  id: number;
  mainImg: string;
  tags: string[];
  title: string;
  updatedAt: string;
}

export const handleViewBlog = (
  blog: Blog,
  navigate: NavigateFunction
): void => {
  const blogSlug = generateSlug(blog.title);
  navigate(`/blogs/${blogSlug}`, {
    state: { blog },
  });
};
