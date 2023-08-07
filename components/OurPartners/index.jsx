import React from "react";
import Background from "../Background";
import Frame107 from "../Frame107";
import Header from "../Header";
import Container6 from "../Container6";
import Testimonials from "../Testimonials";
import Footer from "../Footer";
import "./OurPartners.css";

function OurPartners(props) {
  const {
    place,
    partners,
    solutionPartners,
    technologyPartners,
    researchPartners,
    ecosystemExpansionPartners,
    backgroundProps,
    frame107Props,
    container6Props,
    testimonialsProps,
    footerProps,
  } = props;

  return (
    <div className="our-partners screen">
      <div className="banner-5">
        <div className="overlap-group-12">
          <Background src={backgroundProps.src} />
          <div className="breadcrumb-6 notoserif-bold-parchment-16px">
            <div className="place-6">{place}</div>
            <img className="caret-circle-right-17" src="/img/caretcircleright.svg" alt="CaretCircleRight" />
            <div className="partners-20">{partners}</div>
          </div>
          <Frame107 frame88Props={frame107Props.frame88Props} />
          <Header />
        </div>
      </div>
      <div className="tabs-2">
        <div className="tab-6">
          <div className="x-partners-17 notoserif-bold-shark-20px">{solutionPartners}</div>
        </div>
        <div className="tab-7">
          <div className="x-partners-17 notoserif-medium-shark-20px">{technologyPartners}</div>
        </div>
        <div className="tabs-item-1">
          <div className="x-partners-18 notoserif-medium-shark-20px">{researchPartners}</div>
        </div>
        <div className="tabs-item-1">
          <div className="x-partners-18 notoserif-medium-shark-20px">{ecosystemExpansionPartners}</div>
        </div>
      </div>
      <Container6 cTAProps={container6Props.cTAProps} />
      <Testimonials
        ourClientsWords={testimonialsProps.ourClientsWords}
        className={testimonialsProps.className}
        cardTestimonials21Props={testimonialsProps.cardTestimonials21Props}
        cardTestimonials22Props={testimonialsProps.cardTestimonials22Props}
        cardTestimonials23Props={testimonialsProps.cardTestimonials23Props}
        cardTestimonials24Props={testimonialsProps.cardTestimonials24Props}
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

export default OurPartners;
