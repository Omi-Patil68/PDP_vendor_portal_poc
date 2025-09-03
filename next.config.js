/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
  transpilePackages: ["@ext-g10x/ui-components-library"],
  compiler: { styledComponents: true },
  productionBrowserSourceMaps: true,
  images: {
    domains: ['picsum.photos'],
  },
  sassOptions: {
    includePaths: [path.join(process.cwd(), "src/app")],
    prependData: `@import "variables.scss";`,
  },
};

module.exports = nextConfig;