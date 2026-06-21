// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;



//  /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// };

// module.exports = nextConfig;









// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   typescript: {
//     ignoreBuildErrors: true,
//   },
//   eslint: {
//     ignoreDuringBuilds: true,
//   },
// }

// module.exports = nextConfig




/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // ← ADD THIS LINE
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,  // ← ADD THIS LINE
  },
}

module.exports = nextConfig
