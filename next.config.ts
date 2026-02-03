import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    optimizePackageImports: [
      "framer-motion",
      "lucide-react",
      "react-fast-marquee",
      "react-type-animation",
      "@radix-ui/react-avatar",
      "@radix-ui/react-icons",
      "@radix-ui/react-separator",
      "@radix-ui/react-slot",
    ],
  },
  reactCompiler: true,
  typedRoutes: true,
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;
