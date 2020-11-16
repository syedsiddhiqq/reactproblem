import React from "react";
import RenderData from "../renderdata/RenderData";
import "./cp3.css";
function Cp3() {
  return (
    <div className="cp3">
      <RenderData
        intervalRate={42}
        componentName={"c3"}
        data={"charlie"}
        data2={"tango"}
      />
    </div>
  );
}

export default Cp3;
