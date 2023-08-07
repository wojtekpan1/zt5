import React from "react";
import "./Group642.css";

function Group642(props) {
  const { children, className } = props;

  return (
    <div className={`group-6-1 ${className || ""}`}>
      <div className="overlap-group-14">
        <div className="name-8 notoserif-normal-mountain-mist-24px">{children}</div>
      </div>
    </div>
  );
}

export default Group642;
