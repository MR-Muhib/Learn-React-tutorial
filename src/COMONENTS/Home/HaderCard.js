import React from "react";
import style from "./Home.css";
import { Link } from "react-router-dom";
import Homecontent from "./Homecontent";

const HaderCard = () => {
  return (
    <>
      <div className="home-card">
        <h1 className="home-title">React</h1>
        <p className="home-pera">
          A JavaScript library for building user interface
        </p>
        <p className="home-pera">
          ইউজার ইন্টারফেস তৈরির জন্য একটি জাভাস্ক্রিপ্ট লাইব্রেরি
        </p>
        <Link to="/" className="started-btn">
          Get Started
        </Link>
        <Link className="take-tutorial" to="/">
          Take the Tutorial
        </Link>
      </div>

      {/* input home contents */}
      <Homecontent />
    </>
  );
};

export default HaderCard;
