import React from "react";
import Background from "../Background";
import Frame1072 from "../Frame1072";
import Header3 from "../Header3";
import Frame117 from "../Frame117";
import List1 from "../List1";
import Pagination from "../Pagination";
import Footer4 from "../Footer4";
import Frame184953 from "../Frame184953";
import "./Newspopup.css";

function Newspopup(props) {
  const {
    spanText1,
    caretcircleright1,
    spanText2,
    caretcircleright2,
    spanText3,
    iconClose,
    backgroundProps,
    frame1072Props,
    header3Props,
    frame117Props,
    list11Props,
    list12Props,
    footer4Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="news-popup screen">
        <div className="overlap-group1-35">
          <div className="overlap-group-92">
            <Background src={backgroundProps.src} className={backgroundProps.className} />
            <div className="breadcrumb-17 notoserif-bold-parchment-16px">
              <div className="place-44">
                <span className="notoserif-bold-parchment-16px">{spanText1}</span>
              </div>
              <img className="caret-circle-right-50" src={caretcircleright1} alt="CaretCircleRight" />
              <div className="publications-46">
                <span className="notoserif-bold-parchment-16px">{spanText2}</span>
              </div>
              <img className="caret-circle-right-51" src={caretcircleright2} alt="CaretCircleRight" />
              <div className="in-the-news-6">
                <span className="notoserif-bold-parchment-16px">{spanText3}</span>
              </div>
            </div>
            <Frame1072 spanText1={frame1072Props.spanText1} className={frame1072Props.className} />
            <Header3 logo={header3Props.logo} className={header3Props.className} />
          </div>
          <div className="list-11">
            <Frame117
              className={frame117Props.className}
              frame12121Props={frame117Props.frame12121Props}
              frame12122Props={frame117Props.frame12122Props}
            />
            <List1
              className={list11Props.className}
              frame12121Props={list11Props.frame12121Props}
              frame12122Props={list11Props.frame12122Props}
              frame12123Props={list11Props.frame12123Props}
            />
            <List1
              className={list12Props.className}
              frame12121Props={list12Props.frame12121Props}
              frame12122Props={list12Props.frame12122Props}
              frame12123Props={list12Props.frame12123Props}
            />
            <Pagination />
          </div>
          <Footer4
            logo={footer4Props.logo}
            instagram={footer4Props.instagram}
            youtube={footer4Props.youtube}
            className={footer4Props.className}
            twitter21Props={footer4Props.twitter21Props}
            twitter22Props={footer4Props.twitter22Props}
          />
          <div className="rectangle-12752-2"></div>
          <div className="popup-5">
            <Frame184953 />
            <img className="icon-close-7" src={iconClose} alt="icon-close" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Newspopup;
