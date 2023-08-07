import React from "react";
import Category from "../Category";
import "./Level1.css";

function Level1(props) {
  const { className, category1Props, category2Props, category3Props, category4Props } = props;

  return (
    <div className={`level-1 ${className || ""}`}>
      <Category populationHealth={category1Props.populationHealth} />
      <Category populationHealth={category2Props.populationHealth} className={category2Props.className} />
      <Category populationHealth={category3Props.populationHealth} className={category3Props.className} />
      <Category populationHealth={category4Props.populationHealth} className={category4Props.className} />
    </div>
  );
}

export default Level1;
