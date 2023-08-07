import React from "react";
import "./Testimonial3.css";

function Testimonial3(props) {
  const { spanText1, className } = props;

  return (
    <div className={`testimonial-18 ${className || ""}`}>
      <div className="words-from-our-partners-5 inter-bold-black-24px">
        <span className="span-407 inter-bold-black-24px">{spanText1}</span>
      </div>
      <div className="frame-42-8">
        <div className="overlap-group-130">
          <div className="testimonial-13 inter-normal-black-20px">
            <span className="span-407 inter-normal-black-20px">TESTIMONIAL 1</span>
          </div>
        </div>
        <div className="overlap-group-130">
          <div className="testimonial-13 inter-normal-black-20px">
            <span className="span-407 inter-normal-black-20px">TESTIMONIAL2</span>
          </div>
        </div>
        <div className="overlap-group2-40">
          <div className="testimonial-3-10 inter-normal-black-20px">
            <span className="span-407 inter-normal-black-20px">TESTIMONIAL 3</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial3;
