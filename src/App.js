import { useEffect, useState } from "react";
import "./App.css";
import Cp1 from "./cp1/cp1";
import Cp2 from "./cp2/cp2";
import Cp3 from "./cp3/cp3";
import Cp4 from "./cp4/cp4";
import Cp5 from "./cp5/cp5";
import { URL, genQuery, loading } from "./probConstants";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(count + 1);
    console.log(count);
    // setCount(count + 1);
    // console.log(count + URL);
    console.log(URL);
  }, []);
  return (
    <div className="App">
      <Cp1 />
      <Cp2 />
      <Cp3 />
      <Cp4 />
      <Cp5 />
    </div>
  );
}

export default App;
