export interface WorkImage {
  src: string
  client: string
  title?: string
}

export interface WorkCategory {
  id: string
  title: string
  description?: string
  images: WorkImage[]
}

export const workData: WorkCategory[] = [
  {
    id: "visiting-cards",
    title: "Visiting Cards",
    description: "Premium business cards for various clients",
    images: [
      { src: "/images/our-work/visiting-cards/vc-anthilgroup.jpg", client: "Anthil Group" },
      { src: "/images/our-work/visiting-cards/vc-anthilgroup2.jpg", client: "Anthil Group" },
      { src: "/images/our-work/visiting-cards/vc-dbicecream.jpg", client: "DB Icecream" },
      { src: "/images/our-work/visiting-cards/vc-sakshiservices.jpg", client: "Sakshi Services" },
      { src: "/images/our-work/visiting-cards/vc-rkscollection.jpg", client: "DB Icecream" },
      { src: "/images/our-work/visiting-cards/vc-kadambarijetty.jpg", client: "Kadambari Jetty" },
    ],
  },
  {
    id:"logos",
    title: "Logos",
    description: "Creative logo designs for brand identity",
    images: [
      { src: "/images/our-work/logos/Amor-Ice-Cream.png", client: "Amor Ice Cream" },
      { src: "/images/our-work/logos/Coco-logo.jpg", client: "Coco" },
      { src: "/images/our-work/logos/Glamorous-Touchfinal.jpg", client: "Glamorous Touch" },
      { src: "/images/our-work/logos/Puneri-fast.jpg", client: "Coco" },
      { src: "/images/our-work/logos/Rudra-Global-Exims.jpg", client: "Coco" },
      { src: "/images/our-work/logos/Shringar.jpg", client: "Coco" },
      { src: "/images/our-work/logos/Sun-Lit-Tech.jpg", client: "Coco" },
      { src: "/images/our-work/logos/supreme-logo-2.jpg", client: "Coco" },
      { src: "/images/our-work/logos/swara-designer.jpg", client: "Coco" },
      { src: "/images/our-work/logos/Up-Pramukh-Tea-Logo.jpg", client: "Coco" },
    ]
  },
  {
    id: "pamphlets",
    title: "Pamphlets & Flyers",
    images: [
      { src: "/images/our-work/pamphlets/dks-biryani.jpg", client: "DKS Biryani" },
      { src: "/images/our-work/pamphlets/gulla-sports-2.jpg", client: "Gulla Sports" },
      { src: "/images/our-work/pamphlets/gulla-sports.jpg", client: "Gulla Sports" },
      { src: "/images/our-work/pamphlets/jawed-habib-2.jpg", client: "Jawed Habib" },
      { src: "/images/our-work/pamphlets/jawed-habib.jpg", client: "Jawed Habib" },
      { src: "/images/our-work/pamphlets/kadambari-jetty.jpg", client: "Kadambari Jetty" },
      { src: "/images/our-work/pamphlets/vaidik.jpg", client: "Vaidik Brahamanti" },
      { src: "/images/our-work/pamphlets/sandhya-parlour.jpg", client: "Sandhya Parlour" }
    ],
  },
  {
    id: "brochures",
    title: "Brochures",
    images: [
      { src: "/images/our-work/brochure/pms.jpg", client: "PMS Security" },
      { src: "/images/our-work/brochure/pms2.jpg", client: "PMS Security" },
      { src: "/images/our-work/brochure/shakti-solution-1.jpg", client: "Shakti Solution" },
      { src: "/images/our-work/brochure/shakti-solution-2.jpg", client: "Shakti Solution" },
      { src: "/images/our-work/brochure/shakti-solution-3.jpg", client: "Shakti Solution" },
      { src: "/images/our-work/brochure/shakti-solution-4.jpg", client: "Shakti Solution" },
      { src: "/images/our-work/brochure/shakti-solution-5.jpg", client: "Shakti Solution" },
      { src: "/images/our-work/brochure/vereinen.jpg", client: "Vereinen" },
      { src: "/images/our-work/brochure/w55.jpg", client: "Shakti Solution" }

    ],
  },
  {
    id: "gift-articles",
    title: "Gift Articles",
    images: [
      { src: "/images/our-work/gift-articles/magic-mug.png", client: "Magic Mug" },
      { src: "/images/our-work/gift-articles/printed-diary.jpg", client: "Printed Diary" },
      { src: "/images/our-work/gift-articles/printed-jacket.png", client: "Printed Jacket" },
      { src: "/images/our-work/gift-articles/printed-lamp.png", client: "Printed Lamp" },
      { src: "/images/our-work/gift-articles/printed-rotating-lamp.png", client: "Printed Rotating Lamp" },
      { src: "/images/our-work/gift-articles/printed-tshirt.png", client: "Printed T-Shirt" },
    ],
  },
  {
    id: "web-designs",
    title: "Web Designs",
    images: [
      { src: "/images/our-work/web-design/web1.jpeg", client: "" },
      { src: "/images/our-work/web-design/web2.jpeg", client: "" },
      { src: "/images/our-work/web-design/web3.png", client: "" },
    ],
  },
]