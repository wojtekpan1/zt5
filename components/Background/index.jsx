import React from "react";
import "./Background.css";

function Background(props) {
  const { src, className } = props;

  return (
    <div className={`background ${className || ""}`} style={{ backgroundImage: `url(${src})` }}>
      <div className="hans-reniers-l-qgjcmy5qc-m-unsplash-2"></div>
    </div>
  );
}

export default Background;
