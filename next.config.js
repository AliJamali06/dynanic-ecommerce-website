/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
      domains: ["fakestoreapi.com", "i.imgur.com"], 
    },
  };
  
  module.exports = nextConfig;
  module.exports = {
    eslint: {
      ignoreDuringBuilds: true,
    },
    typescript: {
      ignoreBuildErrors:true,
  },
  };
  module.exports = {
    
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'fakestoreapi.com',
        },
  ],
  },
  };
  module.exports = {
    eslint: {
      ignoreDuringBuilds: true,
    },
  };