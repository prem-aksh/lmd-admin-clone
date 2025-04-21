"use client";

import { useState } from "react";
import Dashboard from "./components/Dashboard";
import Orders from "./components/Orders";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";


export default function SellerPage() {
  const [activeTab, setActiveTab] = useState("dashboard");

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <Dashboard />;
      case "orders":
        return <Orders />;
      //   case "categories":
      //     return <Categories />;
      //   case "products":
      //     return <Products />;
      //   case "stock":
      //     return <StockManagement />;
      //   case "withdrawals":
      //     return <WithdrawalRequests />;
      //   case "wallet":
      //     return <WalletTransactions />;
      //   case "reports":
      //     return <Reports />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex h-screen">
      <Sidebar active={activeTab} setActive={setActiveTab} />
      <div className="flex flex-col flex-1">
        <Header />
        <main className="p-4 overflow-y-auto bg-gray-100">{renderContent()}</main>
      </div>
    </div>
  );
}
