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
  experimental:{
    serverActions:{
      bodySizeLimit: "2mb",
      fileSizeLimit: "2mb",
      allowedOrigins: ["https://academic-help-service.com","http://localhost:3000"],
      serverComponentsExternalPackages: ['bcrypt'],
    }
  }
};

export default nextConfig;
