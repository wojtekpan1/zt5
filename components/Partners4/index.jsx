import React from "react";
import Group39 from "../Group39";
import "./Partners4.css";

function Partners4(props) {
  const { className } = props;

  return (
    <div className={`partners-124 ${className || ""}`}>
      <div className="group-38-3">
        <div className="navbar-3">
          <div className="navbar-link-solution-partners inter-bold-black-24px">
            <span className="span-405 inter-bold-black-24px">Solution partners</span>
          </div>
          <div className="navbar-link-technology-partners inter-normal-black-24px">
            <span className="span-405 inter-normal-black-24px">Technology partners</span>
          </div>
          <div className="navbar-link-research-partners inter-normal-black-24px">
            <span className="span-405 inter-normal-black-24px">Research partners</span>
          </div>
          <div className="navbar-link-ecosystem-expansion-partners inter-normal-black-24px">
            <span className="span-405 inter-normal-black-24px">Ecosystem expansion partners</span>
          </div>
        </div>
        <div className="overlap-group2-38">
          <img className="line-3-7" src="/img/line-3-9@2x.png" alt="Line 3" />
        </div>
      </div>
      <div className="group-container-4">
        <Group39 />
        <div className="overlap-group1-44">
          <div className="ellipse-container-35">
            <div className="ellipse-9-21"></div>
            <div className="ellipse-13-4"></div>
            <div className="ellipse-11-4"></div>
            <div className="ellipse-12-4"></div>
          </div>
          <div className="ellipse-10-21"></div>
        </div>
      </div>
    </div>
  );
}

export default Partners4;
