import React from "react";
import Frame35 from "../Frame35";
import Frame4 from "../Frame4";
import Frame72 from "../Frame72";
import Frame53 from "../Frame53";
import Frame63 from "../Frame63";
import Frame893 from "../Frame893";
import Container8 from "../Container8";
import Container9 from "../Container9";
import CTA4 from "../CTA4";
import Container14 from "../Container14";
import CardTestimonials4 from "../CardTestimonials4";
import CarCard from "../CarCard";
import CTA5 from "../CTA5";
import Footer4 from "../Footer4";
import "./HomeV2.css";

function HomeV2(props) {
  const {
    banner,
    logo,
    spanText1,
    spanText2,
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
    iconLink,
    spanText19,
    image17,
    spanText20,
    spanText21,
    flask,
    spanText22,
    lifebuoy,
    spanText23,
    caretcircleleft1,
    spanText24,
    spanText25,
    caretcircleright1,
    caretcircleleft2,
    spanText26,
    spanText27,
    rectangle12751,
    spanText28,
    spanText29,
    spanText30,
    caretcircleright2,
    spanText31,
    spanText32,
    icon,
    frame4Props,
    frame72Props,
    frame53Props,
    frame63Props,
    cTA4Props,
    container14Props,
    footer4Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="home-v2 screen">
        <div className="banner-21" style={{ backgroundImage: `url(${banner})` }}>
          <div className="overlap-group5-6">
            <header className="header-25">
              <img className="logo-98" src={logo} alt="Logo" />
              <div className="menu-54">
                <Frame35 />
                <Frame4 className={frame4Props.className} />
                <Frame72 className={frame72Props.className} />
                <Frame53 className={frame53Props.className} />
                <Frame63 className={frame63Props.className} />
                <div className="button-37">
                  <div className="contact-us-105 notoserif-medium-white-18px">
                    <span className="notoserif-medium-white-18px">{spanText1}</span>
                  </div>
                </div>
              </div>
            </header>
            <Frame893 />
            <div className="cards-51">
              <div className="card-105">
                <div className="overlap-group-77">
                  <div className="professionals-16 notoserif-medium-white-18px">
                    <span className="notoserif-medium-white-18px">{spanText2}</span>
                  </div>
                  <div className="number-54 notoserif-black-web-orange-68px">
                    <span className="notoserif-black-web-orange-68px">{spanText3}</span>
                  </div>
                </div>
              </div>
              <div className="card-106">
                <div className="overlap-group1-33">
                  <div className="years-in-healthcare-16 notoserif-medium-white-18px">
                    <span className="notoserif-medium-white-18px">{spanText4}</span>
                  </div>
                  <div className="number-55 notoserif-black-web-orange-68px">
                    <span className="notoserif-black-web-orange-68px">{spanText5}</span>
                  </div>
                </div>
              </div>
              <div className="card-107">
                <div className="overlap-group2-30">
                  <div className="fundraised-14 notoserif-medium-white-18px">
                    <span className="notoserif-medium-white-18px">{spanText6}</span>
                  </div>
                  <div className="x10-m-11 notoserif-black-web-orange-68px">
                    <span className="notoserif-black-web-orange-68px">{spanText7}</span>
                    <span className="span1">{spanText8}</span>
                  </div>
                </div>
              </div>
              <div className="card-108">
                <div className="overlap-group3-22">
                  <div className="partners-120 notoserif-medium-white-18px">
                    <span className="notoserif-medium-white-18px">{spanText9}</span>
                  </div>
                  <div className="number-56 notoserif-black-web-orange-68px">
                    <span className="notoserif-black-web-orange-68px">{spanText10}</span>
                  </div>
                </div>
              </div>
              <div className="card-109">
                <div className="overlap-group4-18">
                  <div className="countries-14 notoserif-medium-white-18px">
                    <span className="notoserif-medium-white-18px">{spanText11}</span>
                  </div>
                  <div className="number-57 notoserif-black-web-orange-68px">
                    <span className="notoserif-black-web-orange-68px">{spanText12}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Container8 />
        <Container9 />
        <div className="solutions-87">
          <div className="our-solutions-8 notoserif-black-parchment-48px">
            <span className="notoserif-black-parchment-48px">{spanText13}</span>
          </div>
          <p className="lorem-ipsum-dolor-si-208 notoserif-medium-white-24px">
            <span className="notoserif-medium-white-24px">{spanText14}</span>
          </p>
          <div className="tabs-10">
            <div className="population-health-26 notoserif-medium-white-18px">
              <span className="notoserif-medium-white-18px">{spanText15}</span>
            </div>
            <div className="hospitals-clinics-11 notoserif-bold-white-18px">
              <span className="notoserif-bold-white-18px">{spanText16}</span>
            </div>
            <div className="physician-support-13 notoserif-medium-white-18px">
              <span className="notoserif-medium-white-18px">{spanText17}</span>
            </div>
            <div className="patient-engagement-14 notoserif-medium-white-18px">
              <span className="notoserif-medium-white-18px">{spanText18}</span>
            </div>
          </div>
          <div className="cards-52">
            <div className="card-hovered">
              <div className="card-110">
                <div className="overlap-group-78">
                  <img className="icon-link-3" src={iconLink} alt="icon-link" />
                  <div className="catalyst-value-solutions-7 notoserif-bold-pine-green-24px">
                    <span className="notoserif-bold-pine-green-24px">{spanText19}</span>
                  </div>
                  <img className="image-17" src={image17} alt="image 17" />
                </div>
              </div>
              <div className="card-111">
                <p className="lorem-ipsum-dolor-si-209 inter-normal-pine-green-16px">
                  <span className="inter-normal-pine-green-16px">{spanText20}</span>
                </p>
                <div className="request-a-demo-11 notoserif-medium-pine-green-14px">
                  <span className="notoserif-medium-pine-green-14px">{spanText21}</span>
                </div>
              </div>
            </div>
            <div className="card-104">
              <img className="flask-8" src={flask} alt="Flask" />
              <div className="catalyst-telemed-7 notoserif-bold-pine-green-24px">
                <span className="notoserif-bold-pine-green-24px">{spanText22}</span>
              </div>
            </div>
            <div className="card-104">
              <img className="lifebuoy-5" src={lifebuoy} alt="Lifebuoy" />
              <div className="sectra-8 notoserif-bold-pine-green-24px">
                <span className="notoserif-bold-pine-green-24px">{spanText23}</span>
              </div>
            </div>
          </div>
          <CTA4>{cTA4Props.children}</CTA4>
        </div>
        <Container14 cards3Props={container14Props.cards3Props} cTA4Props={container14Props.cTA4Props} />
        <div className="client-testimonials">
          <img className="caret-circle-left-26" src={caretcircleleft1} alt="CaretCircleLeft" />
          <div className="flex-col-81">
            <div className="our-clients-words-13 notoserif-black-pine-green-48px">
              <span className="notoserif-black-pine-green-48px">{spanText24}</span>
            </div>
            <p className="lorem-ipsum-dolor-si-208 notoserif-medium-shark-24px">
              <span className="notoserif-medium-shark-24px">{spanText25}</span>
            </p>
            <div className="testimonial-list-11">
              <CardTestimonials4 />
              <CardTestimonials4 />
              <CardTestimonials4 />
              <CardTestimonials4 />
            </div>
          </div>
          <img className="caret-circle-right-40" src={caretcircleright1} alt="CaretCircleRight" />
        </div>
        <div className="publications-43">
          <img className="caret-circle-left-27" src={caretcircleleft2} alt="CaretCircleLeft" />
          <div className="flex-col-82">
            <div className="latest-publications-8 notoserif-black-pine-green-48px">
              <span className="notoserif-black-pine-green-48px">{spanText26}</span>
            </div>
            <p className="lorem-ipsum-dolor-si-208 notoserif-medium-shark-24px">
              <span className="notoserif-medium-shark-24px">{spanText27}</span>
            </p>
            <div className="cards-53">
              <div className="car-card-12">
                <img className="rectangle-12751-13" src={rectangle12751} alt="Rectangle 12751" />
                <div className="group-48-13">
                  <p className="lorem-ipsum-dolor-si-210 notoserif-bold-pine-green-20px">
                    <span className="notoserif-bold-pine-green-20px">{spanText28}</span>
                  </p>
                  <div className="address-18 notoserif-medium-mountain-mist-16px">
                    <span className="notoserif-medium-mountain-mist-16px">{spanText29}</span>
                  </div>
                </div>
                <p className="lorem-ipsum-dolor-s-12 notoserif-normal-shark-16px">
                  <span className="notoserif-normal-shark-16px">{spanText30}</span>
                </p>
              </div>
              <CarCard />
            </div>
          </div>
          <img className="caret-circle-right-41" src={caretcircleright2} alt="CaretCircleRight" />
        </div>
        <div className="contact-1">
          <div className="content-64">
            <div className="flex-col-83">
              <div className="frame-108-17">
                <p className="want-a-tailored-solution-for-you-16 notoserif-black-spring-wood-48px">
                  <span className="notoserif-black-spring-wood-48px">{spanText31}</span>
                </p>
                <p className="lorem-ipsum-dolor-si-211 notoserif-medium-spring-wood-18px">
                  <span className="notoserif-medium-spring-wood-18px">{spanText32}</span>
                </p>
              </div>
              <CTA5 />
            </div>
            <img className="icon-36" src={icon} alt="Icon" />
          </div>
        </div>
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

export default HomeV2;
