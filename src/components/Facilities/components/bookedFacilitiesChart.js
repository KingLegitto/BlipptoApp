import React from 'react'
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";


const data = [20,50,20,95,20,73,20,60,57,60,60,60];

const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]

const BookedFacilitiesChart = () => {
    const fontSize = window.innerWidth < 768 ? 10 : 17
    let barSize
    if(window.innerWidth < 768){
       barSize = 13
    }
    if(window.innerWidth > 768 && window.innerWidth < 1440){
        barSize = 17
    } 
    if(window.innerWidth > 1440){
        barSize = 35
    }

    return (
        <ResponsiveContainer width="100%" height="85%">
            <BarChart
                data={getColorOfBars(data, months, "#6484E6", "#e4e6f7" )}
                margin={{
                    top: 10,
                    right: 0,
                    left: -20,
                    bottom: 10,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" fontSize={fontSize}/>
                <YAxis type="number" domain={[0, 100]} />
                <Tooltip cursor={{fill: 'transparent'}} />
                <Bar
                    type="monotone"
                    dataKey="value"
                    barSize={barSize}
                />
            </BarChart>
        </ResponsiveContainer>
    )
}

export default BookedFacilitiesChart

function getColorOfBars(data,months, color1, color2){
    let previousElement= null
    let previousColor = null
    const newArray = data.map((el,idx)=> {
     if(idx === 0){
       previousColor = color1
       previousElement = el
       return {
         name: months[idx],
         value: el,
         fill: color1
       }
     }
     else{
       if(el > previousElement){
         previousColor = color1
         previousElement = el
         return {
           name: months[idx],
           value: el,
           fill: color1
         }
       }
       if(el < previousElement){
         previousColor = color2
         previousElement = el
         return {
           name: months[idx],
           value: el,
           fill: color2
         }
       }
       if(el === previousElement){
         previousElement = el
         return {
           name: months[idx],
           value: el,
           fill: previousColor
         }
       }
     }
    })
   
    return newArray
   }