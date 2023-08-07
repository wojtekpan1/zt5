import React from "react";
import "./Frame184970.css";

function Frame184970(props) {
  const { spanText1, spanText2, spanText3, spanText4, spanText5 } = props;

  return (
    <div className="container-center-horizontal">
      <div className="frame-184970 screen">
        <h1 className="title-60 notoserif-black-shark-60px">
          <span className="notoserif-black-shark-60px">{spanText1}</span>
        </h1>
        <div className="heading notoserif-black-shark-48px">
          <span className="notoserif-black-shark-48px">{spanText2}</span>
        </div>
        <div className="heading notoserif-black-shark-38px">
          <span className="notoserif-black-shark-38px">{spanText3}</span>
        </div>
        <div className="body-1 notoserif-medium-shark-18px">
          <span className="notoserif-medium-shark-18px">{spanText4}</span>
        </div>
        <div className="body-1 notoserif-medium-shark-16px">
          <span className="notoserif-medium-shark-16px">{spanText5}</span>
        </div>
      </div>
    </div>
  );
}

export default Frame184970;
