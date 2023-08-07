import React from "react";
import Frame28 from "../Frame28";
import "./Footer3.css";

function Footer3(props) {
  const { className } = props;

  return (
    <div className={`footer-5 ${className || ""}`}>
      <div className="flex-col-26">
        <div className="logo-17 inter-bold-black-36px">
          <span className="span-81 inter-bold-black-36px">LOGO</span>
        </div>
        <div className="group-27">
          <div className="follow-us-on-17 inter-semi-bold-black-16px">
            <span className="span-81 inter-semi-bold-black-16px">Follow us on</span>
          </div>
          <div className="frame-26">
            <div className="ellipse-1"></div>
            <div className="ellipse-1"></div>
            <div className="ellipse-1"></div>
          </div>
        </div>
      </div>
      <Frame28 />
    </div>
  );
}

export default Footer3;
