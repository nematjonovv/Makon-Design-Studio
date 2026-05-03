import { MetadataRoute } from 'next'

const baseUrl = 'https://makondesign.uz'
const locales = ['uz', 'ru']
const pages = ['', '/aboutus', '/contact', '/projects', '/services']

export default function sitemap(): MetadataRoute.Sitemap {
  const urls: MetadataRoute.Sitemap = []

  locales.forEach((locale) => {
    pages.forEach((page) => {
      urls.push({
        url: `${baseUrl}/${locale}${page}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: page === '' ? 1 : 0.8,
      })
    })
  })

  return urls
}