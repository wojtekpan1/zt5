import React from "react";
import Group58 from "../Group58";
import Group642 from "../Group642";
import CTA from "../CTA";
import "./Popup2.css";

function Popup2(props) {
  const {
    title,
    iconClose,
    group581Props,
    group582Props,
    group6421Props,
    group6422Props,
    group6423Props,
    group6424Props,
    cTAProps,
  } = props;

  return (
    <div className="popup-2 screen">
      <div className="popup-3">
        <div className="frame-184953-1">
          <div className="frame-184954">
            <div className="group-54">
              <h1 className="title-17 notoserif-black-pine-green-48px">{title}</h1>
            </div>
          </div>
          <div className="form-3">
            <div className="frame-90-3">
              <Group58 solution={group581Props.solution} />
              <Group58 solution={group582Props.solution} />
              <Group642>{group6421Props.children}</Group642>
              <Group642>{group6422Props.children}</Group642>
              <Group642>{group6423Props.children}</Group642>
              <Group642 className={group6424Props.className}>{group6424Props.children}</Group642>
            </div>
            <CTA className={cTAProps.className}>{cTAProps.children}</CTA>
          </div>
        </div>
        <img className="icon-close-2" src={iconClose} alt="icon-close" />
      </div>
    </div>
  );
}

export default Popup2;
