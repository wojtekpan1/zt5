import React from "react";
import CardTestimonials from "../CardTestimonials";
import "./Container3.css";

function Container3() {
  return (
    <div className="container-7">
      <div className="content-24">
        <div className="our-clients-words notoserif-black-pine-green-48px">Our clients’ words</div>
        <p className="lorem-ipsum-dolor-si-23 notoserif-medium-shark-24px">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur mattis risus, vitae porta dolor
          consectetur a. Nullam pellentesque tincidunt arcu ut facilisis.
        </p>
        <img className="caret-circle-left-1" src="/img/caretcircleleft.svg" alt="CaretCircleLeft" />
        <img className="caret-circle-right-6" src="/img/caretcircleright-2.svg" alt="CaretCircleRight" />
        <div className="testimonial-list">
          <CardTestimonials />
          <CardTestimonials />
          <CardTestimonials />
          <CardTestimonials />
        </div>
      </div>
    </div>
  );
}

export default Container3;
