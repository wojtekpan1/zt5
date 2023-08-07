import React from "react";
import Frame184953 from "../Frame184953";
import "./Popup3.css";

function Popup3(props) {
  const { x, frame184953Props } = props;

  return (
    <div className="container-center-horizontal">
      <div className="popup-6 screen">
        <Frame184953 className={frame184953Props.className} />
        <img className="x-19" src={x} alt="X" />
      </div>
    </div>
  );
}

export default Popup3;
