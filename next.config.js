/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig

module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config, { isServer }) => {
    // 空のオブジェクト渡すことでnpmパッケージがfsモジュールに依存しないようにします
    if (!isServer) {
      config.node = {
        fs: 'empty',
        net: 'empty',
        tls: 'empty'
      }
    }
    return config
  }
}
