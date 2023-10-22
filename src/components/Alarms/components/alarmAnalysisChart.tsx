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
    return(
        <ResponsiveContainer width="100%" height="85%">
        <LineChart
          data={ alarmAnalysisData }
          margin={{
            top: 10,
            right: 0,
            left: -20,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name"  />
          <YAxis type="number" domain={[0, 100]} />
          <Tooltip />
          <Line
            dataKey="uv"
            stroke="#6484e6"
          />
          <Line
            dataKey="pv"
            stroke="#ffd601"
          />
          <Line
            dataKey="sv"
            stroke="#32cd32"
          />
        </LineChart>
      </ResponsiveContainer>
    )
}

export default AlarmAnalysisChart