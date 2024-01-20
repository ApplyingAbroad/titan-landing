/** @type {import('next').NextConfig} */
const nextConfig = {
  // https://cdn.tailkit.com/media/placeholders/photo-Nyvq2juw4_o-1280x400.jpg
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.tailkit.com',
      },
    ],
  },
}

export default nextConfig
