import React from "react";
import { useEffect, useState } from "react";
import { genQuery, METRIC_ENDPOINT } from "../probConstants";
import API from "../API/api";

function RenderData({ intervalRate, componentName, data, data2 }) {
  const [value, setValue] = useState(null);
  const fetchData = (query, id) => {
    API.post(
      `${METRIC_ENDPOINT}`,
      JSON.stringify({
        title: "foo",
        body: query,
        userId: id,
      })
    )
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
    return id;
  };

  const getData = (component) => {
    const timeRange = Math.floor(Math.random() * 50) + 1;
    const query = genQuery(timeRange, component, Math.random());
    const data = fetchData(query, timeRange);
    return data;
  };

  useEffect(() => {
    function getAndSetData() {
      setValue(getData(componentName));
    }
    getAndSetData();
    const interval = setInterval(() => getAndSetData(), intervalRate * 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <h1>{componentName}</h1>
      <p>
        {componentName != "c3" && componentName != "c5" ? (
          <p>
            {data} {value}
          </p>
        ) : componentName == "c5" ? (
          <p>
            {value} {data}
          </p>
        ) : (
          <p>
            {data} {value} {data2}
          </p>
        )}
      </p>
    </div>
  );
}

export default RenderData;
