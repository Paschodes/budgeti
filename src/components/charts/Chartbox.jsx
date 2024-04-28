// import "./styles.css";
import React, { PureComponent } from "react";
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip} from "recharts";

const data = [
  {
    name: "Sat",
    hr: 0.50,
    pv: 2400,
    amt: 2400
  },
  {
    name: "Sun",
    hr: 0,
    pv: 1398,
    amt: 2210
  },
  {
    name: "Mon",
    hr: 2,
    pv: 9800,
    amt: 2290
  },
  {
    name: "Tue",
    hr: 1.50,
    pv: 3908,
    amt: 2000
  },
  {
    name: "Wed",
    hr: 3,
    pv: 4800,
    amt: 2181
  },
  {
    name: "Thur",
    hr: 2.50,
    pv: 3800,
    amt: 2500
  },
  {
    name: "Fri",
    hr: 4,
    pv: 4300,
    amt: 2100
  }
];

export default class Chartbox extends PureComponent {
  render () {
  return (
    <div>
      <div style={{display: "flex", alignItems: "center", justifyContent: "space-between"}}>
        <h4 style={{marginTop: "0"}}>Spent time</h4>
        <div style={{width: "58px", height: "29px", background: "#FF0000", borderRadius: "10px",
         alignItems: "center", justifyContent: "center", display: "flex", color: "#FFFFFF"}}>
          <span style={{fontSize: "10px"}}>4h 26min</span>
        </div>
      </div>
      <LineChart
        width={420}
        height={200}
        data={data}
        syncId="anyId"
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="hr" stroke="#FF0000" fill="#FF0000" />
      </LineChart>
        
    </div>
  );
  }
}
