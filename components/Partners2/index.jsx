import React from "react";
import Group39 from "../Group39";
import "./Partners2.css";

function Partners2(props) {
  const { className } = props;

  return (
    <div className={`partners-91 ${className || ""}`}>
      <div className="group-38-1">
        <div className="clients-container">
          <div className="hospital-clients-17 inter-bold-black-24px">
            <span className="span-189 inter-bold-black-24px">Hospital clients</span>
          </div>
          <div className="government-clients-17 inter-normal-black-24px">
            <span className="span-189 inter-normal-black-24px">Government clients</span>
          </div>
        </div>
        <div className="overlap-group2-19">
          <img className="line-3-4" src="/img/line-3-9@2x.png" alt="Line 3" />
        </div>
      </div>
      <div className="group-container-1">
        <Group39 />
        <div className="overlap-group1-19">
          <div className="ellipse-container-15">
            <div className="ellipse-9-9"></div>
            <div className="ellipse-13-2"></div>
            <div className="ellipse-11-2"></div>
            <div className="ellipse-12-2"></div>
          </div>
          <div className="ellipse-10-9"></div>
        </div>
      </div>
    </div>
  );
}

export default Partners2;
