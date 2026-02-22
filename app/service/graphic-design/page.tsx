import type { Metadata } from "next";
import ServiceImageBlock from "@/app/components/service/service-image-block";
import ConnectWithUsSection from "@/app/components/common/connect-with-us-section";
import PageTitleSection from "@/app/components/common/page-title-section";
import ServiceCard from "@/app/components/service/service-card-component";

export const metadata: Metadata = {
  title: "Graphic Design Services in Pune | Magic Prints Media",
  description:
    "Looking for the best graphic design services in Pune? Magic Prints Media offers logo design, branding, social media creatives, brochures, business cards, and complete visual identity solutions.",
  keywords: [
    "Graphic Design in Pune",
    "Best Graphic Designer in Pune",
    "Logo Design Pune",
    "Branding Services Pune",
    "Printing and Design Pune",
  ],
};

interface serviceCardType {
  serviceTitle: string;
  serviceDescription: string;
  serviceImage: string;
}

const service: serviceCardType[] = [
  {
    serviceTitle: "Logo Design & Brand Identity",
    serviceDescription:
      "Memorable, strategic logo designs that define your brand personality and build strong recognition in the Pune market.",
    serviceImage: "/images/about-us/image.png",
  },
  {
    serviceTitle: "Brochure & Catalogue Design",
    serviceDescription:
      "Professionally crafted brochures and catalogues that communicate your products and services with clarity and elegance.",
    serviceImage: "/images/about-us/image.png",
  },
  {
    serviceTitle: "Social Media Creatives",
    serviceDescription:
      "Eye-catching social media designs tailored to boost engagement, brand awareness, and conversions across platforms.",
    serviceImage: "/images/about-us/image.png",
  },
  {
    serviceTitle: "Visiting Card & Stationery Design",
    serviceDescription:
      "Premium business cards and stationery designs that leave a lasting impression and reflect your brand identity.",
    serviceImage: "/images/about-us/image.png",
  },
  {
    serviceTitle: "Poster, Banner & Flex Design",
    serviceDescription:
      "High-impact promotional designs optimized for print clarity, visibility, and marketing effectiveness.",
    serviceImage: "/images/about-us/image.png",
  },
  {
    serviceTitle: "Packaging Design",
    serviceDescription:
      "Creative packaging solutions that enhance product appeal and strengthen shelf presence in competitive markets.",
    serviceImage: "/images/about-us/image.png",
  },
];

export default function GraphicDesignPage() {
  return (
    <main className="text-foreground">
      {/* HERO SECTION */}
      <PageTitleSection
        pageTitleText=" Premium Graphic Design Services"
        PageDescription="At Magic Prints Media, we transform ideas into powerful visuals.
            From branding to print-ready creatives, we deliver impactful graphic
            design solutions backed by trust, creativity, and quality."
      />

      {/* ABOUT GRAPHIC DESIGN */}
      <ServiceImageBlock
        title="Creative Branding & Visual Identity"
        description="Your brand deserves a strong identity. We design professional logos, brand guidelines, business stationery, and marketing materials that leave a lasting impression. Our graphic design team in Pune focuses on strategy-driven creativity that helps your business stand out in a competitive market."
        imgPath="/images/about-us/image.png"
      />

      {/* SERVICES GRID */}
      <section className="py-24 px-6 bg-blue-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-6">
            <h2 className="text-3xl md:text-5xl font-bold">
              Professional Graphic Design Services in Pune
            </h2>

            <p className="max-w-3xl mx-auto text-gray-300 text-lg">
              From brand identity to high-impact marketing creatives, Magic
              Prints Media delivers premium graphic design solutions backed by
              creativity, printing expertise, and customer trust.
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
        title="Why We Are the Best Graphic Design Company in Pune"
        description="We combine creativity with printing expertise, ensuring every design is production-ready and visually stunning. Our commitment to quality, timely delivery, and customer satisfaction has made us one of Pune’s most trusted graphic design and printing partners."
        imgPath="/images/about-us/image.png"
        reverse
      />

      {/* PROCESS SECTION */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto text-center space-y-16">
          <h2 className="text-3xl md:text-5xl font-bold text-black">
            Our Design Process
          </h2>

          <div className="grid md:grid-cols-4 gap-10 text-left">
            {[
              {
                step: "01",
                title: "Understanding Requirements",
                desc: "We analyze your brand, audience, and goals before starting the design process.",
              },
              {
                step: "02",
                title: "Creative Concept",
                desc: "Our designers create unique and strategic visual concepts.",
              },
              {
                step: "03",
                title: "Design & Refinement",
                desc: "We refine the designs based on feedback to ensure perfection.",
              },
              {
                step: "04",
                title: "Final Delivery",
                desc: "We deliver high-resolution and print-ready files.",
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
