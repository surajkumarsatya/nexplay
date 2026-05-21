/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,

  images: {
    domains: ["image.tmdb.org"],
    qualities: [30, 75],
  },
};

export default nextConfig;
