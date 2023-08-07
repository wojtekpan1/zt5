import React from "react";
import "./Popup.css";

function Popup(props) {
  const { titleLoremIpsumD, address, linkToNews, rectangle12751 } = props;

  return (
    <div className="container-center-horizontal">
      <div className="popup-1 screen">
        <div className="popup">
          <div className="frame-184953">
            <div className="frame-184962">
              <h1 className="title-lorem-ipsum-d notoserif-black-pine-green-48px">{titleLoremIpsumD}</h1>
              <div className="address-11 notoserif-medium-shark-18px">{address}</div>
              <div className="link-to-news inter-normal-persimmon-16px">{linkToNews}</div>
            </div>
            <p className="lorem-ipsum-dolor-si-67 notoserif-normal-black-16px">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sem erat, interdum eget est sed, tincidunt
              tincidunt sapien. Pellentesque consectetur congue rhoncus. Nullam ultrices efficitur justo nec congue.
              Aliquam justo urna, scelerisque sit amet molestie at, tristique id ex. Maecenas nec volutpat justo. Donec
              ultrices augue eros, non placerat nunc facilisis nec. Fusce cursus sit amet ligula semper volutpat.
              <br />
              <br />
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sem erat, interdum eget est sed, tincidunt
              tincidunt sapien. Pellentesque consectetur congue rhoncus. Nullam ultrices efficitur justo nec congue.
              Aliquam justo urna, scelerisque sit amet molestie at, tristique id ex. Maecenas nec volutpat justo. Donec
              ultrices augue eros, non placerat nunc facilisis nec. Fusce cursus sit amet ligula semper volutpat.
              <br />
              <br />
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sem erat, interdum eget est sed, tincidunt
              tincidunt sapien. Pellentesque consectetur congue rhoncus. Nullam ultrices efficitur justo nec congue.
              Aliquam justo urna, scelerisque sit amet molestie at, tristique id ex. Maecenas nec volutpat justo. Donec
              ultrices augue eros, non placerat nunc facilisis nec. Fusce cursus sit amet ligula semper volutpat.
            </p>
            <img className="rectangle-12751-8" src={rectangle12751} alt="Rectangle 12751" />
          </div>
          <img className="icon-close-1" src="/img/x.svg" alt="icon-close" />
        </div>
      </div>
    </div>
  );
}

export default Popup;
