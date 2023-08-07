import React from "react";
import "./Frame39.css";

function Frame39(props) {
  const { className } = props;

  return (
    <div className={`frame-20-1 ${className || ""}`}>
      <div className="rectangle-21"></div>
      <p className="lorem-ipsum-dolor-si-140 inter-semi-bold-black-20px">
        <span className="span-195 inter-semi-bold-black-20px">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur mattis risus, vitae porta dolor
          consectetur a.
        </span>
      </p>
      <div className="month-dd-yyyy inter-normal-black-16px">
        <span className="span-195 inter-normal-black-16px">Month DD, YYYY</span>
      </div>
    </div>
  );
}

export default Frame39;
