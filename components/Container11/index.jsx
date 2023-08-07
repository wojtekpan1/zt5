import React from "react";
import CardTestimonials3 from "../CardTestimonials3";
import "./Container11.css";

function Container11() {
  return (
    <div className="container-33">
      <img className="caret-circle-left-15" src="/img/caretcircleleft-1@2x.png" alt="CaretCircleLeft" />
      <div className="flex-col-58">
        <div className="our-clients-words-9 notoserif-black-pine-green-48px">
          <span className="notoserif-black-pine-green-48px">Our clients’ words</span>
        </div>
        <p className="lorem-ipsum-dolor-si-182 notoserif-medium-shark-24px">
          <span className="notoserif-medium-shark-24px">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur mattis risus, vitae porta dolor
            consectetur a. Nullam pellentesque tincidunt arcu ut facilisis.
          </span>
        </p>
        <div className="testimonial-list-7">
          <CardTestimonials3 />
          <CardTestimonials3 />
          <CardTestimonials3 />
          <CardTestimonials3 />
        </div>
      </div>
      <img className="caret-circle-right-29" src="/img/caretcircleright-1@2x.png" alt="CaretCircleRight" />
    </div>
  );
}

export default Container11;
