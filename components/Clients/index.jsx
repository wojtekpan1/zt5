import React from "react";
import "./Clients.css";

function Clients() {
  return (
    <div className="clients-99">
      <div className="flex-col-96">
        <div className="our-clients-words-16 inter-bold-black-36px">
          <span className="inter-bold-black-36px">Our clients’ words</span>
        </div>
        <p className="lorem-ipsum-dolor-si-259 inter-normal-black-16px">
          <span className="inter-normal-black-16px">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur mattis risus, vitae porta dolor
            consectetur a. Nullam pellentesque tincidunt arcu ut facilisis.
          </span>
        </p>
      </div>
      <div className="overlap-group-container-4">
        <div className="overlap-group-100">
          <div className="testimonial-1-3 inter-normal-black-20px">
            <span className="inter-normal-black-20px">TESTIMONIAL 1</span>
          </div>
        </div>
        <div className="overlap-group1-38">
          <div className="testimonial-2-3 inter-normal-black-20px">
            <span className="inter-normal-black-20px">TESTIMONIAL 2</span>
          </div>
        </div>
        <div className="overlap-group2-32">
          <div className="testimonial-3-8 inter-normal-black-20px">
            <span className="inter-normal-black-20px">TESTIMONIAL 3</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Clients;
