import React from "react";
import Banner from "../Banner";
import Container8 from "../Container8";
import Container9 from "../Container9";
import Tabs2 from "../Tabs2";
import Card12 from "../Card12";
import Card22 from "../Card22";
import Card9 from "../Card9";
import Card32 from "../Card32";
import CTA4 from "../CTA4";
import Container14 from "../Container14";
import Container11 from "../Container11";
import Container12 from "../Container12";
import Container13 from "../Container13";
import Footer4 from "../Footer4";
import "./HomeV16.css";

function HomeV16(props) {
  const {
    spanText1,
    spanText2,
    bannerProps,
    card12Props,
    card22Props,
    card9Props,
    cTA4Props,
    container14Props,
    container13Props,
    footer4Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="homeu95v12 screen">
        <Banner header3Props={bannerProps.header3Props} />
        <Container8 />
        <Container9 />
        <div className="container-45">
          <div className="our-solutions-7 notoserif-black-pine-green-48px">
            <span className="notoserif-black-pine-green-48px">{spanText1}</span>
          </div>
          <p className="lorem-ipsum-dolor-si-207 notoserif-medium-shark-24px">
            <span className="notoserif-medium-shark-24px">{spanText2}</span>
          </p>
          <Tabs2 />
          <div className="cards-50">
            <Card12 bandaids={card12Props.bandaids} className={card12Props.className} />
            <div className="card-container-1">
              <Card22 flask={card22Props.flask} className={card22Props.className} />
              <Card9 className={card9Props.className} />
            </div>
            <Card32 />
          </div>
          <CTA4>{cTA4Props.children}</CTA4>
        </div>
        <Container14 cards3Props={container14Props.cards3Props} cTA4Props={container14Props.cTA4Props} />
        <Container11 />
        <Container12 />
        <Container13 contentProps={container13Props.contentProps} />
        <Footer4
          logo={footer4Props.logo}
          instagram={footer4Props.instagram}
          youtube={footer4Props.youtube}
          twitter21Props={footer4Props.twitter21Props}
          twitter22Props={footer4Props.twitter22Props}
        />
      </div>
    </div>
  );
}

export default HomeV16;
