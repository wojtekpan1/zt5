import React from "react";
import Frame35 from "../Frame35";
import Frame4 from "../Frame4";
import Frame72 from "../Frame72";
import Frame53 from "../Frame53";
import Frame63 from "../Frame63";
import "./Header3.css";

function Header3(props) {
  const { logo, className } = props;

  return (
    <header className={`header-5 ${className || ""}`}>
      <img className="logo-67" src={logo} alt="Logo" />
      <div className="menu-37">
        <Frame35 />
        <Frame4 />
        <Frame72 />
        <Frame53 />
        <Frame63 />
        <div className="contact-us-74 notoserif-medium-white-18px">
          <span className="span93qwe notoserif-medium-white-18px">Contact us</span>
        </div>
      </div>
    </header>
  );
}

export default Header3;
