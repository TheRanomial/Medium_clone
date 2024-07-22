import { Blog } from "../hooks";
import { Appbar } from "./Appbar";
import { Avatar } from "./Blogcard";

export const FullBlog = ({ blog }: { blog: Blog }) => {
  const date = new Date();
  return (
    <div>
      <Appbar />
      <div className="flex justify-center">
        <div className="grid grid-cols-12 px-10 w-full pt-200 max-w-screen-xl pt-12">
          <div className="col-span-8">
            <div className="text-5xl font-extrabold">{blog.title}</div>
            <div className="text-slate-500 pt-2">Posted on {date.toDateString()}</div>
            <div className="pt-4">{blog.content}</div>
          </div>
          <div className="col-span-4 pl-14 border-l border-gray-200">
            <div className="text-black text-lg font-semibold ">Author</div>
            <div className="flex w-full mt-4">
              <div className="pr-4 flex flex-col justify-center">
                <Avatar size="big" name={blog.author.name || "Anonymous"} />
              </div>
              <div>
                <div className="text-xl font-bold">
                  {blog.author.name || "Anonymous"}
                </div>
                <div className="pt-2 text-slate-500">
                  Bridging the gap between you and new
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
