import React from "react";
import { useEffect, useState } from "react";
import "./cp1.css";
import { getData } from "../probConstants";
function Cp1() {
  const refreshInterval_Secs = 1;
  const [value, setValue] = useState(null);
  useEffect(() => {
    function c1() {
      setValue(getData("c1"));
    }
    c1();
    const interval = setInterval(() => c1(), refreshInterval_Secs * 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <div className="cp1">
      <h1>Cp1</h1>
      <p>Hi {value}</p>
    </div>
  );
}

export default Cp1;
