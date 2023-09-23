import React from 'react'
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
  } from "recharts";


  const data = [
    {
      name: "",
      value: "",
    },
    {
      name: "Safety Index",
      value: 50,
    },
    {
      name: "",
      value: "20",
    },
    {
      name: "Storage",
      value: 95,
    },
    {
      name: "",
      value: "20",
    },
    {
      name: "Satisfaction",
      value: 73,
    },
    {
      name: "",
      value: "20",
    },
    {
      name: "Perm. guest",
      value: 60,
    },
    {
      name: "",
      value: 0,
    },
  ];

export default function FirstResidentChart(){
  const fontSize = window.innerWidth < 768 ? 10 : 17;
    return(
        <ResponsiveContainer width="100%" height="85%">
        <AreaChart
          data={data}
          margin={{
            top: 10,
            right: 0,
            left: -20,
            bottom: 0,
          }}
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#6484E6" stopOpacity={0.5} />
              <stop offset="95%" stopColor="#6484E6" stopOpacity={0.2} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" fontSize={fontSize}/>
          <YAxis type="number" domain={[0, 100]} />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="value"
            stroke="#6484E6"
            strokeWidth={"3px"}
            fillOpacity={1}
            fill="url(#colorUv)"
          />
        </AreaChart>
      </ResponsiveContainer>
    )
}