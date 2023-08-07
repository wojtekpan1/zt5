import React from "react";
import "./Frame88.css";

function Frame88(props) {
  const { title, loremIpsumDolorSi } = props;

  return (
    <div className="frame-88">
      <h1 className="title notoserif-black-pine-green-60px">{title}</h1>
      <p className="lorem-ipsum-dolor-si notoserif-medium-shark-18px">{loremIpsumDolorSi}</p>
    </div>
  );
}

export default Frame88;
