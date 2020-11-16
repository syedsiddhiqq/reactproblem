import React from "react";
import RenderData from "../renderdata/RenderData";
import "./cp4.css";
function Cp4() {
  return (
    <div className="cp4">
      <RenderData
        intervalRate={20}
        componentName={"c4"}
        data={"A fox jumped "}
      />
    </div>
  );
}

export default Cp4;
