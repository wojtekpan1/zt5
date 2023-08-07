import React from "react";
import CardTestimonials5 from "../CardTestimonials5";
import "./Testimonials2.css";

function Testimonials2(props) {
  const { className } = props;

  return (
    <div className={`testimonials-42 ${className || ""}`}>
      <img className="caret-circle-left-28" src="/img/caretcircleleft-1@2x.png" alt="CaretCircleLeft" />
      <div className="flex-col-85">
        <div className="our-clients-words-14 notoserif-black-pine-green-48px">
          <span className="span97hl6 notoserif-black-pine-green-48px">Our clients’ words</span>
        </div>
        <div className="testimonial-list-12">
          <CardTestimonials5 />
          <CardTestimonials5 />
          <CardTestimonials5 />
          <CardTestimonials5 />
        </div>
      </div>
      <img className="caret-circle-right-44" src="/img/caretcircleright-1@2x.png" alt="CaretCircleRight" />
    </div>
  );
}

export default Testimonials2;
