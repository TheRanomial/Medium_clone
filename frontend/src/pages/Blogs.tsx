import { Appbar } from "../components/Appbar";
import { Blogcard } from "../components/Blogcard";
import { BlogSkeleton } from "../components/BlogSkeleton";
import { useBlogs } from "../hooks";

export const Blogs = () => {
  const { loading, blogs } = useBlogs();
  const date = new Date();

  if (loading) {
    return (
      <div>
        <Appbar />
        <div className="flex justify-center">
          <div>
            <BlogSkeleton />
            <BlogSkeleton />
            <BlogSkeleton />
            <BlogSkeleton />
            <BlogSkeleton />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Appbar />
      <div className="flex justify-center">
        <div>
          {blogs.map((blog) => (
            <Blogcard
              id={blog.id}
              authorName={blog.author.name || "Anonymous"}
              key={blog.id}
              title={blog.title}
              content={blog.content}
              publishedDate={date.toDateString()}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
