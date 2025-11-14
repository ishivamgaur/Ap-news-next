
"use client"
import React from "react";
import { Bar, Doughnut, Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement);

const ElectionChart = ({ type = "bar", labels, values, colors }) => {
  const data = {
    labels,
    datasets: [
      {
        label: "Count",
        data: values,
        backgroundColor: colors,
        borderColor: colors,
        borderWidth: 1,
      },
    ],
  };

  const chartTypes = {
    bar: Bar,
    doughnut: Doughnut,
    pie: Pie,
  };

  const ChartComponent = chartTypes[type];

  return (
    <div className="w-full">
      <ChartComponent data={data} height={200} />
    </div>
  );
};

export default ElectionChart;
