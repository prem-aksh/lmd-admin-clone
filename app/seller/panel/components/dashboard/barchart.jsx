"use client";

import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const data = {
  labels: ["15-Apr", "14-Apr", "13-Apr", "12-Apr", "11-Apr", "10-Apr", "09-Apr"],
  datasets: [
    {
      label: "Sales",
      data: [910, 3402.2, 81.6, 0, 3351.45, 170, 1104],
      backgroundColor: "#34D399", 
      borderRadius: 4,
    },
  ],
};

const options = {
  plugins: {
    legend: { display: false },
    tooltip: { callbacks: { label: (ctx) => `${ctx.raw}` } },
  },
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

export default function BarChart() {
  return <Bar data={data} options={options} />;
}
