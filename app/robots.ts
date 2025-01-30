import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: ['/', '/about', '/calculateur', '/legal/*'],
      disallow: ['/api/*'],
    },
    sitemap: 'https://www.appforge-tech.fr/sitemap.xml',
  }
}
