import React from "react";
import Background from "../Background";
import Frame107 from "../Frame107";
import Header from "../Header";
import ReadMore from "../ReadMore";
import List from "../List";
import List2 from "../List2";
import Footer from "../Footer";
import "./Publications.css";

function Publications(props) {
  const {
    place,
    insights,
    inTheNews,
    researchPublications,
    blogs,
    backgroundProps,
    frame107Props,
    readMore1Props,
    listProps,
    readMore2Props,
    list21Props,
    readMore3Props,
    list22Props,
    footerProps,
  } = props;

  return (
    <div className="publications screen">
      <div className="banner-7">
        <div className="overlap-group-18">
          <Background src={backgroundProps.src} />
          <div className="breadcrumb-7 notoserif-bold-parchment-16px">
            <div className="place-7">{place}</div>
            <img className="caret-circle-right-18" src="/img/caretcircleright.svg" alt="CaretCircleRight" />
            <div className="insights-17">{insights}</div>
          </div>
          <Frame107 frame88Props={frame107Props.frame88Props} />
          <Header />
        </div>
      </div>
      <div className="list-1">
        <div className="list-item">
          <div className="flex-row-7">
            <div className="in-the-news notoserif-bold-pine-green-40px">{inTheNews}</div>
            <ReadMore arrowsleftright={readMore1Props.arrowsleftright} />
          </div>
          <List frame1211Props={listProps.frame1211Props} frame1212Props={listProps.frame1212Props} />
        </div>
        <div className="list-item">
          <div className="flex-row-8">
            <div className="research-publications notoserif-bold-pine-green-40px">{researchPublications}</div>
            <ReadMore arrowsleftright={readMore2Props.arrowsleftright} />
          </div>
          <List2
            frame1211Props={list21Props.frame1211Props}
            frame1212Props={list21Props.frame1212Props}
            frame1213Props={list21Props.frame1213Props}
          />
        </div>
        <div className="list-item">
          <div className="flex-row-9">
            <div className="blogs notoserif-bold-pine-green-40px">{blogs}</div>
            <ReadMore arrowsleftright={readMore3Props.arrowsleftright} />
          </div>
          <List2
            frame1211Props={list22Props.frame1211Props}
            frame1212Props={list22Props.frame1212Props}
            frame1213Props={list22Props.frame1213Props}
          />
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

export default Publications;
