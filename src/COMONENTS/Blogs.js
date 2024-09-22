import React, { useState } from "react";

import { BlogData } from "./BLOG/BlogData";

import "./BLOG/Blogs.css";
import { Link } from "react-router-dom";
import Addblogs from "./BLOG/Addblogs";

const Blogs = () => {
  const [blogs, setBlogs] = useState(BlogData);

  const trancateString = (str, num) => {
    if (str.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };

  const HandleAddBlogs = (user) => {
    setBlogs((provide) => [...provide, user]);
    console.log(user);
  };

  const HandleEditBtn = (user) => {
    console.log(user);
  };

  const HandleDelete = (id) => {
    const dataFilter = blogs.filter((blog) => blog.id !== id);
    setBlogs(dataFilter);
  };

  return (
    <div>
      <h1>Blogs Page</h1>
      <Addblogs HandleAddBlogs={HandleAddBlogs} />
      <section className="blog-section">
        {blogs.map((blog) => {
          const { id, title, body } = blog;
          return (
            <article key={id} className="article-section">
              <h2>{title}</h2>
              <p>{trancateString(body, 100)}</p>
              <Link
                to={title}
                state={{ id, title, body }}
                className="learn-more"
              >
                Learn More
              </Link>

              <button onClick={HandleEditBtn} >Edit Note</button>

              <button onClick={() => HandleDelete(id)} className="delete-btn">
                Delete Blogs
              </button>
            </article>
          );
        })}
      </section>
    </div>
  );
};

export default Blogs;
