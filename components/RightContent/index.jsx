import React from "react";
import "./RightContent.css";

function RightContent(props) {
  const { ellipse9, ellipse10 } = props;

  return (
    <div className="right-content">
      <div className="ellipse-container">
        <img className="ellipse-9" src={ellipse9} alt="Ellipse 9" />
        <img className="ellipse-10" src={ellipse10} alt="Ellipse 10" />
      </div>
    </div>
  );
}

export default RightContent;
