import React from "react";
import Header from "../Header";
import Frame89 from "../Frame89";
import Cards from "../Cards";
import Container from "../Container";
import Container2 from "../Container2";
import Tab from "../Tab";
import Tab2 from "../Tab2";
import Card from "../Card";
import CTA2 from "../CTA2";
import Container7 from "../Container7";
import Container3 from "../Container3";
import Container4 from "../Container4";
import Container5 from "../Container5";
import Footer from "../Footer";
import "./HomeV12.css";

function HomeV12(props) {
  const {
    banner,
    ourSolutions,
    loremIpsumDolorSi,
    populationHealth,
    hospitalsClinics,
    catalystS4,
    catalystResearch,
    headerProps,
    containerProps,
    container2Props,
    tabProps,
    cTA2Props,
    container7Props,
    container5Props,
    footerProps,
  } = props;

  return (
    <div className="homeu95v1-2 screen">
      <div className="banner-11" style={{ backgroundImage: `url(${banner})` }}>
        <div className="overlap-group5-1">
          <Header className={headerProps.className} />
          <Frame89 />
          <Cards />
        </div>
      </div>
      <Container rightContentProps={containerProps.rightContentProps} />
      <Container2 rightContent2Props={container2Props.rightContent2Props} />
      <div className="container-18">
        <div className="content-46">
          <div className="our-solutions notoserif-black-pine-green-48px">{ourSolutions}</div>
          <p className="lorem-ipsum-dolor-si-63 notoserif-medium-shark-24px">{loremIpsumDolorSi}</p>
          <div className="tabs-4">
            <div className="tab-10">
              <div className="population-health-9 notoserif-bold-shark-18px">{populationHealth}</div>
            </div>
            <div className="tab-11">
              <div className="hospitals-clinics-2 notoserif-medium-shark-18px">{hospitalsClinics}</div>
            </div>
            <Tab>{tabProps.children}</Tab>
            <Tab2 />
          </div>
          <div className="cards-29">
            <div className="card-1-4">
              <Card />
              <div className="card-1-5">
                <img className="icon-link-2" src="/img/bandaids-2.svg" alt="icon-link" />
                <div className="catalyst notoserif-bold-white-24px">{catalystS4}</div>
              </div>
            </div>
            <div className="card-2-3">
              <img className="flask-2" src="/img/flask-2.svg" alt="Flask" />
              <div className="catalyst notoserif-bold-spring-wood-24px">{catalystResearch}</div>
            </div>
          </div>
          <CTA2>{cTA2Props.children}</CTA2>
        </div>
      </div>
      <Container7 cards3Props={container7Props.cards3Props} cTA2Props={container7Props.cTA2Props} />
      <Container3 />
      <Container4 />
      <Container5
        wantATailoredSolutionForYou={container5Props.wantATailoredSolutionForYou}
        icon={container5Props.icon}
      />
      <Footer
        logo={footerProps.logo}
        iconInstagram={footerProps.iconInstagram}
        youtube={footerProps.youtube}
        twitterProps={footerProps.twitterProps}
      />
    </div>
  );
}

export default HomeV12;
