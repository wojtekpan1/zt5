import React from "react";
import { Link } from "react-router-dom";
import "./ReadMore.css";

function ReadMore(props) {
  const { arrowsleftright } = props;

  return (
    <Link to="/news">
      <div className="read-more">
        <div className="read-more-1 valign-text-middle notoserif-medium-persimmon-20px">Read more</div>
        <img className="arrows-left-right" src={arrowsleftright} alt="ArrowsLeftRight" />
      </div>
    </Link>
  );
}

export default ReadMore;
