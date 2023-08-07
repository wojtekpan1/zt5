import React from "react";
import Header from "../Header";
import Frame89 from "../Frame89";
import Cards from "../Cards";
import Container from "../Container";
import Container2 from "../Container2";
import Tabs from "../Tabs";
import Card1 from "../Card1";
import Card2 from "../Card2";
import Card from "../Card";
import Card3 from "../Card3";
import CTA2 from "../CTA2";
import Container7 from "../Container7";
import Container3 from "../Container3";
import Container4 from "../Container4";
import Container5 from "../Container5";
import Footer from "../Footer";
import "./HomeV13.css";

function HomeV13(props) {
  const {
    banner,
    ourSolutions,
    loremIpsumDolorSi,
    headerProps,
    containerProps,
    container2Props,
    tabsProps,
    card1Props,
    card2Props,
    cTA2Props,
    container7Props,
    container5Props,
    footerProps,
  } = props;

  return (
    <div className="homeu95v1-3 screen">
      <div className="banner-12" style={{ backgroundImage: `url(${banner})` }}>
        <div className="overlap-group5-2">
          <Header className={headerProps.className} />
          <Frame89 />
          <Cards />
        </div>
      </div>
      <Container rightContentProps={containerProps.rightContentProps} />
      <Container2 rightContent2Props={container2Props.rightContent2Props} />
      <div className="container-21">
        <div className="content-49">
          <div className="our-solutions-1 notoserif-black-pine-green-48px">{ourSolutions}</div>
          <p className="lorem-ipsum-dolor-si-66 notoserif-medium-shark-24px">{loremIpsumDolorSi}</p>
          <Tabs tab1Props={tabsProps.tab1Props} tab2Props={tabsProps.tab2Props} />
          <div className="cards-35">
            <div className="card-1-6">
              <Card1 className={card1Props.className} />
            </div>
            <div className="frame-184968">
              <div className="card-container">
                <Card2 className={card2Props.className} />
                <Card />
              </div>
            </div>
            <Card3 />
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

export default HomeV13;
