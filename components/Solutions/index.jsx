import React from "react";
import { Link } from "react-router-dom";
import Background from "../Background";
import Frame107 from "../Frame107";
import Header from "../Header";
import Container5 from "../Container5";
import Testimonials from "../Testimonials";
import Footer from "../Footer";
import "./Solutions.css";

function Solutions(props) {
  const {
    place,
    solutions,
    rectangle321,
    populationHealth,
    catalystS4,
    catalystResearch,
    rectangle322,
    hospitalsAndClinics,
    catalystValueSolutions,
    sectra,
    catalystTelemed,
    rectangle323,
    physicianSupport,
    catalystEncounter,
    aircoder,
    curematch,
    rectangle324,
    patientEngagement,
    catalystEngage,
    catalystTriage,
    genieHealth,
    backgroundProps,
    frame107Props,
    container5Props,
    testimonialsProps,
    footerProps,
  } = props;

  return (
    <div className="solutions-17 screen">
      <div className="banner-4">
        <div className="overlap-group-11">
          <Background src={backgroundProps.src} className={backgroundProps.className} />
          <div className="breadcrumb-5 notoserif-bold-parchment-16px">
            <div className="place-5">{place}</div>
            <img className="caret-circle-right-12" src="/img/caretcircleright.svg" alt="CaretCircleRight" />
            <div className="solutions-18">{solutions}</div>
          </div>
          <Frame107 frame88Props={frame107Props.frame88Props} />
          <Header />
        </div>
      </div>
      <div className="list">
        <div className="content-36">
          <Link to="/population-health">
            <div className="left-content-7">
              <img className="rectangle-32-3" src={rectangle321} alt="Rectangle 32" />
              <div className="population-health-7 notoserif-black-pine-green-38px">{populationHealth}</div>
              <Link to="/catalyst-s4">
                <div className="link-1">
                  <div className="catalyst-s4-2 notoserif-bold-shark-18px">{catalystS4}</div>
                  <img className="caret-circle-right-12" src="/img/caretcircleright-6.svg" alt="CaretCircleRight" />
                </div>
              </Link>
              <div className="link">
                <div className="catalyst-research notoserif-bold-shark-18px">{catalystResearch}</div>
                <img className="caret-circle-right-12" src="/img/caretcircleright-6.svg" alt="CaretCircleRight" />
              </div>
            </div>
          </Link>
          <div className="left-content-6">
            <img className="rectangle-32-3" src={rectangle322} alt="Rectangle 32" />
            <div className="hospitals-and-clinics notoserif-black-pine-green-38px">{hospitalsAndClinics}</div>
            <div className="link">
              <div className="catalyst-value-solutions-2 notoserif-bold-shark-18px">{catalystValueSolutions}</div>
              <img className="caret-circle-right-12" src="/img/caretcircleright-6.svg" alt="CaretCircleRight" />
            </div>
            <div className="link">
              <div className="sectra-2 notoserif-bold-shark-18px">{sectra}</div>
              <img className="caret-circle-right-12" src="/img/caretcircleright-6.svg" alt="CaretCircleRight" />
            </div>
            <div className="link">
              <div className="catalyst-telemed-2 notoserif-bold-shark-18px">{catalystTelemed}</div>
              <img className="caret-circle-right-12" src="/img/caretcircleright-6.svg" alt="CaretCircleRight" />
            </div>
          </div>
        </div>
        <div className="content-37">
          <div className="left-content-6">
            <img className="rectangle-32-3" src={rectangle323} alt="Rectangle 32" />
            <div className="physician-support-3 notoserif-black-pine-green-38px">{physicianSupport}</div>
            <div className="link">
              <div className="catalyst-encounter notoserif-bold-shark-18px">{catalystEncounter}</div>
              <img className="caret-circle-right-12" src="/img/caretcircleright-6.svg" alt="CaretCircleRight" />
            </div>
            <div className="link">
              <div className="aircoder notoserif-bold-shark-18px">{aircoder}</div>
              <img className="caret-circle-right-12" src="/img/caretcircleright-6.svg" alt="CaretCircleRight" />
            </div>
            <div className="link">
              <div className="curematch notoserif-bold-shark-18px">{curematch}</div>
              <img className="caret-circle-right-12" src="/img/caretcircleright-6.svg" alt="CaretCircleRight" />
            </div>
          </div>
          <div className="left-content-6">
            <img className="rectangle-32-3" src={rectangle324} alt="Rectangle 32" />
            <div className="patient-engagement-3 notoserif-black-pine-green-38px">{patientEngagement}</div>
            <div className="link">
              <div className="catalyst-engage notoserif-bold-shark-18px">{catalystEngage}</div>
              <img className="caret-circle-right-12" src="/img/caretcircleright-6.svg" alt="CaretCircleRight" />
            </div>
            <div className="link">
              <div className="catalyst-triage-17 notoserif-bold-shark-18px">{catalystTriage}</div>
              <img className="caret-circle-right-12" src="/img/caretcircleright-6.svg" alt="CaretCircleRight" />
            </div>
            <div className="link">
              <div className="genie-health notoserif-bold-shark-18px">{genieHealth}</div>
              <img className="caret-circle-right-12" src="/img/caretcircleright-6.svg" alt="CaretCircleRight" />
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

export default Solutions;
