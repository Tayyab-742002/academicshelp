/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */

  // images: {
  //   domains: ["cdn.sanity.io","randomuser.me"],
  // },

  images:{
    remotePatterns:[
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
};

export default nextConfig;
