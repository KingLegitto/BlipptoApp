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
      name: "Security Index",
      value: 50,
    },
    {
      name: "",
      value: "20",
    },
    {
      name: "Storage space",
      value: 95,
    },
    {
      name: "",
      value: "20",
    },
    {
      name: "Satisfactory score",
      value: 73,
    },
    {
      name: "",
      value: "20",
    },
    {
      name: "Permanent guest",
      value: 60,
    },
    {
      name: "",
      value: 0,
    },
  ];

export default function FirstResidentChart(){
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
          <XAxis dataKey="name" fontSize={'10px'}/>
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