import React from "react";
import { useEffect, useState } from "react";
import "./cp4.css";
import { getData } from "../probConstants";
function Cp4() {
  const refreshInterval_Secs = 7;
  const [value, setValue] = useState(null);
  useEffect(() => {
    function c4() {
      setValue(getData("c4"));
    }
    c4();
    const interval = setInterval(() => c4(), refreshInterval_Secs * 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <div className="cp4">
      <h1>Cp4</h1>
      <p>A fox jumped {value}</p>
    </div>
  );
}

export default Cp4;
