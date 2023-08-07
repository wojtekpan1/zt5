import React from "react";
import "./Group8.css";

function Group8(props) {
  const { catalystResearch, className } = props;

  return (
    <div className={`group-8-1 ${className || ""}`}>
      <div className="catalyst-research-1 notoserif-semi-bold-shark-18px">{catalystResearch}</div>
      <p className="lorem-ipsum-dolor-si-62 notoserif-normal-shark-14px">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
    </div>
  );
}

export default Group8;
