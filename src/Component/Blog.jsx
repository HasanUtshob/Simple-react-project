import React from "react";
import { FaBookmark } from "react-icons/fa";

const Blog = ({ blogs, handlebookmarked, handleReadingTime }) => {
  return (
    <div className="grid items-center justify-center gap-5 mt-5">
      {blogs.map((blog) => (
        <div className="card bg-base-100 w-150 shadow-sm">
          <figure>
            <img src={blog.cover} alt="cover" />
          </figure>
          <div className="flex justify-between p-4">
            <div className="flex items-center gap-4">
              <img className="w-10" src={blog.author_img} alt="" />
              <h3 className="font-bold">{blog.author}</h3>
            </div>
            <div>
              <button onClick={() => handlebookmarked(blog)}>
                <FaBookmark size={30} />
              </button>
            </div>
          </div>
          <div className="card-body text-center">
            <h1 className="card-title justify-center text-2xl">{blog.title}</h1>
            <p>
              A card component has a figure, a body part, and inside body there
              are title and actions parts
            </p>
            <div className="card-actions justify-between items-center">
              <div className="flex gap-2">
                {blog.hashtags.map((hash) => (
                  <p>#{hash}</p>
                ))}
              </div>
              <button
                onClick={() => handleReadingTime(blog)}
                className="btn btn-primary"
              >
                Marked As Read
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Blog;
