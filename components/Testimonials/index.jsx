import React from "react";
import CardTestimonials2 from "../CardTestimonials2";
import "./Testimonials.css";

function Testimonials(props) {
  const {
    ourClientsWords,
    className,
    cardTestimonials21Props,
    cardTestimonials22Props,
    cardTestimonials23Props,
    cardTestimonials24Props,
  } = props;

  return (
    <div className={`testimonials ${className || ""}`}>
      <div className="content-38">
        <div className="our-clients-words-3 notoserif-black-pine-green-48px">{ourClientsWords}</div>
        <img className="caret-circle-left-7" src="/img/caretcircleleft.svg" alt="CaretCircleLeft" />
        <img className="caret-circle-right-13" src="/img/caretcircleright-2.svg" alt="CaretCircleRight" />
        <div className="testimonial-list-3">
          <CardTestimonials2
            flexContainerI222129381682687Props={cardTestimonials21Props.flexContainerI222129381682687Props}
          />
          <CardTestimonials2
            flexContainerI222129381682687Props={cardTestimonials22Props.flexContainerI222129381682687Props}
          />
          <CardTestimonials2
            flexContainerI222129381682687Props={cardTestimonials23Props.flexContainerI222129381682687Props}
          />
          <CardTestimonials2
            flexContainerI222129381682687Props={cardTestimonials24Props.flexContainerI222129381682687Props}
          />
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
