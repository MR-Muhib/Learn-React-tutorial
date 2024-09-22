import React from "react";
import { Link, useLocation } from "react-router-dom";

const Blog = () => {
  const location = useLocation();
  const { id, title, body } = location.state;
  // console.log(location);

  return (
    <div key={id} className="blog-div">
      <h1>{title}</h1>
      <p className="blog-body">{body}</p>
      <Link className="back-blogs" to="/blogs">
        Back to Blogs Page
      </Link>
    </div>
  );
};

export default Blog;
