import React from "react";
import Frame32 from "../Frame32";
import Frame5 from "../Frame5";
import Frame62 from "../Frame62";
import Frame37 from "../Frame37";
import Testimonial3 from "../Testimonial3";
import Footer5 from "../Footer5";
import "./PDP.css";

function PDP(props) {
  const {
    spanText1,
    spanText2,
    keyboard_Arrow_Down,
    spanText3,
    spanText4,
    spanText5,
    spanText6,
    spanText7,
    spanText8,
    spanText9,
    spanText10,
    spanText11,
    spanText12,
    spanText13,
    spanText14,
    spanText15,
    spanText16,
    spanText17,
    spanText18,
    spanText19,
    testimonial3Props,
    footer5Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="pdp screen">
        <div className="flex-row-71">
          <div className="logo-122 inter-bold-black-36px">
            <span className="inter-bold-black-36px">{spanText1}</span>
          </div>
          <div className="menu-60">
            <Frame32 />
            <div className="frame-4-44">
              <div className="partners-clients-5 inter-normal-black-18px">
                <span className="inter-normal-black-18px">{spanText2}</span>
              </div>
              <img className="keyboard_arrow_down-145" src={keyboard_Arrow_Down} alt="keyboard_arrow_down" />
            </div>
            <Frame5 />
            <Frame62 />
          </div>
          <div className="contact-us-127 inter-medium-black-18px">
            <span className="inter-medium-black-18px">{spanText3}</span>
          </div>
        </div>
        <h1 className="title-77 inter-bold-black-60px">
          <span className="inter-bold-black-60px">{spanText4}</span>
        </h1>
        <p className="lorem-ipsum-dolor-si-281 inter-normal-black-16px">
          <span className="inter-normal-black-16px">{spanText5}</span>
        </p>
        <Frame37 />
        <div className="partners-126">
          <div className="rectangle-24"></div>
          <div className="flex-row-72">
            <div className="flex-col-124">
              <div className="catalyst-s4-13 inter-bold-black-60px">
                <span className="inter-bold-black-60px">{spanText6}</span>
              </div>
              <div className="group-39-6 inter-normal-black-24px">
                <p className="lorem-ipsum-dolor-si-282">
                  <span className="inter-normal-black-24px">{spanText7}</span>
                </p>
                <p className="lorem-ipsum-dolor-si-283">
                  <span className="inter-normal-black-24px">{spanText8}</span>
                </p>
              </div>
            </div>
            <div className="rectangle-23-2"></div>
          </div>
        </div>
        <div className="group-52-1">
          <div className="rectangle-23-2"></div>
          <div className="flex-col-125">
            <div className="catalyst-research-10 inter-bold-black-60px">
              <span className="inter-bold-black-60px">{spanText9}</span>
            </div>
            <p className="lorem-ipsum-dolor-si-284 inter-normal-black-24px">
              <span className="inter-normal-black-24px">{spanText10}</span>
            </p>
            <p className="lorem-ipsum-dolor-si-285 inter-normal-black-24px">
              <span className="inter-normal-black-24px">{spanText11}</span>
            </p>
          </div>
        </div>
        <div className="group-53">
          <p className="what-does-this-solution-solve inter-bold-black-60px">
            <span className="inter-bold-black-60px">{spanText12}</span>
          </p>
          <div className="flex-row-73">
            <div className="flex-col-123">
              <div className="catalyst-6 inter-bold-black-24px">
                <span className="inter-bold-black-24px">{spanText13}</span>
              </div>
              <p className="lorem-ipsum-dolor-si-280 inter-normal-black-16px">
                <span className="inter-normal-black-16px">{spanText14}</span>
              </p>
            </div>
            <div className="flex-col-123">
              <div className="catalyst-6 inter-bold-black-24px">
                <span className="inter-bold-black-24px">{spanText15}</span>
              </div>
              <p className="lorem-ipsum-dolor-si-280 inter-normal-black-16px">
                <span className="inter-normal-black-16px">{spanText16}</span>
              </p>
            </div>
          </div>
        </div>
        <div className="overlap-group3-29">
          <p className="want-a-tailored-solution-for-you-17 inter-bold-black-60px">
            <span className="inter-bold-black-60px">{spanText17}</span>
          </p>
          <div className="flex-row-74">
            <div className="contact-us-128 inter-medium-black-18px">
              <span className="inter-medium-black-18px">{spanText18}</span>
            </div>
            <p className="lorem-ipsum-dolor-si-286 inter-normal-black-24px">
              <span className="inter-normal-black-24px">{spanText19}</span>
            </p>
          </div>
        </div>
        <Testimonial3 spanText1={testimonial3Props.spanText1} className={testimonial3Props.className} />
        <Footer5 className={footer5Props.className} />
      </div>
    </div>
  );
}

export default PDP;
