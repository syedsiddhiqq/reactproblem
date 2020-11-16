export const METRIC_ENDPOINT = "posts";

export const genQuery = (timeRange, componentName, seed) => {
  return `SELECT ${timeRange} WHERE c=${componentName} AND x = ${
    seed % 7 == 0 ? "true" : "false"
  }`;
};
