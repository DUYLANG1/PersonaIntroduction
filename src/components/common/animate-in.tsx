"use client";

import { useEffect, useRef, type ReactNode } from "react";

interface AnimateInProps {
  children: ReactNode;
  className?: string;
  animation?: "fade-up" | "fade-in" | "scale-in" | "fade-left" | "fade-right";
  delay?: number;
}

export function AnimateIn({
  children,
  className,
  animation = "fade-up",
  delay = 0,
}: AnimateInProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.remove(`animate-${animation}-initial`);
          el.classList.add(`animate-${animation}-active`);
          observer.unobserve(el);
        }
      },
      { rootMargin: "-10% 0px -10% 0px", threshold: 0 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [animation]);

  return (
    <div
      ref={ref}
      className={`animate-base animate-${animation}-initial ${className ?? ""}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
