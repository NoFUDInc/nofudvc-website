import type { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function robots(): MetadataRoute.Robots {
  const site = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ''
  const sitemap = `${site}${basePath}/sitemap.xml`

  return {
    rules: [{ userAgent: '*', allow: '/' }],
    sitemap,
  }
}


