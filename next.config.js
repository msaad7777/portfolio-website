/** @type {import('next').NextConfig} */
const nextConfig = {
  // Removed 'output: export' for dynamic Next.js deployment on Vercel
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
