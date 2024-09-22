import React from "react";
import style from "./Homecontents.css";
import AsideNav from "../../ASIDE-BAR";

const Homecontent = () => {
  return (
    <div className="content-div">
      <section className="section-div">
        <p className="child-pera">
          The new <a className="quick-start" href="#"> Quick Start</a> Teaches modern React and includes
          live examples.
        </p>
        <p className="child-pera">
          This page is an overview of the React documentation and related
          resours.
        </p>
        <p className="child-pera">
          React is a JavaScript library for building user interfaces. Learn what
          React is all about on our homepage or in the tutorial.
        </p>
      </section>

      {/* //! Aside Section Start */}
      <AsideNav />
    </div>
  );
};

export default Homecontent;
