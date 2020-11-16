import React from "react";
import RenderData from "../renderdata/RenderData";
import "./cp1.css";
function Cp1() {
  return (
    <div className="cp1">
      <RenderData intervalRate={60} componentName={"c1"} data="hi " />
    </div>
  );
}

export default Cp1;
