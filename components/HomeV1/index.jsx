import React from "react";
import Header from "../Header";
import Frame89 from "../Frame89";
import Cards from "../Cards";
import Container from "../Container";
import Container2 from "../Container2";
import Tabs from "../Tabs";
import Card from "../Card";
import Card1 from "../Card1";
import Card2 from "../Card2";
import Card3 from "../Card3";
import CTA2 from "../CTA2";
import Cards2 from "../Cards2";
import Container3 from "../Container3";
import Container4 from "../Container4";
import Container5 from "../Container5";
import Footer from "../Footer";
import "./HomeV1.css";

function HomeV1(props) {
  const {
    banner,
    ourSolutions,
    loremIpsumDolorSi1,
    ourPartners,
    loremIpsumDolorSi2,
    caretcircleleft,
    caretcircleright,
    headerProps,
    containerProps,
    container2Props,
    tabsProps,
    cTA21Props,
    cards2Props,
    cTA22Props,
    container5Props,
    footerProps,
  } = props;

  return (
    <div className="homeu95v1-1 screen">
      <div className="banner-2" style={{ backgroundImage: `url(${banner})` }}>
        <div className="overlap-group5">
          <Header className={headerProps.className} />
          <Frame89 />
          <Cards />
        </div>
      </div>
      <Container rightContentProps={containerProps.rightContentProps} />
      <Container2 rightContent2Props={container2Props.rightContent2Props} />
      <div className="container">
        <div className="content-17">
          <div className="our notoserif-black-pine-green-48px">{ourSolutions}</div>
          <p className="lorem-ipsum-dolor-si-13 notoserif-medium-shark-24px">{loremIpsumDolorSi1}</p>
          <Tabs tab1Props={tabsProps.tab1Props} tab2Props={tabsProps.tab2Props} />
          <div className="cards-17">
            <div className="card-1-1">
              <Card />
              <Card1 />
            </div>
            <Card2 />
            <Card3 />
          </div>
          <CTA2>{cTA21Props.children}</CTA2>
        </div>
      </div>
      <div className="container">
        <div className="content-17">
          <div className="our notoserif-black-pine-green-48px">{ourPartners}</div>
          <p className="lorem-ipsum-dolor-si-13 notoserif-medium-shark-24px">{loremIpsumDolorSi2}</p>
          <Cards2
            screenshot20230109At8461={cards2Props.screenshot20230109At8461}
            card4Props={cards2Props.card4Props}
            card5Props={cards2Props.card5Props}
            card6Props={cards2Props.card6Props}
            card7Props={cards2Props.card7Props}
            card8Props={cards2Props.card8Props}
          />
          <img className="caret-circle-left" src={caretcircleleft} alt="CaretCircleLeft" />
          <CTA2>{cTA22Props.children}</CTA2>
        </div>
        <img className="caret-circle-right-5" src={caretcircleright} alt="CaretCircleRight" />
      </div>
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
        className={footerProps.className}
        twitterProps={footerProps.twitterProps}
      />
    </div>
  );
}

export default HomeV1;
