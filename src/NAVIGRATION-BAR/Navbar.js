import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa6";

import style from "./Navbar.css";

const Navbar = () => {
  const [toggle, setToggle] = useState(true);
  return (
    <div className="divs">
      <div className="nav-icon" onClick={() => setToggle(!toggle)}>
        <FaBars />
      </div>

      {/* loging and registation */}
      <div className="login-registation">
        <NavLink to="/login" className="login">
          Login
        </NavLink>
        <NavLink to="/" className="registation">
          Registation
        </NavLink>
      </div>

      {toggle && (
        <nav className="nav-bar">
          <NavLink to="/" className="nav-links">
            Home
          </NavLink>
          <NavLink to="/docs" className="nav-links">
            Docs
          </NavLink>
          <NavLink to="/tutorial" className="nav-links">
            Tutorial
          </NavLink>
          <NavLink to="/blogs" className="nav-links">
            Blogs
          </NavLink>
          <NavLink to="/community" className="nav-links">
            Comunity
          </NavLink>
        </nav>
      )}
    </div>
  );
};

export default Navbar;
