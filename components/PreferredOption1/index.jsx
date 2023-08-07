import React from "react";
import "./PreferredOption1.css";

function PreferredOption1(props) {
  const { spanText, screenshot20221207At1152, className } = props;

  return (
    <div className="container-center-horizontal">
      <div className={`preferred-option-1 screen ${className || ""}`}>
        <div className="flex-row-21">
          <h1 className="title-23 montserrat-semi-bold-black-42px">
            <span className="spanqlyzbi montserrat-semi-bold-black-42px">{spanText}</span>
          </h1>
          <img className="new_act-logo-v5-1-5" src="/img/new-actlogo-v5-1-5@2x.png" alt="NEW_ACTLogo v5 1" />
        </div>
        <img
          className="screenshot-2022-12-07-at-115-2-1"
          src={screenshot20221207At1152}
          alt="Screenshot 2022-12-07 at 1.15 2"
        />
        <div className="flex-row-22">
          <div className="rectangle-3-1"></div>
          <div className="rectangle-1-1"></div>
        </div>
      </div>
    </div>
  );
}

export default PreferredOption1;
