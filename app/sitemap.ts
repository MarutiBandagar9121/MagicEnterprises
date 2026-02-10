import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
 return [
  //home page
    {
      url: 'https://magicprintsmedia.com',
      lastModified: new Date('2026-02-10')
    },
    //about us page
    {
      url: 'https://magicprintsmedia.com/about-us',
      lastModified: new Date('2026-02-10')
    },
    //our work page
    {
      url: 'https://magicprintsmedia.com/our-work',
      lastModified: new Date('2026-02-10')
    },
    //contact us page
    {
      url: 'https://magicprintsmedia.com/contact-us',
      lastModified: new Date('2026-02-10')
    }
  ]
}
