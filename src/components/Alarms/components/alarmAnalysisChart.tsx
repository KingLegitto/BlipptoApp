import React from 'react'
import { alarmAnalysisData } from '../../../dummydata/alarmAnalysis';
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
          data={alarmAnalysisData}
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
            stroke="#6484E6"
          />
          <Line
            dataKey="pv"
            stroke="#8884d8"
          />
          <Line
            dataKey="sv"
            stroke="#82ca9d"
          />
        </LineChart>
      </ResponsiveContainer>
    )
}

export default AlarmAnalysisChart