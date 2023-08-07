import React from "react";
import Group482 from "../Group482";
import Frame121 from "../Frame121";
import "./List.css";

function List(props) {
  const { className, frame1211Props, frame1212Props } = props;

  return (
    <div className={`list-2 ${className || ""}`}>
      <div className="frame-116">
        <Group482 />
        <img className="rectangle-12751-3" src="/img/rectangle-12751-1.svg" alt="Rectangle 12751" />
      </div>
      <Frame121 rectangle12751={frame1211Props.rectangle12751} />
      <Frame121 rectangle12751={frame1212Props.rectangle12751} />
    </div>
  );
}

export default List;
