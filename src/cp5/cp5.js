import React from "react";
import { useEffect, useState } from "react";
import "./cp5.css";
import { getData } from "../probConstants";
function Cp5() {
  const refreshInterval_Secs = 9;
  const [value, setValue] = useState(null);
  useEffect(() => {
    function c5() {
      setValue(getData("c5"));
    }
    c5();
    const interval = setInterval(() => c5(), refreshInterval_Secs * 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <div className="cp5">
      <h1>Cp5</h1>
      <p>{value} is king </p>
    </div>
  );
}

export default Cp5;
