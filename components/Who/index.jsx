import React from "react";
import Client1 from "../Client1";
import "./Who.css";

function Who() {
  return (
    <div className="who">
      <div className="who-use-this-1 inter-bold-black-40px">
        <span className="inter-bold-black-40px">Who use this</span>
      </div>
      <div className="client-container-2">
        <Client1 />
        <Client1 />
      </div>
      <div className="client-container-3">
        <Client1 />
        <Client1 />
      </div>
    </div>
  );
}

export default Who;
