import React from "react";
import Group35 from "../Group35";
import Frame39 from "../Frame39";
import "./Group107.css";

function Group107(props) {
  const { group35Props, frame391Props, frame392Props } = props;

  return (
    <div className="group-10-7">
      <Group35 spanText1={group35Props.spanText1} className={group35Props.className} />
      <div className="frame-container-3">
        <Frame39 />
        <Frame39 className={frame391Props.className} />
        <Frame39 className={frame392Props.className} />
      </div>
    </div>
  );
}

export default Group107;
