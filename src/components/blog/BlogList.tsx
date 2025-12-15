import type { Blog } from "../../services/blog/blogServices";
import BlogCard from "./BlogCard";

interface BlogListProps {
  blogs: Blog[];
  onBlogDeleted?: () => void;
}

const BlogList = ({ blogs, onBlogDeleted }: BlogListProps) => {
  console.log("BlogList blogs BlogList:", blogs);
  return (
    <ul className="flex flex-col gap-5">
      {blogs.map((blog) => (
        <BlogCard key={blog.id} blog={blog} onBlogDeleted={onBlogDeleted} />
      ))}
    </ul>
  );
};

export default BlogList;
