import React from 'react';
// import chartstyle from './PChart.module.css'
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Group A', value: 300 },
  { name: 'Group B', value: 200 },
  { name: 'Group C', value: 500 },
];
const COLORS = ['#3326AE', '#fff', '#fff'];

const ChartRep = () => {
  return (
    <ResponsiveContainer width={300} height={300}>
      <PieChart>
        <Pie
          data={data}
          cx={120}
          cy={200}
          innerRadius={60}
          outerRadius={70}
          // fill="#8884d8"
          // paddingAngle={1}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        
      </PieChart>
    </ResponsiveContainer>
  );
};

export default ChartRep;