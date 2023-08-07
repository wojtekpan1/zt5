import React from "react";
import "./Card6.css";

function Card6(props) {
  const { src, className } = props;

  return (
    <div className={`card-26 ${className || ""}`}>
      <img className="image-14" src={src} alt="image 14" />
    </div>
  );
}

export default Card6;
