import React from "react";
import ReactApexChart from "react-apexcharts";

const SecurityIndexChart: React.FC = () => {
  const options = {
    plotOptions: {
      radialBar: {
        startAngle: -90,
        endAngle: 90,
        track: {
          background: "#e7e7e7",
          startAngle: -90,
          endAngle: 90,
        },
        dataLabels: {
          name: {
            show: false,
          },
          value: {
            offsetY: -2,
            fontSize: "25px",
            show: true,
            color: "#6484E6",
          },
        },
      },
    },
    fill: {},
    labels: ["Progress"],
  };

  return <ReactApexChart type="radialBar" options={options} series={[67]} />;
};

export default SecurityIndexChart;
