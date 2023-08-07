import React from "react";
import "./Twitter.css";

function Twitter(props) {
  const { className } = props;

  return (
    <div className={`frame-105-item-17-1 ${className || ""}`}>
      <img className="icon-twitter" src="/img/twitter.svg" alt="icon-twitter" />
    </div>
  );
}

export default Twitter;
