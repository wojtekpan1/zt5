import React from "react";
import Banner from "../Banner";
import Container8 from "../Container8";
import Container9 from "../Container9";
import Card9 from "../Card9";
import CTA4 from "../CTA4";
import Container14 from "../Container14";
import Container11 from "../Container11";
import Container12 from "../Container12";
import Container13 from "../Container13";
import Footer4 from "../Footer4";
import "./HomeV15.css";

function HomeV15(props) {
  const {
    spanText1,
    spanText2,
    spanText3,
    spanText4,
    spanText5,
    spanText6,
    bandaids,
    spanText7,
    flask,
    spanText8,
    bannerProps,
    cTA4Props,
    container14Props,
    container13Props,
    footer4Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="homeu95v1 screen">
        <Banner header3Props={bannerProps.header3Props} />
        <Container8 />
        <Container9 />
        <div className="container-42">
          <div className="our-solutions-6 notoserif-black-pine-green-48px">
            <span className="notoserif-black-pine-green-48px">{spanText1}</span>
          </div>
          <p className="lorem-ipsum-dolor-si-203 notoserif-medium-shark-24px">
            <span className="notoserif-medium-shark-24px">{spanText2}</span>
          </p>
          <div className="tabs-9">
            <div className="population-health-25 notoserif-bold-shark-18px">
              <span className="notoserif-bold-shark-18px">{spanText3}</span>
            </div>
            <div className="hospitals-clinics-10 notoserif-medium-shark-18px">
              <span className="notoserif-medium-shark-18px">{spanText4}</span>
            </div>
            <div className="physician-support-12 notoserif-medium-shark-18px">
              <span className="notoserif-medium-shark-18px">{spanText5}</span>
            </div>
            <div className="patient-engagement-13 notoserif-medium-shark-18px">
              <span className="notoserif-medium-shark-18px">{spanText6}</span>
            </div>
          </div>
          <div className="cards-49">
            <div className="card-1-10">
              <div className="card-1-11">
                <img className="bandaids-2" src={bandaids} alt="Bandaids" />
                <div className="catalyst-s4-11 notoserif-bold-white-24px">
                  <span className="notoserif-bold-white-24px">{spanText7}</span>
                </div>
              </div>
              <Card9 />
            </div>
            <div className="card-2-6">
              <img className="flask-7" src={flask} alt="Flask" />
              <div className="catalyst-research-7 notoserif-bold-spring-wood-24px">
                <span className="notoserif-bold-spring-wood-24px">{spanText8}</span>
              </div>
            </div>
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

export default HomeV15;
