import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
 return [
  //home page
    {
      url: 'https://magicprintsmedia.com',
      lastModified: new Date('2026-02-22')
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
    },

    //graphic design -service Pages
    {
      url:"https://magicprintsmedia.com/service/graphic-design",
      lastModified: new Date('2026-02-22')
    },
    //printing -service Pages
    {
      url:"https://magicprintsmedia.com/service/printing",
      lastModified: new Date('2026-02-22')
    },
    //corporate gifting -service Pages
    {
      url:"https://magicprintsmedia.com/service/corporate-gifting",
      lastModified: new Date('2026-02-22')
    },
    //perfume manufacturing -service Pages
    {
      url:"https://magicprintsmedia.com/service/perfume-manufacturing",
      lastModified: new Date('2026-02-22')
    },
    //hospital essentials -service Pages
    {
      url:"https://magicprintsmedia.com/service/hospital-essentials",
      lastModified: new Date('2026-02-22')
    }
  ]
}
