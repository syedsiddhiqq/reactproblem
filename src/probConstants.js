const METRIC_ENDPOINT = "/metrics";
const DEV_SVR = "https://dev.dummy-svr.com";

export const URL = `${DEV_SVR}${METRIC_ENDPOINT}`;

export const genQuery = (timeRange, componentName, seed) => {
  return `SELECT ${timeRange} WHERE c=${componentName} AND x = ${
    seed % 7 == 0 ? "true" : "false"
  }`;
};

export const getData = (component) => {
  const timeRange = Math.floor(Math.random() * 10) + 1;
  const query = genQuery(timeRange, component, Math.random());
  const data = "tempdata " + timeRange;
  return data;
};

export const loading = () => {
  return "<h2>Loading</h2>";
};
