import React from "react";
import Frame1212 from "../Frame1212";
import "./List1.css";

function List1(props) {
  const { className, frame12121Props, frame12122Props, frame12123Props } = props;

  return (
    <div className={`list-9 ${className || ""}`}>
      <Frame1212 rectangle12751={frame12121Props.rectangle12751} />
      <Frame1212 rectangle12751={frame12122Props.rectangle12751} />
      <Frame1212 rectangle12751={frame12123Props.rectangle12751} />
    </div>
  );
}

export default List1;
