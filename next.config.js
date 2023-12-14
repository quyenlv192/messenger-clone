/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    swcPlugins: [["next-superjson-plugin", {}]], // sanitizes our objects so that we can safely pass them even though they have date objects and other complex properties which are not compatible when passing from server components into client components
  },
  images: {
    // domains: ["res.cloudinary.com", "avatars.githubusercontent.com", "lh3.googleusercontent.com"],
    remotePatterns: [
      { protocol: "https", hostname: "res.cloudinary.com" },
      { protocol: "https", hostname: "avatars.githubusercontent.com" },
      { protocol: "https", hostname: "lh3.googleusercontent.com" },
    ],
  },
  //whenever we using Next Image, we need to define where the image comes from
};

module.exports = nextConfig;
