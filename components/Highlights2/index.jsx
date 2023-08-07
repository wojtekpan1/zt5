import React from "react";
import Frame82 from "../Frame82";
import Frame92 from "../Frame92";
import Frame112 from "../Frame112";
import "./Highlights2.css";

function Highlights2(props) {
  const { frame82Props, frame92Props, frame112Props } = props;

  return (
    <div className="highlights-4">
      <Frame82 spanText2={frame82Props.spanText2} className={frame82Props.className} />
      <Frame92 spanText2={frame92Props.spanText2} className={frame92Props.className} />
      <div className="frame-10-6">
        <div className="xm-4 inter-black-black-36px">
          <span className="inter-black-black-36px">$XM</span>
        </div>
        <div className="fundraised-16 inter-normal-black-20px">
          <span className="inter-normal-black-20px">fundraised</span>
        </div>
      </div>
      <Frame112 spanText2={frame112Props.spanText2} />
      <div className="frame-12-8">
        <div className="x-24 inter-black-black-36px">
          <span className="inter-black-black-36px">X+</span>
        </div>
        <div className="countries-16 inter-normal-black-20px">
          <span className="inter-normal-black-20px">countries</span>
        </div>
      </div>
    </div>
  );
}

export default Highlights2;
