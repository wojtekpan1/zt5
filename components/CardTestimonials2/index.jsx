import React from "react";
import FlexContainerI222129381682687 from "../FlexContainerI222129381682687";
import "./CardTestimonials2.css";

function CardTestimonials2(props) {
  const { flexContainerI222129381682687Props } = props;

  return (
    <article className="card-testimonials-3">
      <div className="flex-row-3">
        <div className="flex-col-6">
          <div className="name-4 notoserif-semi-bold-persimmon-16px">John Doe</div>
          <div className="ceo-pharma-co-3 notoserif-medium-mountain-mist-14px">CEO Pharma &amp; Co</div>
          <div className="super-easy-process-3 notoserif-semi-bold-shark-18px">Super easy process</div>
        </div>
        <img className="image-28-3" src="/img/image-28@2x.png" alt="image 28" />
      </div>
      <FlexContainerI222129381682687 className={flexContainerI222129381682687Props.className} />
    </article>
  );
}

export default CardTestimonials2;
