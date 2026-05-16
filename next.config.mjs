/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "images.unsplash.com",
      "unsplash.com",
      "picsum.photos",
      "example.com",
      "car-images-bucket.s3.amazonaws.com"
    ],
  },
};

export default nextConfig;