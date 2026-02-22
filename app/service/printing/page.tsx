import type { Metadata } from "next";
import ServiceImageBlock from "@/app/components/service/service-image-block";
import ConnectWithUsSection from "@/app/components/common/connect-with-us-section";
import PageTitleSection from "@/app/components/common/page-title-section";
import ServiceCard from "@/app/components/service/service-card-component";

export const metadata: Metadata = {
  title: "Professional Printing Services in Pune | Magic Prints Media",
  description:
    "Looking for reliable printing services in Pune? Magic Prints Media offers offset printing, digital printing, screen printing, flex printing, sublimation printing, and custom printing on all surfaces.",
  keywords: [
    "Printing Services in Pune",
    "Offset Printing Pune",
    "Digital Printing Pune",
    "Flex Printing Pune",
    "Screen Printing Pune",
    "Custom Printing Pune",
  ],
};

interface serviceCardType {
  serviceTitle: string;
  serviceDescription: string;
  serviceImage: string;
}

const service: serviceCardType[] = [
  {
    serviceTitle: "Offset Printing",
    serviceDescription:
      "High-quality bulk printing solution ideal for brochures, catalogues, magazines, and corporate stationery with sharp colors and precision.",
    serviceImage: "/images/about-us/image.png",
  },
  {
    serviceTitle: "Digital Printing",
    serviceDescription:
      "Fast, cost-effective digital printing for business cards, flyers, posters, and short-run marketing materials with vibrant output.",
    serviceImage: "/images/about-us/image.png",
  },
  {
    serviceTitle: "Screen Printing",
    serviceDescription:
      "Durable and bold printing solution perfect for t-shirts, promotional products, packaging, and industrial applications.",
    serviceImage: "/images/about-us/image.png",
  },
  {
    serviceTitle: "Flex & Banner Printing",
    serviceDescription:
      "Large-format printing for banners, hoardings, backdrops, and outdoor promotions with weather-resistant materials.",
    serviceImage: "/images/about-us/image.png",
  },
  {
    serviceTitle: "Sublimation Printing",
    serviceDescription:
      "Premium sublimation printing for mugs, t-shirts, ID cards, gifts, and customized merchandise with long-lasting color quality.",
    serviceImage: "/images/about-us/image.png",
  },
  {
    serviceTitle: "Custom Surface Printing",
    serviceDescription:
      "We print on almost any surface based on your requirement — acrylic, wood, metal, foam boards, vinyl, and more.",
    serviceImage: "/images/about-us/image.png",
  },
];

export default function PrintingServicesPage() {
  return (
    <main className="text-foreground">
      {/* HERO SECTION */}
      <PageTitleSection
        pageTitleText="Premium Printing Services in Pune"
        PageDescription="At Magic Prints Media, we bring your ideas to life with precision printing solutions.
        From business essentials to large-format promotions, we deliver unmatched print quality backed by modern technology and trusted expertise."
      />

      {/* ABOUT PRINTING */}
      <ServiceImageBlock
        title="Complete Printing Solutions Under One Roof"
        description="Whether you need bulk offset printing, quick digital prints, or customized promotional merchandise, our printing unit in Pune is equipped with advanced machinery and skilled professionals. We focus on color accuracy, material quality, and flawless finishing to ensure every project meets the highest standards."
        imgPath="/images/about-us/image.png"
      />

      {/* SERVICES GRID */}
      <section className="py-24 px-6 bg-blue-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-6">
            <h2 className="text-3xl md:text-5xl font-bold">
              Our Professional Printing Services
            </h2>

            <p className="max-w-3xl mx-auto text-gray-300 text-lg">
              From small-scale prints to large industrial projects, Magic Prints
              Media delivers reliable, high-quality printing solutions tailored
              to your business needs.
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
        title="Why Choose Magic Prints Media for Printing in Pune?"
        description="We combine cutting-edge printing technology with years of hands-on experience. Our team ensures color precision, durable materials, timely delivery, and competitive pricing. From corporate clients to small businesses, we are trusted for consistency, transparency, and exceptional print quality."
        imgPath="/images/about-us/image.png"
        reverse
      />

      {/* PROCESS SECTION */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto text-center space-y-16">
          <h2 className="text-3xl md:text-5xl font-bold text-black">
            Our Printing Process
          </h2>

          <div className="grid md:grid-cols-4 gap-10 text-left">
            {[
              {
                step: "01",
                title: "Requirement Analysis",
                desc: "We understand your quantity, material preference, budget, and timeline.",
              },
              {
                step: "02",
                title: "Pre-Press & Proofing",
                desc: "We ensure file accuracy, color correction, and share proofs before final production.",
              },
              {
                step: "03",
                title: "Production & Quality Check",
                desc: "Using advanced machinery, we produce prints with strict quality inspection.",
              },
              {
                step: "04",
                title: "Finishing & Delivery",
                desc: "We handle cutting, lamination, binding, packaging, and timely dispatch.",
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
