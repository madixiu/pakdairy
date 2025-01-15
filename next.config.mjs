import withSvgr from 'next-plugin-svgr';

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['192.168.20.61', 'localhost'], // Allow images from localhost
  },
};

export default withSvgr(nextConfig);
