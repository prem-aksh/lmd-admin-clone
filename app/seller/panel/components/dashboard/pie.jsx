import React from "react";
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

const pieData = {
  labels: [
    "Beverages Corner",
    "Dairy & Bakery",
    "Fruits",
    "Grains",
    "Candy",
    "Snacks",
    "Chocolate",
    "Biscuits",
    "Dry Fruits, Nuts & Seeds",
    "Dals & Pulses",
    "Personal Care",
  ],
  datasets: [
    {
      data: [12, 11, 16, 6, 5, 3, 2, 4, 3, 7, 3],
      backgroundColor: [
        "#3B82F6",
        "#10B981",
        "#F59E0B",
        "#EF4444",
        "#E11D48",
        "#06B6D4",
        "#7C3AED",
        "#6366F1",
        "#22C55E",
        "#F97316",
        "#0EA5E9",
      ],
      borderWidth: 1,
    },
  ],
};

const options = {
  plugins: {
    legend: {
      position: "bottom",
    },
    datalabels: {
      color: "#fff",
      formatter: (value, context) => {
        const total = context.chart._metasets[0].total;
        const percentage = ((value / total) * 100).toFixed(1) + "%";
        return percentage;
      },
    },
  },
};

export default function PieChart() {
  return <Pie data={pieData} options={options} />;
}
