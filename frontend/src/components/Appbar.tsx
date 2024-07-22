import { Link, useNavigate } from "react-router-dom";
import { Avatar } from "./Blogcard";
import { useName } from "../hooks";

export const Appbar = () => {
  const { name } = useName();
  const navigate = useNavigate();

  const handleSignout = () => {
    localStorage.removeItem("token");
    navigate("/signin");
  };

  return (
    <div className="border-b flex justify-between px-10 py-4">
      <Link to={"/blogs"} className="flex items-center cursor-pointer">
        <img src="/icon.svg" alt="Medium icon" className="h-8 w-8 mr-2" />
        <span className="text-xl font-semibold">Medium</span>
      </Link>
      <div className="flex items-center">
        <button
          type="button"
          onClick={handleSignout}
          className="mr-4 hover:font-bold hover:underline text-whitefocus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center"
        >
          Sign out
        </button>

        <Link to={`/myblogs`}>
          <button
            type="button"
            className="mr-4 text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center"
          >
            My Blogs
          </button>
        </Link>
        <Link to={`/publish`}>
          <button
            type="button"
            className="mr-4 text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center"
          >
            New
          </button>
        </Link>
        <Avatar size={"big"} name={name} />
      </div>
    </div>
  );
};
