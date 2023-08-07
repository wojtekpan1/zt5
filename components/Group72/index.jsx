import React from "react";
import "./Group72.css";

function Group72(props) {
  const { spanText1, className } = props;

  return (
    <div className={`group-16-1 ${className || ""}`}>
      <div className="catalyst-2 notoserif-semi-bold-shark-18px">
        <span className="span-320 notoserif-semi-bold-shark-18px">{spanText1}</span>
      </div>
      <p className="lorem-ipsum-dolor-si-220 notoserif-normal-shark-14px">
        <span className="span-320 notoserif-normal-shark-14px">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </span>
      </p>
    </div>
  );
}

export default Group72;
