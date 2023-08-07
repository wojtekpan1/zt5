import React from "react";
import Group484 from "../Group484";
import Frame1212 from "../Frame1212";
import "./Frame117.css";

function Frame117(props) {
  const { className, frame12121Props, frame12122Props } = props;

  return (
    <div className={`frame-117-1 ${className || ""}`}>
      <div className="frame-116-3">
        <img className="rectangle-12751-14" src="/img/rectangle-12751-9@2x.png" alt="Rectangle 12751" />
        <Group484 />
      </div>
      <Frame1212 rectangle12751={frame12121Props.rectangle12751} />
      <Frame1212 rectangle12751={frame12122Props.rectangle12751} />
    </div>
  );
}

export default Frame117;
