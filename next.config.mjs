/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images.unsplash.com","example.com","car-images-bucket.s3.amazonaws.com"], // Add your image domains here
  },
};

export default nextConfig;