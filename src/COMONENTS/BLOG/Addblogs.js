import React, { useState } from "react";
import "./add-blogs.css";

const Addblogs = ({ HandleAddBlogs }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const HandleTitleChange = (evnet) => {
    setTitle(evnet.target.value);
    // console.log(title);
  };
  const HandleDescChange = (event) => {
    setBody(event.target.value);
    // console.log(disc);
  };

  const HandleSubmit = (event) => {
    event.preventDefault();
    // const formData = { title, disc };

    const newUser = {
      id: new Date().getTime().toString(),
      title: title,
      body: body,
    };

    // Reset fields after submission
    setTitle("");
    setBody("");

    HandleAddBlogs(newUser);
  };

  return (
    <div className="add-blogs-div">
      <h3>Add Blogs</h3>
      <form onSubmit={HandleSubmit}>
        <input
          className="input-title"
          type="text"
          name="title"
          id="title"
          value={title}
          onChange={HandleTitleChange}
          required
        />
        <textarea
          className="input-disc"
          onChange={HandleDescChange}
          rows={4}
          cols={40}
          value={body}
          required
        />
        <button className="add-button">Add Blogs</button>
      </form>
    </div>
  );
};

export default Addblogs;
