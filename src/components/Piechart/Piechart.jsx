import React, { PureComponent } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

import styles from './PieChart.module.css'

const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const Example = ({data}) => {

  console.log(data);
  let intermediate = data.reduce((acc, item) => {
    let key = item.category;
    if (!acc[key]) {
      acc[key] = 0;
    }
    acc[key]++;
    return acc;
  }, {});
  
  let result = Object.keys(intermediate).map(key => ({
    category: key,
    value: intermediate[key]
  }));
  
  return (
    <>
    <ResponsiveContainer width="25%" height="100%">
      <PieChart width={50} height={50}>
        <Pie
          data={result}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
          
        >
          {result.map((entry, index) => (
            <Cell dataKey={entry.category} key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
    <div>
      <h5><span className={styles.box}></span>Food</h5>
      <h5>Green -Travel</h5>
      <h5>Yellow -Entertainment</h5>
    </div>
    </>
  );
};

export default Example;

