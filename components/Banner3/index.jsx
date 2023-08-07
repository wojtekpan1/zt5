import React from "react";
import Frame893 from "../Frame893";
import Cards4 from "../Cards4";
import Header3 from "../Header3";
import "./Banner3.css";

function Banner3(props) {
  const { logoIcon, frame893Props, cards4Props, header3Props } = props;

  return (
    <div className="container-center-horizontal">
      <div className="banner-4-1 screen">
        <div className="overlap-group5-10">
          <div className="hans-reniers-l-qgjcmy5qc-m-unsplash-3"></div>
          <img className="logo-icon" src={logoIcon} alt="Logo Icon" />
          <Frame893 className={frame893Props.className} />
          <Cards4 className={cards4Props.className} />
          <Header3 logo={header3Props.logo} className={header3Props.className} />
        </div>
      </div>
    </div>
  );
}

export default Banner3;
