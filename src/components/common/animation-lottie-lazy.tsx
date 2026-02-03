"use client";

import dynamic from "next/dynamic";

// Lazy load the actual Lottie component to reduce initial bundle
const AnimationLottie = dynamic(
  () =>
    import("./animation-lottie").then((m) => ({ default: m.AnimationLottie })),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-full animate-pulse bg-muted/20 rounded-xl" />
    ),
  },
);

export { AnimationLottie };
