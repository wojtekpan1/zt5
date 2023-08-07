import React from "react";
import FlexContainerI222129381682687 from "../FlexContainerI222129381682687";
import "./CardTestimonials.css";

function CardTestimonials() {
  return (
    <article className="card-testimonials">
      <div className="flex-col">
        <div className="flex-row">
          <div className="flex-col-1">
            <div className="name notoserif-semi-bold-persimmon-16px">John Doe</div>
            <div className="ceo-pharma-co notoserif-medium-mountain-mist-14px">CEO Pharma &amp; Co</div>
          </div>
          <img className="image-28" src="/img/image-28@2x.png" alt="image 28" />
        </div>
        <div className="super-easy-process notoserif-bold-pine-green-20px">Super easy process</div>
        <FlexContainerI222129381682687 />
      </div>
    </article>
  );
}

export default CardTestimonials;
