import React from "react";
import { Link } from "react-router-dom";
import Background from "../Background";
import Frame107 from "../Frame107";
import Header from "../Header";
import CTA3 from "../CTA3";
import CTA from "../CTA";
import RightContent3 from "../RightContent3";
import Container5 from "../Container5";
import Testimonials from "../Testimonials";
import Footer from "../Footer";
import "./PopulationHealth.css";

function PopulationHealth(props) {
  const {
    place,
    solutions,
    populationHealth,
    catalystS4,
    aboutCatalystS4C,
    howCanItHelpYou,
    catalystResearch,
    loremIpsumDolorSi1,
    loremIpsumDolorSi2,
    backgroundProps,
    frame107Props,
    headerProps,
    cTA31Props,
    cTA1Props,
    rightContent31Props,
    rightContent32Props,
    cTA32Props,
    cTA2Props,
    container5Props,
    testimonialsProps,
    footerProps,
  } = props;

  return (
    <div className="population-health-10 screen">
      <div className="banner-13">
        <div className="overlap-group-24">
          <Background src={backgroundProps.src} />
          <div className="breadcrumb-11 notoserif-bold-parchment-16px">
            <div className="place-11">{place}</div>
            <img className="caret-circle-right-24" src="/img/caretcircleright.svg" alt="CaretCircleRight" />
            <Link to="/solutions">
              <div className="solutions-19 notoserif-bold-parchment-16px">{solutions}</div>
            </Link>
            <img className="caret-circle-right-24" src="/img/caretcircleright.svg" alt="CaretCircleRight" />
            <div className="population-health-11">{populationHealth}</div>
          </div>
          <Frame107 frame88Props={frame107Props.frame88Props} />
          <Header className={headerProps.className} />
        </div>
      </div>
      <div className="solution-9">
        <div className="content-50">
          <div className="t-content">
            <div className="catalyst-1 notoserif-black-pine-green-48px">{catalystS4}</div>
            <p className="about-catalyst-s4-c notoserif-medium-shark-18px">{aboutCatalystS4C}</p>
            <p className="how-can-it-help-you notoserif-medium-shark-18px">{howCanItHelpYou}</p>
            <Link to="/popup-2">
              <div className="frame-115">
                <CTA3 className={cTA31Props.className} />
                <CTA className={cTA1Props.className}>{cTA1Props.children}</CTA>
              </div>
            </Link>
          </div>
          <RightContent3
            rightContent={rightContent31Props.rightContent}
            rectangle32={rightContent31Props.rectangle32}
          />
        </div>
      </div>
      <div className="solution-9">
        <div className="content-50">
          <RightContent3
            rightContent={rightContent32Props.rightContent}
            rectangle32={rightContent32Props.rectangle32}
            className={rightContent32Props.className}
          />
          <div className="t-content">
            <div className="catalyst-1 notoserif-black-pine-green-48px">{catalystResearch}</div>
            <p className="lorem-ipsum-dolor-si-68 notoserif-medium-shark-18px">{loremIpsumDolorSi1}</p>
            <p className="lorem-ipsum-dolor-si-69 notoserif-medium-shark-18px">{loremIpsumDolorSi2}</p>
            <div className="frame-115-1">
              <CTA3 className={cTA32Props.className} />
              <CTA className={cTA2Props.className}>{cTA2Props.children}</CTA>
            </div>
          </div>
        </div>
      </div>
      <Container5
        wantATailoredSolutionForYou={container5Props.wantATailoredSolutionForYou}
        icon={container5Props.icon}
      />
      <Testimonials
        ourClientsWords={testimonialsProps.ourClientsWords}
        cardTestimonials21Props={testimonialsProps.cardTestimonials21Props}
        cardTestimonials22Props={testimonialsProps.cardTestimonials22Props}
        cardTestimonials23Props={testimonialsProps.cardTestimonials23Props}
        cardTestimonials24Props={testimonialsProps.cardTestimonials24Props}
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

export default PopulationHealth;
