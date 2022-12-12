/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images:{
    domains:["m.media-amazon.com","i.ebayimg.com"]
  }
}

module.exports = nextConfig
