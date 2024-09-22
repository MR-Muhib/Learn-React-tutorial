import React from "react";
import { Link } from "react-router-dom";
import style from "./Tutorialcomponents.css";

const Tutorial = () => {
  return (
    <div>
      <h1 className="tutorial-title">What is React?</h1>
      <div className="tutorial-div">
        <p>React is a JavaScript library for building user interfaces.</p>
        <p>React is used to build single-page applications.</p>
        <p>React allows us to create reusable UI components.</p>
        <Link className="tutorial-learn" to="/">Start learning React now?</Link>
      </div>
    </div>
  );
};

export default Tutorial;
