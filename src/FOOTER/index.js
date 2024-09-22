import React from "react";

import { Link } from "react-router-dom";
import { IoLocation } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { FaFacebookSquare } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { CiYoutube } from "react-icons/ci";

import style from "./Index.css";

const Index = () => {
  return (
    <footer className="footer-div">
      <div className="location">
        <div>
          <label>
            <IoLocation />
          </label>
          <Link to="#" className="footer-links">Moulvibazar-3200, Sylhet, Bangladesh</Link>
        </div>
        <div>
          <label>
            <FaPhoneAlt />
          </label>
          <Link to="#" className="footer-links">+880 1741 877607</Link>
        </div>

        <div>
          <label>
            <CiMail />
          </label>
          <Link to="#" className="footer-links">mrmuhib300@gmail.com</Link>
        </div>
      </div>

      <div className="right-div">
        <h3>Create by Learning</h3>
        <p>I hope everyone learn this website.</p>
        <div className="right-div-Icon">
          <FaFacebookSquare  className="Icon"/>
          <CiTwitter  className="Icon"/>
          <FaLinkedin className="Icon" />
          <FaGithub className="Icon" />
          <CiYoutube  className="Icon"/>
        </div>
      </div>
    </footer>
  );
};

export default Index;
