import { Package, ShoppingCart, Target, Wallet } from "lucide-react";
import PieChart from "./dashboard/pie";

const stats = [
  {
    label: "Orders",
    value: 1412,
    icon: <ShoppingCart size={40} className="text-white" />,
    bg: "bg-blue-600",
  },
  {
    label: "Products",
    value: 31,
    icon: <Package size={40} className="text-white" />,
    bg: "bg-orange-400",
  },
  {
    label: "Category",
    value: 11,
    icon: <Target size={40} className="text-white" />,
    bg: "bg-cyan-400",
  },
  {
    label: "Balance",
    value: "₹ 386.96",
    icon: <Wallet size={40} className="text-white" />,
    bg: "bg-green-500",
  },
];

export default function Dashboard() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
        Dashboard
      </h1>

      <div className="flex justify-around flex-wrap">
        <div className="grid grid-cols-2 gap-6 mb-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex items-center bg-white dark:bg-gray-800 rounded-xl shadow-md dark:shadow-none p-6"
            >
              <div className={`rounded-full p-4 ${stat.bg} mr-4`}>
                {stat.icon}
              </div>
              <div>
                <p className="text-gray-500 dark:text-gray-300 text-sm">{stat.label}</p>
                <p className="text-xl font-semibold text-primary dark:text-white">
                  {stat.value}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-xl shadow-md dark:shadow-none p-6">
          <h2 className="text-lg font-semibold text-primary dark:text-white mb-4">
            Categorywise Product Count
          </h2>
          <PieChart />
        </div>
      </div>
    </div>
  );
}
