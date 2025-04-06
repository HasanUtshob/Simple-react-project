import { useState } from "react";
import "./App.css";
import Blogs from "./Component/Blogs";
import Navber from "./Component/Navber";
function App() {
  const [bookmark, setbookmark] = useState([]);
  const [ReadingTime, setReadingTime] = useState(0);
  const handlebookmarked = (blog) => {
    setbookmark([...bookmark, blog]);
  };

  const handleReadingTime = (blog) => {
    const newTime = blog.reading_time;
    setReadingTime(ReadingTime + newTime);
    removeBookmark(blog.id);
  };

  const removeBookmark = (id) => {
    const remainingBookmark = bookmark.filter((mark) => mark.id !== id);
    setbookmark(remainingBookmark);
  };

  return (
    <>
      <Navber></Navber>

      <div className="flex">
        <div className="left_Container w-8/12 text-center border-2">
          <Blogs
            handlebookmarked={handlebookmarked}
            handleReadingTime={handleReadingTime}
          ></Blogs>
        </div>
        <div className="right_container w-4/12 text-center">
          <h1> Total Bookmark : {bookmark.length} </h1>
          <h1>Reading Time : {ReadingTime}</h1>

          {bookmark.map((marked) => (
            <p>{marked.title}</p>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
