"use client";

import * as React from "react";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { getSystemTheme } from "../theme-provider";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    if (theme === "system") {
      const systemTheme = getSystemTheme();
      setTheme(systemTheme === "light" ? "dark" : "light");
    } else {
      setTheme(theme == "light" ? "dark" : "light");
    }
  };
  return (
    <Button onClick={toggleTheme} variant="outline" size="icon">
      <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    </Button>
  );
}
