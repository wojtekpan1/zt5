import React from "react";
import Banner2 from "../Banner2";
import ContactInfo2 from "../ContactInfo2";
import Footer4 from "../Footer4";
import "./ContactUsEmptyForm3.css";

function ContactUsEmptyForm3(props) {
  const {
    spanText1,
    spanText2,
    caretdown,
    spanText3,
    spanText4,
    spanText5,
    spanText6,
    spanText7,
    banner2Props,
    footer4Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="contact-us-u45-empty-form screen">
        <Banner2
          backgroundProps={banner2Props.backgroundProps}
          frame1072Props={banner2Props.frame1072Props}
          header3Props={banner2Props.header3Props}
        />
        <div className="inquiry-5">
          <div className="place-an-inquiry-7 notoserif-bold-pine-green-40px">
            <span className="notoserif-bold-pine-green-40px">{spanText1}</span>
          </div>
          <div className="form-6">
            <div className="frame-90-9 notoserif-normal-mountain-mist-24px">
              <div className="group-58-7">
                <p className="what-are-you-looking-for-3">
                  <span className="notoserif-normal-mountain-mist-24px">{spanText2}</span>
                </p>
                <img className="caret-down-9" src={caretdown} alt="CaretDown" />
              </div>
              <div className="overlap-group-93">
                <div className="name-27">
                  <span className="notoserif-normal-mountain-mist-24px">{spanText3}</span>
                </div>
              </div>
              <div className="overlap-group-93">
                <div className="email-8">
                  <span className="notoserif-normal-mountain-mist-24px">{spanText4}</span>
                </div>
              </div>
              <div className="overlap-group-93">
                <div className="phone-number-8">
                  <span className="notoserif-normal-mountain-mist-24px">{spanText5}</span>
                </div>
              </div>
              <div className="overlap-group3-26">
                <div className="comment-8">
                  <span className="notoserif-normal-mountain-mist-24px">{spanText6}</span>
                </div>
              </div>
            </div>
            <div className="contact-us-118 notoserif-medium-persimmon-18px">
              <span className="notoserif-medium-persimmon-18px">{spanText7}</span>
            </div>
          </div>
        </div>
        <ContactInfo2 />
        <Footer4
          logo={footer4Props.logo}
          instagram={footer4Props.instagram}
          youtube={footer4Props.youtube}
          twitter21Props={footer4Props.twitter21Props}
          twitter22Props={footer4Props.twitter22Props}
        />
      </div>
    </div>
  );
}

export default ContactUsEmptyForm3;
