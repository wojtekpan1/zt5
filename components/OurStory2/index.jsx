import React from "react";
import Menu from "../Menu";
import GhostBreadcrumbItem from "../GhostBreadcrumbItem";
import ValueBasedHealthcare2 from "../ValueBasedHealthcare2";
import Frame44 from "../Frame44";
import Footer2 from "../Footer2";
import "./OurStory2.css";

function OurStory2(props) {
  const {
    spanText1,
    spanText2,
    spanText3,
    spanText4,
    spanText5,
    spanText6,
    spanText7,
    spanText8,
    spanText9,
    arrow1,
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
    arrow2,
    spanText20,
    spanText21,
    spanText22,
    spanText23,
    spanText24,
    spanText25,
    footer2Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="our-story-3-1 screen">
        <div className="flex-row-45">
          <div className="logo-62 inter-bold-black-36px">
            <span className="inter-bold-black-36px">{spanText1}</span>
          </div>
          <Menu />
          <div className="contact-us-65 inter-medium-black-18px">
            <span className="inter-medium-black-18px">{spanText2}</span>
          </div>
        </div>
        <div className="flex-row-46">
          <div className="flex-col-54">
            <div className="frame-104-12">
              <GhostBreadcrumbItem />
              <div className="ghost-_breadcrumb_item-36">
                <div className="icon-23 valign-text-middle fontawesome5free-black-mischka-8px">
                  <span>
                    <span className="fontawesome5free-black-mischka-8px">{spanText3}</span>
                  </span>
                </div>
                <div className="our-2 inter-normal-dove-gray-16px">
                  <span className="inter-normal-dove-gray-16px">{spanText4}</span>
                </div>
              </div>
              <div className="ghost-_breadcrumb_item-37">
                <div className="icon-23 valign-text-middle fontawesome5free-black-mischka-8px">
                  <span>
                    <span className="fontawesome5free-black-mischka-8px">{spanText5}</span>
                  </span>
                </div>
                <div className="our-2 inter-semi-bold-black-16px">
                  <span className="inter-semi-bold-black-16px">{spanText6}</span>
                </div>
              </div>
            </div>
            <h1 className="title-46 inter-bold-black-60px">
              <span className="inter-bold-black-60px">{spanText7}</span>
            </h1>
            <p className="lorem-ipsum-dolor-si-156 inter-normal-black-16px">
              <span className="inter-normal-black-16px">{spanText8}</span>
            </p>
          </div>
          <div className="group-34-3">
            <div className="our-team-60 inter-normal-black-36px">
              <span className="inter-normal-black-36px">{spanText9}</span>
            </div>
            <img className="arrow-1-4" src={arrow1} alt="Arrow 1" />
          </div>
        </div>
        <ValueBasedHealthcare2 />
        <div className="mission-3">
          <div className="ellipse-container-17">
            <div className="ellipse-4-6"></div>
            <div className="ellipse-5-6"></div>
          </div>
          <div className="flex-col-55">
            <div className="our-vision-mission-1 inter-bold-black-36px">
              <span className="inter-bold-black-36px">{spanText10}</span>
            </div>
            <div className="group-11-12 inter-normal-black-16px">
              <p className="lorem-ipsum-dolor-si-157">
                <span className="inter-normal-black-16px">{spanText11}</span>
              </p>
              <p className="lorem-ipsum-dolor-si-153">
                <span className="inter-normal-black-16px">{spanText12}</span>
              </p>
              <p className="lorem-ipsum-dolor-si-153">
                <span className="inter-normal-black-16px">{spanText13}</span>
              </p>
            </div>
          </div>
        </div>
        <div className="frame-45-1">
          <div className="our-journey inter-bold-black-36px">
            <span className="inter-bold-black-36px">{spanText14}</span>
          </div>
          <p className="lorem-ipsum-dolor-si-154 inter-normal-black-16px">
            <span className="inter-normal-black-16px">{spanText15}</span>
          </p>
          <div className="group-40-1 inter-normal-black-16px">
            <div className="lorem-ipsum-dolor-si-container-2">
              <p className="lorem-ipsum-dolor-si-155">
                <span className="inter-normal-black-16px">{spanText16}</span>
              </p>
              <p className="lorem-ipsum-dolor-si-158">
                <span className="inter-normal-black-16px">{spanText17}</span>
              </p>
              <p className="lorem-ipsum-dolor-si-159">
                <span className="inter-normal-black-16px">{spanText18}</span>
              </p>
              <p className="lorem-ipsum-dolor-si-160">
                <span className="inter-normal-black-16px">{spanText19}</span>
              </p>
            </div>
            <div className="overlap-group-64">
              <img className="arrow-2-1" src={arrow2} alt="Arrow 2" />
              <Frame44 />
            </div>
            <div className="lorem-ipsum-dolor-si-container-3">
              <p className="lorem-ipsum-dolor-si-155">
                <span className="inter-normal-black-16px">{spanText20}</span>
              </p>
              <p className="lorem-ipsum-dolor-si-155">
                <span className="inter-normal-black-16px">{spanText21}</span>
              </p>
              <p className="lorem-ipsum-dolor-si-155">
                <span className="inter-normal-black-16px">{spanText22}</span>
              </p>
            </div>
          </div>
        </div>
        <div className="frame-46-1">
          <div className="our-presence inter-bold-black-36px">
            <span className="inter-bold-black-36px">{spanText23}</span>
          </div>
          <p className="lorem-ipsum-dolor-si-154 inter-normal-black-16px">
            <span className="inter-normal-black-16px">{spanText24}</span>
          </p>
          <div className="overlap-group-65">
            <div className="map inter-normal-black-36px">
              <span className="inter-normal-black-36px">{spanText25}</span>
            </div>
          </div>
        </div>
        <Footer2 className={footer2Props.className} />
      </div>
    </div>
  );
}

export default OurStory2;
