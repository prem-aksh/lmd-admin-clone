"use client";

import {
  LayoutDashboard,
  ShoppingCart,
  Tag,
  Boxes,
  Layers,
  Wallet,
  CreditCard,
  FileText,
  ChevronDown,
} from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Sidebar() {
  const [activeTab, setActiveTab] = useState("dashboard");

  const menuItems = [
    { label: "Dashboard", icon: LayoutDashboard, value: "dashboard" },
    { label: "Orders", icon: ShoppingCart, value: "orders" },
    { label: "Categories", icon: Tag, value: "categories" },
    {
      label: "Products",
      icon: Boxes,
      value: "products",
      children: [
        { label: "Product List", value: "products" },
        { label: "Add Product", value: "add-product" }, // Optional
      ],
    },
    { label: "Stock Management", icon: Layers, value: "stock" },
    { label: "Withdrawal Requests", icon: CreditCard, value: "withdrawals" },
    { label: "Wallet Transactions", icon: Wallet, value: "wallet" },
    {
      label: "Reports",
      icon: FileText,
      value: "reports",
      children: [
        { label: "Sales", value: "reports" },
        { label: "Performance", value: "performance-report" }, // Optional
      ],
    },
  ];

  return (
    <aside className="w-64 bg-white border-r p-4">
      <div className="flex items-center mb-8">
        {/* <img src="/assets/logo.svg" alt="eGrocer" className="w-10 h-10" /> */}
        <span className="text-2xl font-semibold ml-2">eGrocer</span>
      </div>
      <nav className="space-y-2">
        {menuItems.map((item) => (
          <div key={item.value}>
            <Button
              variant={activeTab === item.value ? "default" : "ghost"}
              className="w-full justify-start gap-2"
              onClick={() => setActiveTab(item.value)}
            >
              <item.icon className="w-5 h-5" />
              {item.label}
              {item.children && <ChevronDown className="ml-auto h-4 w-4" />}
            </Button>
            {activeTab === item.value &&
              item.children?.map((child) => (
                <button
                  key={child.value}
                  onClick={() => setActiveTab(child.value)}
                  className="ml-6 text-sm text-left text-muted-foreground hover:text-primary"
                >
                  • {child.label}
                </button>
              ))}
          </div>
        ))}
      </nav>
    </aside>
  );
}
