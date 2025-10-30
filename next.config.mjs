/** @type {import('next').NextConfig} */
const isProjectPage = true // set to true for username.github.io/repo deployments
const repoName = 'nofud-web-react'

const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: isProjectPage ? `/${repoName}` : '',
  assetPrefix: isProjectPage ? `/${repoName}/` : '',
}

export default nextConfig
