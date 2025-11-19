"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface PageBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  variant?: "dots" | "grid" | "waves" | "gradient-mesh" | "animated";
  children?: React.ReactNode;
}

export const PageBackground = ({
  variant = "animated",
  className,
  children,
  ...props
}: PageBackgroundProps) => {
  return (
    <div className={cn("relative min-h-screen", className)} {...props}>
      {/* Base background */}
      <div className="fixed inset-0 -z-50 bg-background-light dark:bg-background-dark" />

      {/* Animated gradient mesh */}
      <div className="fixed inset-0 -z-40 bg-animated-gradient bg-pattern-dots pointer-events-none" />

      {/* Decorative orbs - layered for depth */}
      <div className="fixed top-0 right-0 w-96 h-96 bg-gradient-to-br from-primary/8 via-primary/4 to-transparent rounded-full blur-3xl animate-float -z-40 pointer-events-none" />
      
      <div className="fixed bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-accent-orange/6 via-accent-orange/2 to-transparent rounded-full blur-3xl animate-blob -z-40 pointer-events-none" style={{ animationDelay: "2s" }} />
      
      <div className="fixed top-1/3 left-1/4 w-72 h-72 bg-gradient-to-br from-blue-300/4 via-blue-300/1 to-transparent rounded-full blur-3xl animate-float -z-40 pointer-events-none" style={{ animationDelay: "4s" }} />

      {/* Subtle texture overlay */}
      <div className="fixed inset-0 -z-30 pointer-events-none opacity-[0.02]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' result='noise'/%3E%3C/filter%3E%3Crect width='400' height='400' fill='%23000' opacity='0.5' filter='url(%23noise)'/%3E%3C/svg%3E")`,
      }} />

      {/* Content */}
      <div className="relative z-0">
        {children}
      </div>
    </div>
  );
};

export default PageBackground;
