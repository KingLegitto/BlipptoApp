import React from 'react'
import ReactApexChart from 'react-apexcharts';

type LegendPosition = "left" | "top" | "right" | "bottom";


interface DoughnutChartProps {
   title: string;
   legendPosition: LegendPosition;
   width: number;
   label: string[];
   dataset: number[];
 }

const DoughnutChart:React.FC<DoughnutChartProps> = ({title, legendPosition, width, label, dataset}) => {
   const options = {
      title: {
        text: title,
        offsetY: 10,
        style: {
          fontSize: '20px',
          fontFamily: 'Asap',
        },
      },
      legend: {
        position: legendPosition,
        offsetY: 35,
        fontSize: '18px',
        fontFamily: 'Asap',
        fontWeight: 100,
        markers: {
          fillColors: ['#000', '#6484E6', '#FBD83D'],
        },
      },
      labels: label,
      fill: {
        colors: ['#000', '#6484E6', '#FBD83D'],
      },
      plotOptions: {
        pie: {
          donut: {
            labels: {
              show: true,
              total: {
                show: false,
                showAlways: true,
                color: '#BCC1C8',
              },
            },
          },
          customScale: 0.9,
          expandOnClick: false,
        },
      },
      tooltip: {
        enabled: false,
      },
      stroke: {
        width: 5,
        colors: ['#fff'],
      },
      dataLabels: {
        enabled: false,
      },
      responsive: [
        {
          breakpoint: 425,
          options: {
            legend: {
              fontSize: '16px',
              offsetY: 31,
            },
            title: {
              style: {
                fontSize: '16px',
              },
            },
            plotOptions: {
              pie: {
                customScale: 0.8,
              },
            },
          },
        },
        {
          breakpoint: 376,
          options: {
            legend: {
              fontSize: '16px',
            },
            title: {
              style: {
                fontSize: '16px',
              },
            },
          },
        },
      ],
    };

   return(
      <ReactApexChart
      type="donut"
      width={width}
      height="100%"
      series={dataset}
      options={options}
    />
   )
}

export default DoughnutChart
