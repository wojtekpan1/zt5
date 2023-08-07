import React from "react";
import "./Card22.css";

function Card22(props) {
  const { flask, className } = props;

  return (
    <div className={`card-2-4 ${className || ""}`}>
      <img className="flask-4" src={flask} alt="Flask" />
      <div className="catalyst-telemed-4 notoserif-bold-spring-wood-24px">
        <span className="spanvmqg4 notoserif-bold-spring-wood-24px">Catalyst Telemed</span>
      </div>
    </div>
  );
}

export default Card22;
