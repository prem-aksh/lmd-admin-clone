"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun, Bell, Globe, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="w-full border-b px-4 py-2 flex items-center justify-end bg-white dark:bg-gray-900 text-gray-800 dark:text-white">
      {/* Right - Controls */}
      <div className="flex items-center gap-4">
        {/* Light/Dark Toggle */}
        {mounted && (
          <Button
            variant="outline"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="rounded-full p-2"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </Button>
        )}

        {/* Icons */}
        <Button variant="ghost" size="icon">
          <Globe size={18} />
        </Button>
        <Button variant="ghost" size="icon">
          <Mail size={18} />
        </Button>
        <Button variant="ghost" size="icon" className="relative">
          <Bell size={18} />
          <span className="absolute -top-1 -right-1 text-[10px] bg-green-600 text-white rounded-full px-1">
            2400
          </span>
        </Button>

        {/* Language Selector */}
        <select
  className="border border-gray-300 dark:border-gray-700 rounded px-2 py-1 text-sm bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-500"
>
  <option className="text-black dark:text-white">English</option>
  <option className="text-black dark:text-white">Hindi</option>
  <option className="text-black dark:text-white">Spanish</option>
</select>

        {/* Profile */}
        <div className="flex items-center gap-2">
          <div className="text-right leading-tight">
            <div className="font-medium">Fresh Finds</div>
            <div className="text-xs text-gray-500 dark:text-gray-300">Seller</div>
          </div>
          <img
            src="/logo.png"
            alt="avatar"
            className="w-8 h-8 rounded-full border"
          />
        </div>
      </div>
    </header>
  );
}
