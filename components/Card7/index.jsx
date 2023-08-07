import React from "react";
import "./Card7.css";

function Card7(props) {
  const { src, className } = props;

  return (
    <div className={`card-32 ${className || ""}`}>
      <img className="image-15" src={src} alt="image 15" />
    </div>
  );
}

export default Card7;
