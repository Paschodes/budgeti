import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Month", "A", "B"],
  ["Nov", 5, 2],
  ["Dec", 8, 5],
  ["Jan", 5, 5],
  ["Feb", 5, 2],
  ["Mar", 8, 5],
  ["Apr", 5, 5],
  ["May", 5, 2],
  ["Jun", 8, 5],
];


const ChartStat = () => {
  return (
    <Chart
      chartType="Bar"
      width= "97%"
      height="340px"
      data={data}
      
    />
  );
}

export default ChartStat;