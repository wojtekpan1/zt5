import React from "react";
import "./Group1.css";

function Group1(props) {
  const { spanText1, className } = props;

  return (
    <div className={`group-1-6 ${className || ""}`}>
      <div className="population-health-15 inter-bold-black-18px">
        <span className="span-143 inter-bold-black-18px">{spanText1}</span>
      </div>
      <p className="lorem-ipsum-dolor-si-116 inter-light-black-16px">
        <span className="span-143 inter-light-black-16px">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </span>
      </p>
    </div>
  );
}

export default Group1;
