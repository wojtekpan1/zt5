import React from "react";
import Banner2 from "../Banner2";
import Group71 from "../Group71";
import ContactInfo2 from "../ContactInfo2";
import Footer4 from "../Footer4";
import "./ContactUsSolutionSelected3.css";

function ContactUsSolutionSelected3(props) {
  const {
    spanText1,
    spanText2,
    spanText3,
    spanText4,
    spanText5,
    spanText6,
    banner2Props,
    group711Props,
    group712Props,
    footer4Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="contact-us-u45-solution-selected screen">
        <Banner2
          backgroundProps={banner2Props.backgroundProps}
          frame1072Props={banner2Props.frame1072Props}
          header3Props={banner2Props.header3Props}
        />
        <div className="inquiry-6">
          <div className="place-an-inquiry-8 notoserif-bold-pine-green-40px">
            <span className="notoserif-bold-pine-green-40px">{spanText1}</span>
          </div>
          <div className="form-7">
            <div className="frame-90-10 notoserif-normal-shark-24px">
              <Group71 spanText={group711Props.spanText} />
              <Group71 spanText={group712Props.spanText} className={group712Props.className} />
              <div className="overlap-group-98">
                <div className="name-28">
                  <span className="notoserif-normal-shark-24px">{spanText2}</span>
                </div>
              </div>
              <div className="overlap-group-98">
                <div className="johnlemailco-1">
                  <span className="notoserif-normal-shark-24px">{spanText3}</span>
                </div>
              </div>
              <div className="overlap-group-98">
                <div className="text-17">
                  <span className="notoserif-normal-shark-24px">{spanText4}</span>
                </div>
              </div>
              <div className="overlap-group3-27">
                <p className="lorem-ipsum-dolor-si-248">
                  <span className="notoserif-normal-shark-24px">{spanText5}</span>
                </p>
              </div>
            </div>
            <div className="cta-34">
              <div className="contact-us-121 notoserif-medium-white-18px">
                <span className="notoserif-medium-white-18px">{spanText6}</span>
              </div>
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

export default ContactUsSolutionSelected3;
