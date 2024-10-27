"use client";

import React, { useState, useEffect, useRef } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";

interface DynamicScrollAreaProps {
  children: React.ReactNode;
}

export default function DynamicScrollArea({
  children,
}: DynamicScrollAreaProps) {
  const [scrollHeight, setScrollHeight] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateHeight = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const bottomOffset = 130; // Adjust this value based on your needs
        const newHeight = windowHeight - rect.top - bottomOffset;
        setScrollHeight(Math.max(newHeight, 200));
      }
    };

    updateHeight();
    requestAnimationFrame(updateHeight);
    window.addEventListener("resize", updateHeight);

    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  return (
    <div ref={containerRef} className="w-full h-full">
      <ScrollArea
        className="rounded-md border h-full border-4"
        style={{ height: `${scrollHeight}px` }}
      >
        <div className="p-4">{children}</div>
      </ScrollArea>
    </div>
  );
}
