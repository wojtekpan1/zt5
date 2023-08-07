import React from "react";
import "./Group432.css";

function Group432(props) {
  const { line6, line7, className } = props;

  return (
    <div className={`group-43-2 ${className || ""}`}>
      <img className="line-6-2" src={line6} alt="Line 6" />
      <img className="line-7-2" src={line7} alt="Line 7" />
    </div>
  );
}

export default Group432;
