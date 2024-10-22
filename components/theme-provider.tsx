"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  const [mounted, setMounted] = React.useState(false);

  // Use useEffect to ensure the component is only mounted on the client side
  React.useEffect(() => {
    setMounted(true);
  }, []);

  // If not mounted, return null or a loading state
  if (!mounted) {
    return null; // Prevents hydration issues
  }

  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system" // Use system theme as default
      enableSystem
      disableTransitionOnChange
      {...props}
    >
      {children}
    </NextThemesProvider>
  );
}
