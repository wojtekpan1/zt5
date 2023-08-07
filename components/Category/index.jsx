import React from "react";
import "./Category.css";

function Category(props) {
  const { populationHealth, className } = props;

  return (
    <article className={`category-5 ${className || ""}`}>
      <div className="group-1-1">
        <div className="population-health-2 notoserif-semi-bold-shark-18px">{populationHealth}</div>
        <p className="lorem-ipsum-dolor-si-38 notoserif-normal-shark-14px">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <img className="caret-right" src="/img/caretright.svg" alt="CaretRight" />
    </article>
  );
}

export default Category;
