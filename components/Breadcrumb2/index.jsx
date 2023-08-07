import React from "react";
import "./Breadcrumb2.css";

function Breadcrumb2(props) {
  const { ourStory } = props;

  return (
    <div className="breadcrumb-9 notoserif-bold-parchment-16px">
      <div className="place-9">Home</div>
      <img className="caret-circle-right-20" src="/img/caretcircleright.svg" alt="CaretCircleRight" />
      <div className="our-story-18">{ourStory}</div>
    </div>
  );
}

export default Breadcrumb2;
