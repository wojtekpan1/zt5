import React from "react";
import "./Testimonial.css";

function Testimonial(props) {
  const { className } = props;

  return (
    <div className={`testimonial-5 ${className || ""}`}>
      <div className="words-from-our-partners inter-bold-black-24px">
        <span className="span-154 inter-bold-black-24px">Words from our partners</span>
      </div>
      <div className="frame-42">
        <div className="overlap-group-43">
          <div className="testimonial inter-normal-black-20px">
            <span className="span-154 inter-normal-black-20px">TESTIMONIAL 1</span>
          </div>
        </div>
        <div className="overlap-group1-12">
          <div className="testimonial inter-normal-black-20px">
            <span className="span-154 inter-normal-black-20px">TESTIMONIAL2</span>
          </div>
        </div>
        <div className="overlap-group2-11">
          <div className="testimonial-3-3 inter-normal-black-20px">
            <span className="span-154 inter-normal-black-20px">TESTIMONIAL 3</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
