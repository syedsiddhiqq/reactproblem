import React from "react";
import RenderData from "../renderdata/RenderData";
import "./cp5.css";
function Cp5() {
  return (
    <div className="cp5">
      <RenderData intervalRate={10} componentName={"c5"} data=" is king" />
    </div>
  );
}

export default Cp5;
