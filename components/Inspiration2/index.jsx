import React from "react";
import "./Inspiration2.css";

function Inspiration2(props) {
  const {
    spanText,
    new_ActlogoV51,
    image9,
    image10,
    image14,
    screenshot20221207At1261,
    screenshot20221207At1262,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="inspiration screen">
        <div className="flex-row-20">
          <h1 className="title-21 montserrat-semi-bold-black-42px">
            <span className="montserrat-semi-bold-black-42px">{spanText}</span>
          </h1>
          <img className="new_act-logo-v5-1-3" src={new_ActlogoV51} alt="NEW_ACTLogo v5 1" />
        </div>
        <img className="image-9" src={image9} alt="image 9" />
        <img className="image-10-3" src={image10} alt="image 10" />
        <img className="image-14-5" src={image14} alt="image 14" />
        <img
          className="screenshot-2022-12-07-at-126-1"
          src={screenshot20221207At1261}
          alt="Screenshot 2022-12-07 at 1.26 1"
        />
        <img
          className="screenshot-2022-12-07-at-126-2"
          src={screenshot20221207At1262}
          alt="Screenshot 2022-12-07 at 1.26 2"
        />
      </div>
    </div>
  );
}

export default Inspiration2;
