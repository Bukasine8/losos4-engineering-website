"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface GradientBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  variant?: "primary" | "secondary" | "accent" | "gradient-multi";
  animated?: boolean;
  children?: React.ReactNode;
}

export const GradientBackground = ({
  variant = "primary",
  animated = true,
  className,
  children,
  ...props
}: GradientBackgroundProps) => {
  const variants = {
    primary: "from-blue-600 via-blue-500 to-blue-400",
    secondary: "from-indigo-600 via-purple-500 to-pink-400",
    accent: "from-orange-500 via-red-500 to-pink-500",
    "gradient-multi": "from-blue-600 via-purple-500 to-orange-500",
  };

  return (
    <div
      className={cn(
        "relative overflow-hidden",
        animated && "bg-gradient-to-r",
        !animated && "bg-gradient-to-r",
        variants[variant],
        animated && "animate-gradient-shift bg-[length:200%_100%]",
        className
      )}
      {...props}
    >
      {/* Decorative blur elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default GradientBackground;
