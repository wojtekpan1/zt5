import React from "react";
import "./Card2.css";

function Card2(props) {
  const { className } = props;

  return (
    <div className={`card-2-1 ${className || ""}`}>
      <img className="flask" src="/img/flask.svg" alt="Flask" />
      <div className="catalyst-telemed notoserif-bold-spring-wood-24px">Catalyst Telemed</div>
    </div>
  );
}

export default Card2;
