import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const DonutChart = () => {
  const chartRef = useRef();

  useEffect(() => {
    const canvas = chartRef.current;
    const ctx = canvas.getContext("2d");
    const canvasWidth = canvas.parentElement.clientWidth - 40 
    const gradientSegment = ctx.createLinearGradient(0, 0, canvasWidth, 0);
    gradientSegment.addColorStop(0, "#f70202");
    gradientSegment.addColorStop(0.5, "#FFD601");
    gradientSegment.addColorStop(1, "#32cd32");

    const gaugeChartText = {
      id: "gaugeChartText",
      beforeDatasetsDraw(chart) {
        const {
          ctx,
          data,
        } = chart;

        const xCenter = chart.getDatasetMeta(0).data[0].x
        const yCenter = chart.getDatasetMeta(0).data[0].y

        ctx.save()
        ctx.fillStyle = "black"
        ctx.font = window.matchMedia('(max-width: 767px)').matches ? "bold 25px Asap" : "bold 35px Asap"
        ctx.textAlign = "center"
        ctx.textBaseline = "bottom"
        ctx.fillText(`${data.datasets[0].data[0]}%`, xCenter, yCenter)
      },
    };
    const donutChart = new Chart(ctx, {
      type: "doughnut",
      data: {
        datasets: [
          {
            label: "Example Dataset",
            data: [70, 30],
            backgroundColor: [gradientSegment, "rgba(56,57,64,0.04)"],
            borderWidth: 0,
          },
        ],
      },
      options: {
        aspectRatio: 3,
        circumference: 180,
        rotation: 270,
        responsive: true,
        cutout: "70%",
        animation: {
          animateScale: true,
          animateRotate: true,
        },
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            enabled: false,
          },
        },
      },
      plugins: [gaugeChartText ]
    });

    return () => {
      donutChart.destroy();
    };
  }, []);

  return <canvas ref={chartRef} className="absolute securityIndexDiv"/>;
};

export default DonutChart;
