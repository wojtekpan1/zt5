import React from "react";
import Frame121 from "../Frame121";
import "./List2.css";

function List2(props) {
  const { className, frame1211Props, frame1212Props, frame1213Props } = props;

  return (
    <div className={`list-3-1 ${className || ""}`}>
      <Frame121 rectangle12751={frame1211Props.rectangle12751} />
      <Frame121 rectangle12751={frame1212Props.rectangle12751} />
      <Frame121 rectangle12751={frame1213Props.rectangle12751} />
    </div>
  );
}

export default List2;
