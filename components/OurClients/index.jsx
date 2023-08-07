import React from "react";
import Background from "../Background";
import Frame107 from "../Frame107";
import Header from "../Header";
import Container6 from "../Container6";
import Testimonials from "../Testimonials";
import Footer from "../Footer";
import "./OurClients.css";

function OurClients(props) {
  const {
    place,
    clients,
    hospitalClients,
    governmentClients,
    backgroundProps,
    frame107Props,
    container6Props,
    testimonialsProps,
    footerProps,
  } = props;

  return (
    <div className="our-clients screen">
      <div className="banner-8">
        <div className="overlap-group-19">
          <Background src={backgroundProps.src} />
          <div className="breadcrumb-8 notoserif-bold-parchment-16px">
            <div className="place-8">{place}</div>
            <img className="caret-circle-right-19" src="/img/caretcircleright.svg" alt="CaretCircleRight" />
            <div className="clients-17">{clients}</div>
          </div>
          <Frame107 frame88Props={frame107Props.frame88Props} />
          <Header />
        </div>
      </div>
      <div className="tabs-3">
        <div className="tab-8">
          <div className="x-clients notoserif-bold-shark-20px">{hospitalClients}</div>
        </div>
        <div className="tab-9">
          <div className="x-clients notoserif-medium-shark-20px">{governmentClients}</div>
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

export default OurClients;
