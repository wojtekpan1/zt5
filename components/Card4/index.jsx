import React from "react";
import "./Card4.css";

function Card4(props) {
  const { src, className } = props;

  return (
    <div className={`card-24 ${className || ""}`}>
      <img className="image-11" src={src} alt="image 11" />
    </div>
  );
}

export default Card4;
