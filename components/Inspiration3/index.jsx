import React from "react";
import "./Inspiration3.css";

function Inspiration3(props) {
  const {
    spanText,
    screenshot20221207At1271,
    screenshot20221207At1131,
    screenshot20221207At1151,
    overlapGroup,
    new_ActlogoV51,
    screenshot20221207At1281,
    screenshot20221207At1152,
    screenshot20221207At1051,
    screenshot20221207At1121,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="inspiration2 screen">
        <div className="flex-col-18">
          <h1 className="title-22 montserrat-semi-bold-black-42px">
            <span className="montserrat-semi-bold-black-42px">{spanText}</span>
          </h1>
          <img
            className="screenshot-2022-12-07-at-127-1"
            src={screenshot20221207At1271}
            alt="Screenshot 2022-12-07 at 1.27 1"
          />
          <img
            className="screenshot-2022-12-07-at-113-1"
            src={screenshot20221207At1131}
            alt="Screenshot 2022-12-07 at 1.13 1"
          />
          <img
            className="screenshot-2022-12-07-at-115-1"
            src={screenshot20221207At1151}
            alt="Screenshot 2022-12-07 at 1.15 1"
          />
          <div className="overlap-group-31" style={{ backgroundImage: `url(${overlapGroup})` }}>
            <div className="rectangle-3"></div>
            <div className="rectangle-1"></div>
          </div>
        </div>
        <div className="flex-col-19">
          <img className="new_act-logo-v5-1-4" src={new_ActlogoV51} alt="NEW_ACTLogo v5 1" />
          <img
            className="screenshot-2022-12-07-at-128-1"
            src={screenshot20221207At1281}
            alt="Screenshot 2022-12-07 at 1.28 1"
          />
          <img
            className="screenshot-2022-12-07-at-115-2"
            src={screenshot20221207At1152}
            alt="Screenshot 2022-12-07 at 1.15 2"
          />
          <img
            className="screenshot-2022-12-07-at-105-1"
            src={screenshot20221207At1051}
            alt="Screenshot 2022-12-07 at 1.05 1"
          />
          <img
            className="screenshot-2022-12-07-at-112-1"
            src={screenshot20221207At1121}
            alt="Screenshot 2022-12-07 at 1.12 1"
          />
        </div>
      </div>
    </div>
  );
}

export default Inspiration3;
