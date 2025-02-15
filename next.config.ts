// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     domains: ["cdn.sanity.io"], // Allow images from Sanity's CDN
//   },
// };

// module.exports = nextConfig;
  


/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["cdn.sanity.io"], // Allow images from Sanity's CDN
  },
  productionBrowserSourceMaps: true,
};

module.exports = nextConfig;
