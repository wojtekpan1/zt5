import React from "react";
import Frame32 from "../Frame32";
import Frame5 from "../Frame5";
import Frame62 from "../Frame62";
import "./Menu.css";

function Menu(props) {
  const { className } = props;

  return (
    <div className={`menu-17 inter-normal-black-18px ${className || ""}`}>
      <Frame32 />
      <div className="frame-4-1">
        <div className="partners-21">
          <span className="span-12 inter-normal-black-18px">Partners</span>
        </div>
        <img className="keyboard_arrow_down" src="/img/keyboard-arrow-down-181@2x.png" alt="keyboard_arrow_down" />
      </div>
      <div className="frame-7-2">
        <div className="clients-19">
          <span className="span-12 inter-normal-black-18px">Clients</span>
        </div>
        <img className="keyboard_arrow_down" src="/img/keyboard-arrow-down-181@2x.png" alt="keyboard_arrow_down" />
      </div>
      <Frame5 />
      <Frame62 />
    </div>
  );
}

export default Menu;
