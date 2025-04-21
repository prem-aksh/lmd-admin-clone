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
  ChevronUp,
  PackageOpen,
  Plus,
  List,
  Archive,
  Upload,
  RefreshCcw,
  Percent,
  BadgePercent,
  BarChart,
} from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Sidebar() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [openMenus, setOpenMenus] = useState({
    products: true,
    reports: false,
  });

  const toggleDropdown = (key) => {
    setOpenMenus((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const menuItems = [
    { label: "Dashboard", icon: LayoutDashboard, value: "dashboard" },
    { label: "Orders", icon: ShoppingCart, value: "orders" },
    { label: "Categories", icon: Tag, value: "categories" },
    {
      label: "Products",
      icon: Boxes,
      value: "products",
      dropdownKey: "products",
      children: [
        { label: "Add Product", value: "add-product", icon: Plus },
        { label: "Manage Products", value: "manage-products", icon: List },
        { label: "Units", value: "units", icon: PackageOpen },
        { label: "Media", value: "media", icon: Archive },
        { label: "Bulk Upload", value: "bulk-upload", icon: Upload },
        { label: "Bulk Update", value: "bulk-update", icon: RefreshCcw },
        { label: "Taxes", value: "taxes", icon: Percent },
        { label: "Brands", value: "brands", icon: BadgePercent },
      ],
    },
    { label: "Stock Management", icon: Layers, value: "stock" },
    { label: "Withdrawal Requests", icon: CreditCard, value: "withdrawals" },
    { label: "Wallet Transactions", icon: Wallet, value: "wallet" },
    {
      label: "Reports",
      icon: FileText,
      value: "reports",
      dropdownKey: "reports",
      children: [
        { label: "Product Sales Report", value: "product-sales", icon: BarChart },
        { label: "Sales Reports", value: "sales-reports", icon: FileText },
      ],
    },
  ];

  return (
    <aside className="w-64 bg-white border-r p-4 overflow-y-auto h-screen">
      <div className="flex items-center mb-8">
        <span className="text-2xl font-semibold ml-2">eGrocer</span>
      </div>

      <nav className="space-y-2">
        {menuItems.map((item) => (
          <div key={item.value}>
            <Button
              variant={activeTab === item.value ? "default" : "ghost"}
              className="w-full justify-start gap-2"
              onClick={() => {
                setActiveTab(item.value);
                if (item.dropdownKey) toggleDropdown(item.dropdownKey);
              }}
            >
              <item.icon className="w-5 h-5" />
              {item.label}
              {item.children &&
                (openMenus[item.dropdownKey] ? (
                  <ChevronUp className="ml-auto h-4 w-4" />
                ) : (
                  <ChevronDown className="ml-auto h-4 w-4" />
                ))}
            </Button>

            {item.children &&
              openMenus[item.dropdownKey] &&
              item.children.map((child) => (
                <button
                  key={child.value}
                  onClick={() => setActiveTab(child.value)}
                  className={`ml-6 flex items-center gap-2 text-sm text-muted-foreground hover:text-primary py-1 ${
                    activeTab === child.value ? "text-primary font-medium" : ""
                  }`}
                >
                  <child.icon className="w-4 h-4" />
                  {child.label}
                </button>
              ))}
          </div>
        ))}
      </nav>
    </aside>
  );
}
