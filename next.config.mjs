/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    rules: {
      // Map common uppercase image types as static assets
      '*.PNG': { type: 'asset' },
      '*.JPG': { type: 'asset' },
      '*.JPEG': { type: 'asset' },
      '*.GIF': { type: 'asset' },
      '*.SVG': { type: 'asset' },
    },
  },
};
export default nextConfig;
