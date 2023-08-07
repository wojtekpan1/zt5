import React from "react";
import Header3 from "../Header3";
import Frame882 from "../Frame882";
import Button2 from "../Button2";
import Level2 from "../Level2";
import Group72 from "../Group72";
import CantFind2 from "../CantFind2";
import Cards4 from "../Cards4";
import Container8 from "../Container8";
import Container9 from "../Container9";
import Tabs2 from "../Tabs2";
import Card9 from "../Card9";
import Card22 from "../Card22";
import Card32 from "../Card32";
import CTA4 from "../CTA4";
import Container10 from "../Container10";
import Container11 from "../Container11";
import Container12 from "../Container12";
import Container13 from "../Container13";
import Footer4 from "../Footer4";
import "./HomeMenu.css";

function HomeMenu(props) {
  const {
    banner,
    line1,
    spanText1,
    spanText2,
    iconLink,
    spanText3,
    image17,
    header3Props,
    frame882Props,
    button2Props,
    level2Props,
    group721Props,
    group722Props,
    card22Props,
    cTA4Props,
    container10Props,
    container13Props,
    footer4Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="home-menu screen">
        <div className="banner-22" style={{ backgroundImage: `url(${banner})` }}>
          <div className="overlap-group5-7">
            <Header3 logo={header3Props.logo} />
            <div className="overlap-group-79">
              <Frame882 className={frame882Props.className} />
              <Button2 className={button2Props.className} />
              <div className="dropdowns-expanded">
                <div className="flex-row-56">
                  <Level2
                    category11Props={level2Props.category11Props}
                    category12Props={level2Props.category12Props}
                    category13Props={level2Props.category13Props}
                    category14Props={level2Props.category14Props}
                  />
                  <img className="line-1-5" src={line1} alt="Line 1" />
                  <div className="group-10-8">
                    <Group72 spanText1={group721Props.spanText1} />
                    <Group72 spanText1={group722Props.spanText1} className={group722Props.className} />
                  </div>
                </div>
                <CantFind2 />
              </div>
            </div>
            <Cards4 />
          </div>
        </div>
        <Container8 />
        <Container9 />
        <div className="container-46">
          <div className="our-solutions-9 notoserif-black-pine-green-48px">
            <span className="notoserif-black-pine-green-48px">{spanText1}</span>
          </div>
          <p className="lorem-ipsum-dolor-si-212 notoserif-medium-shark-24px">
            <span className="notoserif-medium-shark-24px">{spanText2}</span>
          </p>
          <Tabs2 />
          <div className="cards-54">
            <div className="card-hovered-1">
              <div className="card-112">
                <div className="overlap-group-80">
                  <img className="icon-link-4" src={iconLink} alt="icon-link" />
                  <div className="catalyst-value-solutions-8 notoserif-bold-white-24px">
                    <span className="notoserif-bold-white-24px">{spanText3}</span>
                  </div>
                  <img className="image-17-1" src={image17} alt="image 17" />
                </div>
              </div>
              <Card9 />
            </div>
            <Card22 flask={card22Props.flask} />
            <Card32 />
          </div>
          <CTA4>{cTA4Props.children}</CTA4>
        </div>
        <Container10 cards2Props={container10Props.cards2Props} cTA4Props={container10Props.cTA4Props} />
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

export default HomeMenu;
