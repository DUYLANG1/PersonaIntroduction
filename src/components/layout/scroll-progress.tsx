"use client";

import { useEffect, useRef } from "react";

import styles from "./scroll-progress.module.css";

export function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if CSS scroll-timeline is supported
    const supportsScrollTimeline = CSS.supports(
      "animation-timeline",
      "scroll()",
    );

    if (supportsScrollTimeline) {
      return;
    }

    // Fallback: vanilla JS with requestAnimationFrame
    const bar = barRef.current;
    if (!bar) return;

    let ticking = false;

    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? scrollTop / docHeight : 0;
      bar.style.transform = `scaleX(${progress})`;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateProgress);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    updateProgress();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-1 z-70 overflow-hidden pointer-events-none">
      <div
        ref={barRef}
        className={`${styles.scrollProgressBar} h-full w-full origin-left`}
      />
    </div>
  );
}
