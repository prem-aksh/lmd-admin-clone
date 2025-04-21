"use client";

import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const pieData = {
  labels: [
    "Beverages Corner",
    "Dairy & Bakery",
    "Fruits",
    "Grains",
    "Snacks",
    "Biscuits",
    "Dry Fruits, Nuts & Seeds",
    "Dals & Pulses",
  ],
  datasets: [
    {
      data: [1, 1, 4, 1, 3, 2, 2, 9],
      backgroundColor: [
        "#3B82F6",
        "#10B981",
        "#F59E0B",
        "#EF4444",
        "#06B6D4",
        "#6366F1",
        "#22C55E",
        "#F97316",
      ],
      borderWidth: 1,
    },
  ],
};

const PieChart = () => {
  return (
    <div className="w-full max-w-[600px]">
      <Pie data={pieData} />
    </div>
  );
};

export default PieChart;
