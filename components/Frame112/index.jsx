import React from "react";
import "./Frame112.css";

function Frame112(props) {
  const { spanText2 } = props;

  return (
    <div className="frame-11-2">
      <div className="x-13 inter-black-black-36px">
        <span className="inter-black-black-36px">X+</span>
      </div>
      <div className="partners-41 inter-normal-black-20px">
        <span className="inter-normal-black-20px">{spanText2}</span>
      </div>
    </div>
  );
}

export default Frame112;
