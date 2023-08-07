import React from "react";
import "./Group35.css";

function Group35(props) {
  const { spanText1, className } = props;

  return (
    <div className={`group-3-3-1 ${className || ""}`}>
      <div className="in-the-news-2 inter-normal-black-36px">
        <span className="span-194 inter-normal-black-36px">{spanText1}</span>
      </div>
      <div className="read-more-7 inter-normal-black-16px">
        <span className="span-194 inter-normal-black-16px">Read more</span>
      </div>
      <img className="arrow-1" src="/img/arrow-1-12@2x.png" alt="Arrow 1" />
    </div>
  );
}

export default Group35;
