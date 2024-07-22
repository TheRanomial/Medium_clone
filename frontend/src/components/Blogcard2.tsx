import { Link, useNavigate } from "react-router-dom";
import { useName } from "../hooks";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { TextField, Button } from "@mui/material";
import Modal from "@mui/material/Modal";

interface BlogCardProps {
  title: string;
  content: string;
  publishedDate: string;
  authorName: string;
  id: number;
}

export const Blogcard2 = ({
  id,
  authorName,
  title,
  content,
  publishedDate,
}: BlogCardProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState("");
  const [editContent, setEditContent] = useState("");
  const { name } = useName();
  const useridstring = id.toString();
  const navigate = useNavigate();

  async function deleteBlog() {
    await axios.delete(`${BACKEND_URL}/api/v1/blog/deleting/${useridstring}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    navigate("/blogs");
  }

  const handleSubmit = async () => {
    const updatedBlogData = {
      id: id,
      title: editTitle,
      content: editContent,
    };

    try {
      await axios.put(`${BACKEND_URL}/api/v1/blog`, updatedBlogData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      navigate("/blogs");
    } catch (e) {
      alert("Error while signing up");
    }
  };

  if (isEditing) {
    return (
      <Modal
        open={isEditing}
        onClose={() => setIsEditing(false)}
        aria-labelledby="edit-blog-modal"
        aria-describedby="edit-blog-form"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography
            id="edit-blog-modal"
            variant="h6"
            component="h2"
            sx={{ mb: 2 }}
          >
            Edit Blog Post
          </Typography>
          <TextField
            fullWidth
            label="Title"
            variant="outlined"
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
            sx={{ mb: 2 }}
          />
          <TextField
            fullWidth
            label="Content"
            variant="outlined"
            multiline
            rows={4}
            value={editContent}
            onChange={(e) => setEditContent(e.target.value)}
            sx={{ mb: 2 }}
          />
          <Button variant="contained" onClick={handleSubmit} sx={{ mr: 1 }}>
            Edit
          </Button>
          <Button variant="outlined" onClick={() => setIsEditing(false)}>
            Cancel
          </Button>
        </Box>
      </Modal>
    );
  }

  return (
    <div className="relative mb-4">
      <Link to={`/blog/${id}`}>
        <div className="p-4 border border-slate-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 w-screen max-w-screen-md cursor-pointer">
          <div className="flex items-center">
            <Avatar name={authorName} />
            <div className="font-light pl-2 text-sm">{authorName}</div>
            <div className="pl-2">
              <Circle />
            </div>
            <div className="pl-2 font-light text-slate-500 text-sm">
              {publishedDate}
            </div>
          </div>
          <div className="text-xl font-semibold pt-2">{title}</div>
          <div className="text-md font-light">
            {content.slice(0, 100) + "..."}
          </div>
          <div className="text-slate-500 text-sm font-light pt-4">
            {`${Math.ceil(content.length / 100)} minute(s) read`}
          </div>
        </div>
      </Link>
      {name === authorName && (
        <div className="absolute top-2 right-2 flex space-x-2">
          <button
            type="button"
            className="mt-3 text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300 font-medium rounded-full text-md px-3 py-2 text-center transition-colors duration-200"
            onClick={(e) => {
              e.preventDefault();
              setIsEditing(!isEditing);
            }}
          >
            {isEditing ? "Cancel Edit" : "Edit"}
          </button>
          <button
            type="button"
            className="mt-3 text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-300 font-medium rounded-full text-md px-3 py-2 text-center transition-colors duration-200"
            onClick={(e) => {
              e.preventDefault();
              deleteBlog();
            }}
          >
            Delete
          </button>
        </div>
      )}
    </div>
  );
};

export function Circle() {
  return <div className="h-1 w-1 rounded-full bg-slate-500"></div>;
}

export function Avatar({
  name,
  size = "big",
}: {
  name: string;
  size?: "small" | "big";
}) {
  return (
    <div
      className={`relative inline-flex items-center justify-center overflow-hidden bg-gray-600 rounded-full ${
        size === "small" ? "w-6 h-6" : "w-10 h-10"
      }`}
    >
      <span
        className={`${
          size === "small" ? "text-xs" : "text-md"
        } font-extralight text-white dark:text-gray-300`}
      >
        {name[0]}
      </span>
    </div>
  );
}
