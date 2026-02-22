import type { Metadata } from "next";
import ServiceImageBlock from "@/app/components/service/service-image-block";
import ConnectWithUsSection from "@/app/components/common/connect-with-us-section";
import PageTitleSection from "@/app/components/common/page-title-section";
import ServiceCard from "@/app/components/service/service-card-component";

export const metadata: Metadata = {
  title:
    "Perfume Manufacturing & Private Label Services in Pune | Magic Prints Media",
  description:
    "Premium perfume manufacturing and private label services in Pune. Wide fragrance range, custom bottles, fancy packaging boxes, bottle printing, and bulk supply for retailers.",
  keywords: [
    "Perfume Manufacturer in Pune",
    "Private Label Perfume Pune",
    "Custom Perfume Bottle Printing",
    "Perfume Packaging Supplier Pune",
    "Wholesale Perfume Supplier Pune",
  ],
};

interface serviceCardType {
  serviceTitle: string;
  serviceDescription: string;
  serviceImage: string;
}

const service: serviceCardType[] = [
  {
    serviceTitle: "In-House Perfume Manufacturing",
    serviceDescription:
      "We develop and manufacture a wide variety of high-quality fragrances with long-lasting performance and premium formulations.",
    serviceImage: "/images/about-us/image.png",
  },
  {
    serviceTitle: "Private Label & Retail Supply",
    serviceDescription:
      "Bulk perfume supply for retailers, distributors, and brands looking to launch their own fragrance line.",
    serviceImage: "/images/about-us/image.png",
  },
  {
    serviceTitle: "Custom Bottle Selection",
    serviceDescription:
      "Wide range of premium perfume containers in different shapes, finishes, and spray mechanisms to match your brand identity.",
    serviceImage: "/images/about-us/image.png",
  },
  {
    serviceTitle: "Bottle Printing & Branding",
    serviceDescription:
      "High-quality printing directly on perfume bottles including logo printing shows, name personalization, and premium finishing options.",
    serviceImage: "/images/about-us/image.png",
  },
  {
    serviceTitle: "Luxury Packaging Boxes",
    serviceDescription:
      "Fancy custom-printed perfume boxes with rigid, matte, gloss, embossed, and premium finishing options.",
    serviceImage: "/images/about-us/image.png",
  },
  {
    serviceTitle: "Complete Brand Launch Support",
    serviceDescription:
      "From fragrance formulation to packaging and retail-ready production — we support end-to-end perfume brand creation.",
    serviceImage: "/images/about-us/image.png",
  },
];

export default function PerfumeManufacturingPage() {
  return (
    <main className="text-foreground">
      {/* HERO SECTION */}
      <PageTitleSection
        pageTitleText="Premium Perfume Manufacturing & Private Label Solutions"
        PageDescription="At Magic Prints Media, we create high-quality perfumes with premium fragrances, elegant packaging, and full customization options. Whether you're a retailer, distributor, or launching your own brand, we provide complete end-to-end perfume solutions."
      />

      {/* ABOUT SECTION */}
      <ServiceImageBlock
        title="Crafted Fragrances with Premium Packaging"
        description="We manufacture perfumes in-house with carefully developed fragrance compositions designed for long-lasting performance. Our wide variety of perfume options caters to different market segments — from affordable retail collections to luxury premium lines. With complete control over manufacturing and packaging, we ensure consistent quality and branding excellence."
        imgPath="/images/about-us/image.png"
      />

      {/* SERVICES GRID */}
      <section className="py-24 px-6 bg-blue-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-6">
            <h2 className="text-3xl md:text-5xl font-bold">
              Our Perfume Solutions
            </h2>

            <p className="max-w-3xl mx-auto text-gray-300 text-lg">
              From fragrance creation to bottle branding and luxury box
              packaging, we offer comprehensive perfume manufacturing and
              customization services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {service.map((item) => (
              <ServiceCard
                key={item.serviceTitle}
                title={item.serviceTitle}
                description={item.serviceDescription}
                image={item.serviceImage}
              />
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <ServiceImageBlock
        title="Why Choose Magic Prints Media for Perfume Manufacturing?"
        description="We combine fragrance development, premium bottle sourcing, advanced printing capabilities, and high-end packaging under one roof. Our ability to print directly on perfume bottles and design luxury custom boxes gives brands a competitive edge. Whether you need bulk wholesale supply or a custom private label launch, we deliver quality, consistency, and elegance."
        imgPath="/images/about-us/image.png"
        reverse
      />

      {/* PROCESS SECTION */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto text-center space-y-16">
          <h2 className="text-3xl md:text-5xl font-bold text-black">
            Our Perfume Production Process
          </h2>

          <div className="grid md:grid-cols-4 gap-10 text-left">
            {[
              {
                step: "01",
                title: "Fragrance Selection",
                desc: "Choose from our wide fragrance collection or develop a custom scent.",
              },
              {
                step: "02",
                title: "Bottle & Packaging Selection",
                desc: "Select bottle styles, spray types, and packaging finishes.",
              },
              {
                step: "03",
                title: "Branding & Printing",
                desc: "We print logos and branding directly on bottles and custom boxes.",
              },
              {
                step: "04",
                title: "Bulk Production & Supply",
                desc: "Quality-checked production and timely delivery to retailers or distributors.",
              },
            ].map((item) => (
              <div key={item.step} className="space-y-4">
                <span className="text-orange-600 font-bold text-2xl">
                  {item.step}
                </span>
                <h3 className="text-xl font-semibold text-black">
                  {item.title}
                </h3>
                <p className="text-black">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <ConnectWithUsSection />
    </main>
  );
}
