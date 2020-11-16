import React from "react";
import { useEffect, useState } from "react";
import "./cp3.css";
import { getData } from "../probConstants";
function Cp3() {
  const refreshInterval_Secs = 5;
  const [value, setValue] = useState(null);
  useEffect(() => {
    function c3() {
      setValue(getData("c3"));
    }
    c3();
    const interval = setInterval(() => c3(), refreshInterval_Secs * 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <div className="cp3">
      <h1>Cp3</h1>
      <p>Charlie {value} Tango</p>
    </div>
  );
}

export default Cp3;
