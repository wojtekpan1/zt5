import React from "react";
import "./Category1.css";

function Category1(props) {
  const { spanText1, className } = props;

  return (
    <div className={`category-7-1 ${className || ""}`}>
      <div className="group-1-8">
        <div className="population-health-27 notoserif-semi-bold-shark-18px">
          <span className="span-313 notoserif-semi-bold-shark-18px">{spanText1}</span>
        </div>
        <p className="lorem-ipsum-dolor-si-213 notoserif-normal-shark-14px">
          <span className="span-313 notoserif-normal-shark-14px">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </span>
        </p>
      </div>
      <img className="caret-right-5" src="/img/caretright-9@2x.png" alt="CaretRight" />
    </div>
  );
}

export default Category1;
