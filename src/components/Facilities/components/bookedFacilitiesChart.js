import React from 'react'
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    ResponsiveContainer,
} from "recharts";


const data = [
    {
        name: "Jan",
        value: "20",
    },
    {
        name: "Feb",
        value: 50,
    },
    {
        name: "Mar",
        value: "20",
    },
    {
        name: "Apr",
        value: 95,
    },
    {
        name: "May",
        value: "20",
    },
    {
        name: "Jun",
        value: 73,
    },
    {
        name: "Jul",
        value: "20",
    },
    {
        name: "Aug",
        value: 60,
    },
    {
        name: "Sep",
        value: "60",
    },
    {
        name: "Oct",
        value: "60",
    },
    {
        name: "Nov",
        value: "60",
    },
    {
        name: "Dec",
        value: "60",
    },
];

export default function BookedFacilitiesChart() {
    return (
        <ResponsiveContainer width="100%" height="85%">
            <BarChart
                data={data}
                margin={{
                    top: 10,
                    right: 0,
                    left: -20,
                    bottom: 0,
                }}
            >
                {/* <defs>
                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#6484E6" stopOpacity={0.5} />
                        <stop offset="95%" stopColor="#6484E6" stopOpacity={0.2} />
                    </linearGradient>
                </defs> */}
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis type="number" domain={[0, 100]} />
                <Bar
                    type="monotone"
                    dataKey="value"
                    fill="#6484E6"
                    barSize={25}
                    
                    // strokeWidth={"3px"}
                    // fillOpacity={1}
                    // fill="url(#colorUv)"
                />
            </BarChart>
        </ResponsiveContainer>
    )
}