import React from "react";
import { Link } from "react-router-dom";
import Frame3 from "../Frame3";
import "./Header.css";

function Header(props) {
  const { className } = props;

  return (
    <header className={`header ${className || ""}`}>
      <div className="menu">
        <Frame3 />
        <Link to="/our-partners">
          <div className="frame">
            <div className="partners notoserif-medium-parchment-18px">Partners</div>
            <img className="caret-circle-down" src="/img/caretcircledown.svg" alt="CaretCircleDown" />
          </div>
        </Link>
        <Link to="/our-clients">
          <div className="frame">
            <div className="clients notoserif-medium-parchment-18px">Clients</div>
            <img className="caret-circle-down" src="/img/caretcircledown.svg" alt="CaretCircleDown" />
          </div>
        </Link>
        <Link to="/publications">
          <div className="frame">
            <div className="insights notoserif-medium-parchment-18px">Insights</div>
            <img className="caret-circle-down" src="/img/caretcircledown.svg" alt="CaretCircleDown" />
          </div>
        </Link>
        <Link to="/our-story">
          <div className="frame">
            <div className="about-us notoserif-medium-parchment-18px">About us</div>
            <img className="caret-circle-down" src="/img/caretcircledown.svg" alt="CaretCircleDown" />
          </div>
        </Link>
        <Link to="/contact-us-empty-form">
          <div className="button">
            <div className="contact-us-5 notoserif-medium-white-18px">Contact us</div>
          </div>
        </Link>
      </div>
      <Link to="/homeu95v1-1">
        <img className="logo" src="/img/logo.svg" alt="Logo" />
      </Link>
    </header>
  );
}

export default Header;
