import React from "react";
import "./Card5.css";

function Card5(props) {
  const { src, className } = props;

  return (
    <div className={`card-25 ${className || ""}`}>
      <img className="image-12" src={src} alt="image 12" />
    </div>
  );
}

export default Card5;
