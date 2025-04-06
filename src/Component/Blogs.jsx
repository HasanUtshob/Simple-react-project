import React, { useEffect, useState } from "react";
import Blog from "./Blog";

const Blogs = ({ handlebookmarked, handleReadingTime }) => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/HasanUtshob/jsongit/refs/heads/main/Blogs.json"
    )
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <>
      <div>
        <h1 className="text-2xl text-pink-300 font-bold">
          Total Blog : {blogs.length}
        </h1>
        <Blog
          blogs={blogs}
          handlebookmarked={handlebookmarked}
          handleReadingTime={handleReadingTime}
        ></Blog>
      </div>
    </>
  );
};

export default Blogs;
