import React from "react";
import "./ColorInspiration.css";

function ColorInspiration(props) {
  const {
    spanText,
    screenshot20221206At10411,
    screenshot20221206At10421,
    screenshot20221206At10422,
    screenshot20221206At10431,
    screenshot20221206At10451,
    new_ActlogoV51,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="color-inspiration screen">
        <div className="flex-col-13">
          <h1 className="title-18 montserrat-semi-bold-black-42px">
            <span className="montserrat-semi-bold-black-42px">{spanText}</span>
          </h1>
          <img
            className="screenshot-2022-12-06-at-1041-1"
            src={screenshot20221206At10411}
            alt="Screenshot 2022-12-06 at 10.41 1"
          />
          <img
            className="screenshot-2022-12-06-at-1042-1"
            src={screenshot20221206At10421}
            alt="Screenshot 2022-12-06 at 10.42 1"
          />
          <img
            className="screenshot-2022-12-06-at-1042-2"
            src={screenshot20221206At10422}
            alt="Screenshot 2022-12-06 at 10.42 2"
          />
          <img
            className="screenshot-2022-12-06-at-1043-1"
            src={screenshot20221206At10431}
            alt="Screenshot 2022-12-06 at 10.43 1"
          />
          <img
            className="screenshot-2022-12-06-at-1045-1"
            src={screenshot20221206At10451}
            alt="Screenshot 2022-12-06 at 10.45 1"
          />
        </div>
        <img className="new_act-logo-v5-1" src={new_ActlogoV51} alt="NEW_ACTLogo v5 1" />
      </div>
    </div>
  );
}

export default ColorInspiration;
