import React from "react";
import { Link } from "react-router-dom";
import Background from "../Background";
import Frame88 from "../Frame88";
import Header from "../Header";
import Frame93 from "../Frame93";
import Group96 from "../Group96";
import Container5 from "../Container5";
import List from "../List";
import Footer from "../Footer";
import "./CatalystS4.css";

function CatalystS4(props) {
  const {
    navbarLinkPlace,
    navbarLinkSolutions,
    navbarLinkPopulationHealth,
    navbarLinkCatalystS4,
    spanText1,
    spanText2,
    todayPathogenDetec,
    number1,
    simultaneousReview,
    number2,
    diagnosticDecisionSupport,
    number3,
    nearRealTimeUpdate,
    number4,
    integrateIntoExistingWorkflow,
    number5,
    noHardwareInstallationNeeded,
    howItWorks,
    earlyPathogenDetec,
    collectPatientSymp,
    text6,
    whoUseThis,
    image27,
    image30,
    image29,
    image31,
    industryPublications,
    spanText3,
    spanText4,
    catalystResearch,
    backgroundProps,
    frame88Props,
    group961Props,
    group962Props,
    group963Props,
    group964Props,
    container5Props,
    listProps,
    footerProps,
  } = props;

  return (
    <div className="catalyst-s4-4 screen">
      <div className="banner-15">
        <div className="overlap-group-27">
          <Background src={backgroundProps.src} />
          <div className="navbar notoserif-bold-parchment-16px">
            <div className="navbar-link-place">{navbarLinkPlace}</div>
            <img className="caret-circle-right-26" src="/img/caretcircleright.svg" alt="CaretCircleRight" />
            <Link to="/solutions">
              <div className="navbar-link notoserif-bold-parchment-16px">{navbarLinkSolutions}</div>
            </Link>
            <img className="caret-circle-right-26" src="/img/caretcircleright.svg" alt="CaretCircleRight" />
            <Link to="/population-health">
              <div className="navbar-link notoserif-bold-parchment-16px">{navbarLinkPopulationHealth}</div>
            </Link>
            <img className="caret-circle-right-26" src="/img/caretcircleright.svg" alt="CaretCircleRight" />
            <div className="navbar-link-catalyst-s4">{navbarLinkCatalystS4}</div>
          </div>
          <div className="frame-107-9">
            <Frame88 title={frame88Props.title} loremIpsumDolorSi={frame88Props.loremIpsumDolorSi} />
          </div>
          <Header />
        </div>
      </div>
      <div className="why">
        <div className="why-1">
          <div className="flex-col-11">
            <div className="why-catalyst-s4 notoserif-bold-pine-green-40px">
              <span className="notoserif-bold-pine-green-40px">{spanText1}</span>
              <span className="notoserif-black-pine-green-40px">{spanText2}</span>
            </div>
            <p className="today-pathogen-detec notoserif-medium-black-20px">{todayPathogenDetec}</p>
            <div className="group-92">
              <div className="group-89">
                <div className="overlap-group-28">
                  <div className="number-15 notoserif-bold-shark-60px">{number1}</div>
                  <p className="simultaneous-review notoserif-medium-shark-24px">{simultaneousReview}</p>
                </div>
                <div className="overlap-group-26">
                  <div className="number-15 notoserif-bold-shark-60px">{number2}</div>
                  <div className="diagnostic-decision-support notoserif-medium-shark-24px">
                    {diagnosticDecisionSupport}
                  </div>
                </div>
                <div className="overlap-group-26">
                  <div className="number-15 notoserif-bold-shark-60px">{number3}</div>
                  <div className="near-real-time-update notoserif-medium-shark-24px">{nearRealTimeUpdate}</div>
                </div>
              </div>
              <div className="group-90">
                <div className="overlap-group-26">
                  <div className="number-15 notoserif-bold-shark-60px">{number4}</div>
                  <div className="integrate-into-existing-workflow notoserif-medium-shark-24px">
                    {integrateIntoExistingWorkflow}
                  </div>
                </div>
                <div className="overlap-group-26">
                  <div className="number-15 notoserif-bold-shark-60px">{number5}</div>
                  <div className="no-hardware-installation-needed notoserif-medium-shark-24px">
                    {noHardwareInstallationNeeded}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="how-it-works">
        <div className="flex-col-12">
          <div className="how-it-works-1 notoserif-bold-parchment-40px">{howItWorks}</div>
          <p className="early-pathogen-detec notoserif-medium-white-20px">{earlyPathogenDetec}</p>
          <div className="overlap-group3-4">
            <div className="group-94">
              <img className="ellipse-29" src="/img/ellipse-29.svg" alt="Ellipse 29" />
              <p className="collect-patient-symp notoserif-bold-white-36px">{collectPatientSymp}</p>
            </div>
            <div className="text-6-1 notoserif-semi-bold-white-24px">{text6}</div>
          </div>
        </div>
        <Frame93 />
      </div>
      <div className="who-use">
        <div className="who-use-this notoserif-bold-pine-green-40px">{whoUseThis}</div>
        <div className="clients-18">
          <div className="client-container">
            <div className="client">
              <div className="group-95">
                <img className="image-27" src={image27} alt="image 27" />
              </div>
              <Group96 client1={group961Props.client1} />
            </div>
            <div className="client">
              <div className="group-95-1">
                <img className="image-30" src={image30} alt="image 30" />
              </div>
              <Group96 client1={group962Props.client1} />
            </div>
          </div>
          <div className="client-container-1">
            <div className="client">
              <div className="group-95-2">
                <img className="image-29" src={image29} alt="image 29" />
              </div>
              <Group96 client1={group963Props.client1} />
            </div>
            <div className="client">
              <div className="group-95-3">
                <img className="image-31" src={image31} alt="image 31" />
              </div>
              <Group96 client1={group964Props.client1} />
            </div>
          </div>
        </div>
      </div>
      <Container5
        wantATailoredSolutionForYou={container5Props.wantATailoredSolutionForYou}
        icon={container5Props.icon}
        className={container5Props.className}
      />
      <div className="catalyst-s4-item">
        <div className="industry-publications notoserif-bold-pine-green-40px">{industryPublications}</div>
        <List
          className={listProps.className}
          frame1211Props={listProps.frame1211Props}
          frame1212Props={listProps.frame1212Props}
        />
      </div>
      <div className="catalyst-s4-item">
        <p className="other-solutions-in-population-health notoserif-bold-pine-green-40px">
          <span className="notoserif-bold-pine-green-40px">{spanText3}</span>
          <span className="notoserif-black-pine-green-40px">{spanText4}</span>
        </p>
        <div className="card-58">
          <img className="flask-3" src="/img/flask-4.svg" alt="Flask" />
          <div className="catalyst-research-2 notoserif-bold-shark-24px">{catalystResearch}</div>
        </div>
      </div>
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

export default CatalystS4;
