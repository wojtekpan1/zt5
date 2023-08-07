import React from "react";
import Frame88 from "../Frame88";
import "./Frame107.css";

function Frame107(props) {
  const { frame88Props } = props;

  return (
    <div className="frame-107">
      <Frame88 title={frame88Props.title} loremIpsumDolorSi={frame88Props.loremIpsumDolorSi} />
    </div>
  );
}

export default Frame107;
