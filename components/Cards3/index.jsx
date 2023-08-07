import React from "react";
import Card4 from "../Card4";
import Card5 from "../Card5";
import Card6 from "../Card6";
import Card7 from "../Card7";
import Card8 from "../Card8";
import "./Cards3.css";

function Cards3(props) {
  const { image13, className, card4Props, card5Props, card6Props, card7Props, card8Props } = props;

  return (
    <div className={`cards-30 ${className || ""}`}>
      <Card4 src={card4Props.src} className={card4Props.className} />
      <Card5 src={card5Props.src} className={card5Props.className} />
      <div className="card-56">
        <img className="image-13" src={image13} alt="image 13" />
      </div>
      <Card6 src={card6Props.src} className={card6Props.className} />
      <Card7 src={card7Props.src} className={card7Props.className} />
      <Card8 src={card8Props.src} className={card8Props.className} />
    </div>
  );
}

export default Cards3;
