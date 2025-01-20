/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['192.168.20.61', 'localhost'],
  },
  // webpack(config) {
  //   config.module.rules.push({
  //     test: /\.svg$/,
  //     use: ['@svgr/webpack']
  //   });
  //   return config;
  // }
};

export default nextConfig;
