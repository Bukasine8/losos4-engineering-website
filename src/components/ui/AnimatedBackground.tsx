"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface AnimatedBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  pattern?: "dots" | "grid" | "waves" | "gradient-orbs" | "animated-mesh" | "noise";
  children?: React.ReactNode;
}

export const AnimatedBackground = ({
  pattern = "gradient-orbs",
  className,
  children,
  ...props
}: AnimatedBackgroundProps) => {
  const patterns = {
    dots: `
      radial-gradient(circle, rgba(0, 74, 173, 0.1) 1px, transparent 1px)
    `,
    grid: `
      linear-gradient(90deg, rgba(0, 74, 173, 0.05) 1px, transparent 1px),
      linear-gradient(rgba(0, 74, 173, 0.05) 1px, transparent 1px)
    `,
    waves: `
      repeating-linear-gradient(
        45deg,
        rgba(255, 107, 53, 0.1),
        rgba(255, 107, 53, 0.1) 10px,
        transparent 10px,
        transparent 20px
      )
    `,
  };

  return (
    <div className={cn("relative overflow-hidden", className)} {...props}>
      {/* Base animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-50 dark:from-deep-navy dark:via-background-dark dark:to-deep-navy pointer-events-none" />

      {/* Animated gradient orbs */}
      {pattern === "gradient-orbs" && (
        <>
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent-orange/5 rounded-full blur-3xl animate-blob" />
          <div className="absolute top-1/3 left-1/3 w-72 h-72 bg-blue-300/3 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
        </>
      )}

      {/* Animated mesh pattern */}
      {pattern === "animated-mesh" && (
        <svg
          className="absolute inset-0 w-full h-full opacity-10 animate-pulse"
          preserveAspectRatio="xMidYMid slice"
          viewBox="0 0 800 800"
        >
          <defs>
            <pattern id="mesh" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <rect width="100" height="100" fill="none" stroke="currentColor" strokeWidth="0.5" />
              <circle cx="50" cy="50" r="2" fill="currentColor" opacity="0.2" />
            </pattern>
          </defs>
          <rect width="800" height="800" fill="url(#mesh)" />
        </svg>
      )}

      {/* Noise pattern */}
      {pattern === "noise" && (
        <div
          className="absolute inset-0 opacity-20 animate-pulse"
          style={{
            backgroundImage:
              "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%224%22 result=%22noise%22/%3E%3C/filter%3E%3Crect width=%22200%22 height=%22200%22 fill=%220%25%22 opacity=%220.5%22 filter=%22url(%23noise)%22/%3E%3C/svg%3E')",
          }}
        />
      )}

      {/* Grid or dots pattern */}
      {(pattern === "grid" || pattern === "dots") && (
        <div
          className="absolute inset-0 opacity-10 animate-pulse"
          style={{
            backgroundImage: patterns[pattern],
            backgroundSize: pattern === "dots" ? "40px 40px" : "40px 40px",
          }}
        />
      )}

      {/* Waves pattern */}
      {pattern === "waves" && (
        <div
          className="absolute inset-0 opacity-5 animate-gradient-shift"
          style={{
            backgroundImage: patterns.waves,
          }}
        />
      )}

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default AnimatedBackground;
