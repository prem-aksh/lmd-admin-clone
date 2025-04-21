import {
  ShoppingCart,
  Package,
  Users,
  Store,
  Target,
  Share2,
  Layers3,
  Landmark,
  MapPin,
} from "lucide-react";
import PieChart from "./dashboard/pie";
import BarChart from "./dashboard/barchart";

const cards = [
  {
    label: "Orders",
    value: 5537,
    icon: <ShoppingCart className="text-white w-6 h-6" />,
    color: "bg-blue-500",
  },
  {
    label: "Products",
    value: 161,
    icon: <Package className="text-white w-6 h-6" />,
    color: "bg-orange-400",
  },
  {
    label: "Customers",
    value: 1852,
    icon: <Users className="text-white w-6 h-6" />,
    color: "bg-cyan-400",
  },
  {
    label: "Sellers",
    value: 7,
    icon: <Store className="text-white w-6 h-6" />,
    color: "bg-green-400",
  },
  {
    label: "Categories",
    value: 15,
    icon: <Target className="text-white w-6 h-6" />,
    color: "bg-emerald-400",
  },
  {
    label: "Brands",
    value: 49,
    icon: <Share2 className="text-white w-6 h-6" />,
    color: "bg-cyan-400",
  },
  {
    label: "Sections",
    value: 4,
    icon: <Layers3 className="text-white w-6 h-6" />,
    color: "bg-orange-400",
  },
  {
    label: "City",
    value: 1,
    icon: <MapPin className="text-white w-6 h-6" />,
    color: "bg-blue-600",
  },
];

const bottomCards = [
  { label: "Packet Products", value: 209 },
  { label: "Loose Products", value: 158 },
  { label: "Product(s) sold out!", value: 2 },
  { label: "Product(s) in low stock!", value: 3 },
];

const currentMonth = new Date().toLocaleString("default", { month: "long" });

export default function DashboardContent() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-sky-900 mb-6">Dashboard</h2>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left Side: Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 flex-1 max-w-[1100px] w-full">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="bg-white shadow-md rounded-lg p-3 max-w-[250px] w-full flex flex-col justify-center items-center text-center"
            >
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 ${card.color}`}
              >
                {card.icon}
              </div>
              <div className="text-xl font-bold text-sky-900">{card.value}</div>
              <div className="text-sky-600">{card.label}</div>
            </div>
          ))}
        </div>

        {/* Right Side: Pie Chart */}
        <div className="bg-white shadow-md rounded-lg p-4 w-full lg:w-[420px]">
          <h3 className="text-lg font-bold text-sky-900 mb-2">
            Categorywise Product Count
          </h3>
          <PieChart />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 mt-8">
        {/* Left Side: Bar Chart */}
        <div className="bg-white shadow-md rounded-lg p-4 w-full lg:w-[70%]">
          <h3 className="text-lg font-bold text-sky-900 mb-2">
            Weekly Sales{" "}
            <span className="text-sm font-normal text-sky-700">
              Total Sale In Last Week (Month: {currentMonth})
            </span>
          </h3>

          <BarChart />
        </div>

        {/* Right Side: Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full lg:w-[30%]">
          {bottomCards.map((card, idx) => (
            <div
              key={idx}
              className="bg-white shadow-md rounded-lg p-4 text-center flex flex-col items-center justify-center"
            >
              <div className="text-lg font-semibold text-sky-900 mb-1">
                {card.label}
              </div>
              <div className="text-2xl font-bold text-sky-900 mb-2">
                {card.value}
              </div>
              <button className="bg-blue-50 text-emerald-500 font-semibold text-lg px-10 py-2 rounded-md hover:underline transition">
                More Info
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
