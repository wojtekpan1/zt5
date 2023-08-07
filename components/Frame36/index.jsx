import React from "react";
import Frame29 from "../Frame29";
import "./Frame36.css";

function Frame36(props) {
  const { frame291Props, frame292Props, frame293Props, frame294Props } = props;

  return (
    <div className="frame-3-19">
      <Frame29 rectangle20={frame291Props.rectangle20} frame184963Props={frame291Props.frame184963Props} />
      <Frame29 rectangle20={frame292Props.rectangle20} frame184963Props={frame292Props.frame184963Props} />
      <Frame29 rectangle20={frame293Props.rectangle20} frame184963Props={frame293Props.frame184963Props} />
      <Frame29 rectangle20={frame294Props.rectangle20} frame184963Props={frame294Props.frame184963Props} />
    </div>
  );
}

export default Frame36;
