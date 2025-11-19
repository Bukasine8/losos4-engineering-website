"use client";

import React, { useEffect, useRef } from "react";

type ParallaxProps = {
  src?: string;
  speed?: number; // multiplier for parallax strength
  children?: React.ReactNode;
};

export default function ParallaxBackground({ src = "/Background.svg", speed = 0.25, children }: ParallaxProps) {
  const bgRef = useRef<HTMLDivElement | null>(null);
  const targetRef = useRef(0);
  const currentRef = useRef(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    // remember last scroll to detect direction
    const lastScrollY = { value: typeof window !== "undefined" ? window.scrollY : 0 };
    // clamp so the background doesn't move indefinitely
    const maxOffset = Math.max( -200, -window.innerHeight * 0.25 );

    function onScroll() {
      const scrollY = window.scrollY;
      const delta = scrollY - lastScrollY.value;
      lastScrollY.value = scrollY;

      // Move background only when scrolling down (delta > 0).
      // When scrolling up, do nothing so the image appears to 'stay in place'.
      if (delta > 0) {
        // compute target but clamp to maxOffset
        const raw = scrollY * speed * -1;
        targetRef.current = Math.max(maxOffset, raw);
        if (rafRef.current === null) startRaf();
      }
    }

    function startRaf() {
      rafRef.current = requestAnimationFrame(tick);
    }

    function tick() {
      currentRef.current += (targetRef.current - currentRef.current) * 0.1; // lerp
      if (bgRef.current) {
        // translate in Y only, keep small scale for coverage
        bgRef.current.style.transform = `translate3d(0, ${currentRef.current}px, 0) scale(1.05)`;
      }
      // continue loop while needed
      if (Math.abs(targetRef.current - currentRef.current) > 0.1) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        rafRef.current = null;
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    // initialize position
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [speed]);

    return (
      // Use fixed positioning so the background is viewport-anchored.
      // This keeps the image visually stationary when the user scrolls up.
      <div className="pointer-events-none" aria-hidden>
        <div
          ref={bgRef}
          className="fixed inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(248,249,250,1) 0%, rgba(248,249,250,0.7) 40%, transparent 80%), url('${src}')`,
            willChange: "transform",
            transform: "translate3d(0,0,0) scale(1.05)",
            zIndex: -1,
          }}
        />
        {children}
      </div>
    );
}
