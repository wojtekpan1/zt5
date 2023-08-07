import React from "react";
import "./Group63.css";

function Group63(props) {
  const { spanText1, spanText2, spanText3, spanText4, className } = props;

  return (
    <div className={`group-63-1 inter-light-black-25px ${className || ""}`}>
      <div className="solutions-93">
        <span className="span-420 inter-light-black-25px">{spanText1}</span>
      </div>
      <div className="partnership">
        <span className="span-420 inter-light-black-25px">{spanText2}</span>
      </div>
      <div className="group-63-item-1">
        <span className="span-420 inter-light-black-25px">{spanText3}</span>
      </div>
      <div className="group-63-item-1 variant-1">
        <span className="span-420 inter-light-black-25px">{spanText4}</span>
      </div>
    </div>
  );
}

export default Group63;
