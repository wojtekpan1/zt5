import React from "react";
import Category2 from "../Category2";
import "./Dropdowns2.css";

function Dropdowns2(props) {
  const { category21Props, category22Props } = props;

  return (
    <div className="container-center-horizontal">
      <div className="dropdowns-2 screen">
        <Category2 populationHealth={category21Props.populationHealth} />
        <Category2 populationHealth={category22Props.populationHealth} className={category22Props.className} />
      </div>
    </div>
  );
}

export default Dropdowns2;
