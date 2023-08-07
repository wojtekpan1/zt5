import React from "react";
import Header3 from "../Header3";
import Frame893 from "../Frame893";
import Cards4 from "../Cards4";
import "./Banner.css";

function Banner(props) {
  const { header3Props } = props;

  return (
    <div className="banner-18">
      <div className="overlap-group5-3">
        <Header3 logo={header3Props.logo} />
        <Frame893 />
        <Cards4 />
      </div>
    </div>
  );
}

export default Banner;
