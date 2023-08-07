import React from "react";
import "./Card8.css";

function Card8(props) {
  const { src, className } = props;

  return (
    <div className={`card-38 ${className || ""}`}>
      <img className="image-10" src={src} alt="image 10" />
    </div>
  );
}

export default Card8;
