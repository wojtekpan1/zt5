import React from "react";
import "./Category2.css";

function Category2(props) {
  const { populationHealth, className } = props;

  return (
    <article className={`category-6-1 ${className || ""}`}>
      <div className="population-health-8 notoserif-semi-bold-shark-18px">{populationHealth}</div>
      <p className="lorem-ipsum-dolor-si-49 notoserif-normal-shark-14px">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
    </article>
  );
}

export default Category2;
