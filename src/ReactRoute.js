import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./NAVIGRATION-BAR/Navbar";
import Docs from "./COMONENTS/Docs";
import Tutorial from "./COMONENTS/Tutorial";
import Blogs from "./COMONENTS/Blogs";
import Community from "./COMONENTS/Community";
import Home from "./COMONENTS/Home";
import LoginForm from "./COMONENTS/LOGIN-AND-REGISTATION/LoginForm";
import Blog from "./COMONENTS/BLOG/Blog";
import Index from "./FOOTER";

const ReactRoute = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/docs" element={<Docs />} />
          <Route path="/tutorial" element={<Tutorial />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/:title" element={<Blog />} />
          <Route path="community" element={<Community />} />
          <Route path="/login" element={<LoginForm />} />
        </Routes>
        <Index />
      </BrowserRouter>
    </div>
  );
};

export default ReactRoute;
