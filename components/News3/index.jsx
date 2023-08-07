import React from "react";
import Background from "../Background";
import Frame1072 from "../Frame1072";
import Header3 from "../Header3";
import List1 from "../List1";
import Pagination from "../Pagination";
import Footer4 from "../Footer4";
import "./News3.css";

function News3(props) {
  const {
    spanText1,
    caretcircleright1,
    spanText2,
    caretcircleright2,
    spanText3,
    backgroundProps,
    frame1072Props,
    header3Props,
    list11Props,
    list12Props,
    list13Props,
    footer4Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="news-2-3 screen">
        <div className="banner-27">
          <div className="overlap-group-91">
            <Background src={backgroundProps.src} className={backgroundProps.className} />
            <div className="breadcrumb-16 notoserif-bold-parchment-16px">
              <div className="place-43">
                <span className="notoserif-bold-parchment-16px">{spanText1}</span>
              </div>
              <img className="caret-circle-right-49" src={caretcircleright1} alt="CaretCircleRight" />
              <div className="insights-40">
                <span className="notoserif-bold-parchment-16px">{spanText2}</span>
              </div>
              <img className="caret-circle-right-49" src={caretcircleright2} alt="CaretCircleRight" />
              <div className="in-the-news-5">
                <span className="notoserif-bold-parchment-16px">{spanText3}</span>
              </div>
            </div>
            <Frame1072 spanText1={frame1072Props.spanText1} className={frame1072Props.className} />
            <Header3 logo={header3Props.logo} className={header3Props.className} />
          </div>
        </div>
        <div className="list-8">
          <List1
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
          <List1
            className={list13Props.className}
            frame12121Props={list13Props.frame12121Props}
            frame12122Props={list13Props.frame12122Props}
            frame12123Props={list13Props.frame12123Props}
          />
          <Pagination />
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

export default News3;
