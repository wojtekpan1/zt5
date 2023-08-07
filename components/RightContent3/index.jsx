import React from "react";
import "./RightContent3.css";

function RightContent3(props) {
  const { rightContent, rectangle32, className } = props;

  return (
    <div className={`t-content-1 ${className || ""}`} style={{ backgroundImage: `url(${rightContent})` }}>
      <img className="rectangle-32-4" src={rectangle32} alt="Rectangle 32" />
    </div>
  );
}

export default RightContent3;
