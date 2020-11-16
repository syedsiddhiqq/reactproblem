import React from "react";
import RenderData from "../renderdata/RenderData";
import "./cp2.css";
function Cp2() {
  return (
    <div className="cp2">
      <RenderData
        intervalRate={15}
        componentName={"c2"}
        data={"Hello there "}
      />
    </div>
  );
}

export default Cp2;
