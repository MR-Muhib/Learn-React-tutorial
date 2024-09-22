import React from "react";
import style from "./index.css";

const AsideNav = () => {
  return (
    <div className="aside-parent-div">
      {/* //? Aside 1 div Start */}
      <aside className="aside2-div">
        <div>
          <span>installation</span>
        </div>
        <div>
          <span>main concepts</span>
        </div>
        <div>
          <span>Advanced Guides</span>
        </div>
        <div>
          <span>Api reference</span>
        </div>
      </aside>

      {/* //? Aside 2 div Start */}
      <aside className="aside3-div">
        <div>
          <span>installation</span>
        </div>
        <div>
          <span>main concepts</span>
        </div>
        <div>
          <span>Advanced Guides</span>
        </div>
        <div>
          <span>Api reference</span>
        </div>
      </aside>

      {/* //? Aside 3 div Start */}
      <aside className="aside3-div">
        <div>
          <span>installation</span>
        </div>
        <div>
          <span>main concepts</span>
        </div>
        <div>
          <span>Advanced Guides</span>
        </div>
        <div>
          <span>Api reference</span>
        </div>
      </aside>
    </div>
  );
};


export default AsideNav;
