"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
  // const { theme, setTheme } = useTheme();
  // const [mounted, setMounted] = useState(false);

  // useEffect(() => {
  //   setMounted(true);
  // }, []);

  return (
    <header className="w-full border-b px-4 py-2 flex items-center justify-end gap-4 bg-white dark:bg-gray-900 text-gray-800 dark:text-white">
      {/* Light/Dark Toggle */}
      {/* {mounted && (
        <Button
          variant="outline"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="rounded-full p-2"
        >
          {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
        </Button>
      )} */}

      {/* Placeholder Buttons */}
      <Button variant="ghost">🌍</Button>
      <Button variant="ghost">✉️</Button>
      <Button variant="ghost">
        <div className="relative">
          🔔
          <span className="absolute -top-1 -right-2 text-[10px] bg-green-600 text-white rounded-full px-1">
            2400
          </span>
        </div>
      </Button>

      {/* Language Selector */}
      <select className="border rounded px-2 py-1 text-sm bg-transparent">
        <option>English</option>
        <option>Hindi</option>
        <option>Spanish</option>
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
    </header>
  );
}
