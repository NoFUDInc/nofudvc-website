import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const site = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ''
  const base = `${site}${basePath}`

  // Known sections in the horizontal scroll app
  const paths = ['/', '/work', '/services', '/about', '/contact']

  const now = new Date()
  return paths.map((p) => ({
    url: `${base}${p}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: p === '/' ? 1 : 0.7,
  }))
}


