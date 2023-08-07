import React from "react";
import "./Category12.css";

function Category12(props) {
  const { spanText1, className } = props;

  return (
    <div className={`category-14-1 ${className || ""}`}>
      <div className="population-health-37 notoserif-semi-bold-shark-18px">
        <span className="span-364 notoserif-semi-bold-shark-18px">{spanText1}</span>
      </div>
      <p className="lorem-ipsum-dolor-si-249 notoserif-normal-shark-14px">
        <span className="span-364 notoserif-normal-shark-14px">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </span>
      </p>
    </div>
  );
}

export default Category12;
