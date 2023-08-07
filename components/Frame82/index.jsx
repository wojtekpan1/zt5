import React from "react";
import "./Frame82.css";

function Frame82(props) {
  const { spanText2, className } = props;

  return (
    <div className={`frame-8-2 ${className || ""}`}>
      <div className="x-3 inter-black-black-36px">
        <span className="span-35 inter-black-black-36px">X+</span>
      </div>
      <div className="professionals-3 inter-normal-black-20px">
        <span className="span-35 inter-normal-black-20px">{spanText2}</span>
      </div>
    </div>
  );
}

export default Frame82;
