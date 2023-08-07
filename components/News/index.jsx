import React from "react";
import { Link } from "react-router-dom";
import Background from "../Background";
import Frame107 from "../Frame107";
import Header from "../Header";
import Group482 from "../Group482";
import Frame121 from "../Frame121";
import List2 from "../List2";
import Footer from "../Footer";
import "./News.css";

function News(props) {
  const {
    place,
    insights,
    inTheNews,
    rectangle12752,
    number1,
    number2,
    number3,
    number4,
    number5,
    backgroundProps,
    frame107Props,
    frame1211Props,
    frame1212Props,
    list21Props,
    list22Props,
    footerProps,
  } = props;

  return (
    <div className="news screen">
      <div className="banner-14">
        <div className="overlap-group-25">
          <Background src={backgroundProps.src} />
          <div className="breadcrumb-12 notoserif-bold-parchment-16px">
            <div className="breadcrumb-item">{place}</div>
            <img className="caret-circle-right-25" src="/img/caretcircleright.svg" alt="CaretCircleRight" />
            <div className="breadcrumb-item">{insights}</div>
            <img className="caret-circle-right-25" src="/img/caretcircleright.svg" alt="CaretCircleRight" />
            <div className="in-the-news-1">{inTheNews}</div>
          </div>
          <Frame107 frame88Props={frame107Props.frame88Props} />
          <Header />
        </div>
      </div>
      <div className="list-5">
        <div className="list-1-1">
          <Link to="/popup-1">
            <div className="frame-116-2">
              <Group482 />
              <img className="rectangle-12752" src={rectangle12752} alt="Rectangle 12752" />
            </div>
          </Link>
          <Frame121 rectangle12751={frame1211Props.rectangle12751} />
          <Frame121 rectangle12751={frame1212Props.rectangle12751} />
        </div>
        <List2
          className={list21Props.className}
          frame1211Props={list21Props.frame1211Props}
          frame1212Props={list21Props.frame1212Props}
          frame1213Props={list21Props.frame1213Props}
        />
        <List2
          className={list22Props.className}
          frame1211Props={list22Props.frame1211Props}
          frame1212Props={list22Props.frame1212Props}
          frame1213Props={list22Props.frame1213Props}
        />
        <div className="pagination">
          <div className="group-110">
            <div className="number-13 notoserif-semi-bold-persimmon-22px">{number1}</div>
            <div className="number-12 notoserif-semi-bold-shark-22px">{number2}</div>
            <div className="number-12 notoserif-semi-bold-shark-22px">{number3}</div>
            <div className="number-12 notoserif-semi-bold-shark-22px">{number4}</div>
            <div className="number-14 notoserif-semi-bold-shark-22px">{number5}</div>
          </div>
        </div>
      </div>
      <Footer
        logo={footerProps.logo}
        iconInstagram={footerProps.iconInstagram}
        youtube={footerProps.youtube}
        twitterProps={footerProps.twitterProps}
      />
    </div>
  );
}

export default News;
