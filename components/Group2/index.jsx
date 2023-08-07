import React from "react";
import "./Group2.css";

function Group2(props) {
  const { spanText1, className } = props;

  return (
    <div className={`group-2-1 ${className || ""}`}>
      <div className="hospitals-clinics-6 inter-medium-black-18px">
        <span className="span-145 inter-medium-black-18px">{spanText1}</span>
      </div>
      <p className="lorem-ipsum-dolor-si-119 inter-light-black-16px">
        <span className="span-145 inter-light-black-16px">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </span>
      </p>
    </div>
  );
}

export default Group2;
