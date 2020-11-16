import React from "react";
import { useEffect, useState } from "react";
import "./cp2.css";
import { getData } from "../probConstants";
function Cp2() {
  const refreshInterval_Secs = 3;
  const [value, setValue] = useState(null);
  useEffect(() => {
    function c2() {
      setValue(getData("c2"));
    }
    c2();
    const interval = setInterval(() => c2(), refreshInterval_Secs * 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <div className="cp2">
      <h1>Cp2</h1>
      <p>Hello there {value}</p>
    </div>
  );
}

export default Cp2;
