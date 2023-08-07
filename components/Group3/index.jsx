import React from "react";
import "./Group3.css";

function Group3(props) {
  const { spanText1, className } = props;

  return (
    <div className={`group-3-1 ${className || ""}`}>
      <div className="patient-engagement-8 inter-medium-black-18px">
        <span className="span-149 inter-medium-black-18px">{spanText1}</span>
      </div>
      <p className="lorem-ipsum-dolor-si-122 inter-light-black-16px">
        <span className="span-149 inter-light-black-16px">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </span>
      </p>
    </div>
  );
}

export default Group3;
