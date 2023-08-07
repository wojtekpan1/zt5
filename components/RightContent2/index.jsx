import React from "react";
import "./RightContent2.css";

function RightContent2(props) {
  const { ellipse9, ellipse10 } = props;

  return (
    <div className="right-content-4">
      <div className="ellipse-container-4">
        <img className="ellipse-9-4" src={ellipse9} alt="Ellipse 9" />
        <img className="ellipse-10-4" src={ellipse10} alt="Ellipse 10" />
      </div>
    </div>
  );
}

export default RightContent2;
