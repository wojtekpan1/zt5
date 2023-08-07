import React from "react";
import "./Card1.css";

function Card1(props) {
  const { className } = props;

  return (
    <div className={`card-1-2 ${className || ""}`}>
      <img className="icon-link" src="/img/bandaids-1.svg" alt="icon-link" />
      <div className="catalyst-value-solutions notoserif-bold-white-24px">Catalyst Value Solutions</div>
    </div>
  );
}

export default Card1;
