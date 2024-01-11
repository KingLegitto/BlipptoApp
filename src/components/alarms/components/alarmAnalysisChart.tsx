import React from 'react'
import { alarmAnalysisData } from '../../../dummydata/alarmAnalysisDummyData';

import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
  } from "recharts";


const AlarmAnalysisChart:React.FC = () => {
  let fontSize
  if (window.innerWidth < 768) {
    fontSize = 9;
  }
  if (window.innerWidth > 768 && window.innerWidth < 1440) {
    fontSize = 10;
  }
  if (window.innerWidth > 1440) {
    fontSize = 17;
  }
  const height = window.innerWidth < 768 ? "75%" : "85%";
  const marginleft = window.innerWidth <= 1024 ? -36 : -20;


    return(
        <ResponsiveContainer width="100%" height={height}>
        <LineChart
          data={ alarmAnalysisData }
          margin={{
            top: 10,
            right: 0,
            left: marginleft,
            bottom: 10,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" fontSize={fontSize} />
          <YAxis type="number" domain={[0, 100]} fontSize={fontSize}  />
          <Tooltip />
          <Line
            dataKey="alarmFrequency"
            stroke="#6484e6"
          />
          <Line
            dataKey="validAlarms"
            stroke="#ffd601"
          />
          <Line
            dataKey="falseAlarms"
            stroke="#32cd32"
          />
        </LineChart>
      </ResponsiveContainer>
    )
}

export default AlarmAnalysisChart