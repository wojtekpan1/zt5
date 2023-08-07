import React from "react";
import "./Testimonial2.css";

function Testimonial2(props) {
  const { className } = props;

  return (
    <div className={`testimonial-10 ${className || ""}`}>
      <div className="words-from-our-partners-2 inter-bold-black-24px">
        <span className="span-182 inter-bold-black-24px">Words from our partners</span>
      </div>
      <div className="frame-42-4">
        <div className="overlap-group-55">
          <div className="testimonial-7 inter-normal-black-20px">
            <span className="span-182 inter-normal-black-20px">TESTIMONIAL 1</span>
          </div>
        </div>
        <div className="overlap-group-55">
          <div className="testimonial-7 inter-normal-black-20px">
            <span className="span-182 inter-normal-black-20px">TESTIMONIAL2</span>
          </div>
        </div>
        <div className="overlap-group2-16">
          <div className="testimonial-3-5 inter-normal-black-20px">
            <span className="span-182 inter-normal-black-20px">TESTIMONIAL 3</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial2;
