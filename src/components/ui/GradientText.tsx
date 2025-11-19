"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface GradientTextProps extends React.HTMLProps<HTMLDivElement> {
  gradient?: "primary-accent" | "blue-purple" | "purple-pink" | "custom";
  animate?: boolean;
  children?: React.ReactNode;
}

export const GradientText = ({
  gradient = "primary-accent",
  animate = false,
  className,
  children,
  ...props
}: GradientTextProps) => {
  const gradients = {
    "primary-accent": "from-primary-blue to-accent-orange",
    "blue-purple": "from-blue-600 to-purple-600",
    "purple-pink": "from-purple-600 to-pink-600",
    "custom": "from-primary-blue via-purple-500 to-accent-orange",
  };

  return (
    <div
      className={cn(
        "bg-gradient-to-r",
        gradients[gradient],
        "bg-clip-text text-transparent",
        animate && "bg-[length:200%_100%] animate-gradient-shift",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default GradientText;
