import React from "react";
import Header3 from "../Header3";
import Frame893 from "../Frame893";
import Cards4 from "../Cards4";
import "./Banner6.css";

function Banner6(props) {
  const { banner, header3Props } = props;

  return (
    <div className="container-center-horizontal">
      <div className="banner3 screen" style={{ backgroundImage: `url(${banner})` }}>
        <div className="overlap-group5-13">
          <Header3 logo={header3Props.logo} />
          <Frame893 />
          <Cards4 />
        </div>
      </div>
    </div>
  );
}

export default Banner6;
