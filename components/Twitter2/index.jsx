import React from "react";
import "./Twitter2.css";

function Twitter2(props) {
  const { src, className } = props;

  return (
    <div className={`twitter ${className || ""}`}>
      <img className="twitter-1" src={src} alt="Twitter" />
    </div>
  );
}

export default Twitter2;
