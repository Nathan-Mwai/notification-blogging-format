/** @type {import('next').NextConfig} */
const nextConfig = {
  // This is necessary for the mongodb for seeing whether project is working
    // Just making it know how to render mongoose actions for ease in mongodb work
    serverExternalPackages: ["mongoose"],
  // This allows us to fetch photos from clerk without running into errors i.e next.config is always protecting my code
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.clerk.com",
      },
      {
        protocol: "https",
        hostname: "images.clerk.dev",
      },
      {
        protocol: "https",
        hostname: "uploadthing.com",
      },
      {
        protocol: "https",
        hostname: "placehold.co",
      },
    ],
  },
};

module.exports = nextConfig;
