import React from "react";
import "./Group5.css";

function Group5(props) {
  const { spanText1, className } = props;

  return (
    <div className={`group-5-1 ${className || ""}`}>
      <div className="physician-support-7 inter-medium-black-18px">
        <span className="span-147 inter-medium-black-18px">{spanText1}</span>
      </div>
      <p className="lorem-ipsum-dolor-si-120 inter-light-black-16px">
        <span className="span-147 inter-light-black-16px">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </span>
      </p>
    </div>
  );
}

export default Group5;
