import React from "react";
import Frame893 from "../Frame893";
import Cards4 from "../Cards4";
import Header3 from "../Header3";
import "./Banner5.css";

function Banner5(props) {
  const { banner, logoIcon, frame893Props, cards4Props, header3Props } = props;

  return (
    <div className="container-center-horizontal">
      <div className="banner2 screen" style={{ backgroundImage: `url(${banner})` }}>
        <div className="overlap-group5-12">
          <div className="hans-reniers-l-qgjcmy5qc-m-unsplash-2-23"></div>
          <img className="logo-icon-2" src={logoIcon} alt="Logo Icon" />
          <Frame893 className={frame893Props.className} />
          <Cards4 className={cards4Props.className} />
          <Header3 logo={header3Props.logo} className={header3Props.className} />
        </div>
      </div>
    </div>
  );
}

export default Banner5;
