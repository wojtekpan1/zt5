import React from "react";
import Frame82 from "../Frame82";
import Frame92 from "../Frame92";
import Frame112 from "../Frame112";
import "./Highlights.css";

function Highlights(props) {
  const { className, frame82Props, frame92Props, frame112Props } = props;

  return (
    <div className={`highlights ${className || ""}`}>
      <Frame82 spanText2={frame82Props.spanText2} />
      <Frame92 spanText2={frame92Props.spanText2} />
      <div className="frame-10-2">
        <div className="xm inter-black-black-36px">
          <span className="span-32 inter-black-black-36px">$XM</span>
        </div>
        <div className="fundraised-3 inter-normal-black-20px">
          <span className="span-32 inter-normal-black-20px">Fundraised</span>
        </div>
      </div>
      <Frame112 spanText2={frame112Props.spanText2} />
      <div className="frame-12-2">
        <div className="x inter-black-black-36px">
          <span className="span-32 inter-black-black-36px">X+</span>
        </div>
        <div className="countries-3 inter-normal-black-20px">
          <span className="span-32 inter-normal-black-20px">Countries</span>
        </div>
      </div>
    </div>
  );
}

export default Highlights;
