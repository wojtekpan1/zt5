import React from "react";
import Card4 from "../Card4";
import Card5 from "../Card5";
import Card6 from "../Card6";
import Card7 from "../Card7";
import Card8 from "../Card8";
import "./Cards2.css";

function Cards2(props) {
  const { screenshot20230109At8461, className, card4Props, card5Props, card6Props, card7Props, card8Props } = props;

  return (
    <div className={`cards-21 ${className || ""}`}>
      <Card4 src={card4Props.src} className={card4Props.className} />
      <Card5 src={card5Props.src} className={card5Props.className} />
      <div className="card-23">
        <img
          className="screenshot-2023-01-09-at-846-1"
          src={screenshot20230109At8461}
          alt="Screenshot 2023-01-09 at 8.46 1"
        />
      </div>
      <Card6 src={card6Props.src} className={card6Props.className} />
      <Card7 src={card7Props.src} className={card7Props.className} />
      <Card8 src={card8Props.src} className={card8Props.className} />
    </div>
  );
}

export default Cards2;
