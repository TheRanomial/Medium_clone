import { Appbar } from "../components/Appbar";
import { Blogcard2 } from "../components/Blogcard2";
import { BlogSkeleton } from "../components/BlogSkeleton";
import { useBlogs, useName } from "../hooks";

export const Myblog = () => {
  const { loading, blogs } = useBlogs();
  const { name } = useName();
  const date=new Date();

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

  const myBlogs = blogs.filter((blog) => blog.author.name === name);

  return (
    <div>
      <Appbar />
      <div className="flex justify-center">
        <div>
          {myBlogs.map((blog) => (
            <Blogcard2
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
