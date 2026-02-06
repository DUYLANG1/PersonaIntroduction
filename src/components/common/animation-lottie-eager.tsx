"use client";

import Lottie from "lottie-react";
import { useEffect, useState } from "react";

interface AnimationLottieEagerProps {
  src: string;
  width?: string | number;
  loop?: boolean;
  className?: string;
}

/**
 * Eagerly-loaded Lottie component for above-the-fold / LCP-critical animations.
 * Unlike the lazy variant, this is NOT wrapped in next/dynamic so it ships
 * in the initial JS bundle and starts fetching the JSON immediately.
 */
export function AnimationLottieEager({
  src,
  width = "100%",
  loop = true,
  className,
}: AnimationLottieEagerProps) {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    fetch(src, { priority: "high" } as RequestInit)
      .then((res) => res.json())
      .then(setAnimationData)
      .catch(() => setAnimationData(null));
  }, [src]);

  return (
    <div className={className} style={{ width }}>
      {animationData ? (
        <Lottie animationData={animationData} loop={loop} />
      ) : (
        <div className="w-full aspect-square animate-pulse bg-muted/20 rounded-xl" />
      )}
    </div>
  );
}
