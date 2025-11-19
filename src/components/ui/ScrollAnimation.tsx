"use client";

import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface ScrollAnimationProps extends React.HTMLProps<HTMLDivElement> {
  animation?: "fadeInUp" | "slideInLeft" | "slideInRight" | "slideInUp" | "scaleIn";
  delay?: number;
  duration?: number;
  children?: React.ReactNode;
}

export const ScrollAnimation = ({
  animation = "fadeInUp",
  delay = 0,
  duration = 0.8,
  className,
  children,
  ...props
}: ScrollAnimationProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const animationMap = {
    fadeInUp: "animate-fade-in-up",
    slideInLeft: "animate-slide-in-left",
    slideInRight: "animate-slide-in-right",
    slideInUp: "animate-fade-in-up",
    scaleIn: "animate-scale-pulse",
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(animationMap[animation]);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [animation]);

  return (
    <div
      ref={ref}
      className={cn(className)}
      style={{
        animationDelay: `${delay}ms`,
        animationDuration: `${duration}s`,
      }}
      {...props}
    >
      {children}
    </div>
  );
};

export default ScrollAnimation;
