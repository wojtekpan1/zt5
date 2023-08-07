import React from "react";
import "./Frame92.css";

function Frame92(props) {
  const { spanText2, className } = props;

  return (
    <div className={`frame-9-2 ${className || ""}`}>
      <div className="x-8 inter-black-black-36px">
        <span className="span-40 inter-black-black-36px">X+</span>
      </div>
      <div className="years-in-healthcare-3 inter-normal-black-20px">
        <span className="span-40 inter-normal-black-20px">{spanText2}</span>
      </div>
    </div>
  );
}

export default Frame92;
