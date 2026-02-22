import type { Metadata } from "next";
import ServiceImageBlock from "@/app/components/service/service-image-block";
import ConnectWithUsSection from "@/app/components/common/connect-with-us-section";
import PageTitleSection from "@/app/components/common/page-title-section";
import ServiceCard from "@/app/components/service/service-card-component";

export const metadata: Metadata = {
  title: "Corporate Gifting Services in Pune | Magic Prints Media",
  description:
    "Premium corporate gifting solutions in Pune. Custom printed diaries, pens, mugs, bags, umbrellas, perfumes, merchandise, and personalized gifts for employees, clients, and events.",
  keywords: [
    "Corporate Gifting Pune",
    "Customized Corporate Gifts Pune",
    "Promotional Gifts Pune",
    "Custom Merchandise Printing Pune",
    "Corporate Gift Suppliers Pune",
  ],
};

interface serviceCardType {
  serviceTitle: string;
  serviceDescription: string;
  serviceImage: string;
}

const service: serviceCardType[] = [
  {
    serviceTitle: "Office Essentials & Stationery Gifts",
    serviceDescription:
      "Premium diaries, writing pads, pens, organizers, and branded office essentials customized with your company logo and identity.",
    serviceImage: "/images/about-us/image.png",
  },
  {
    serviceTitle: "Customized Drinkware",
    serviceDescription:
      "Personalized mugs, magic mugs, tea coasters, and premium drinkware with high-quality sublimation and print finishes.",
    serviceImage: "/images/about-us/image.png",
  },
  {
    serviceTitle: "Apparel & Utility Merchandise",
    serviceDescription:
      "Custom printed bags, umbrellas, raincoats, canopies, tents, and branded merchandise ideal for promotions and events.",
    serviceImage: "/images/about-us/image.png",
  },
  {
    serviceTitle: "Luxury & Premium Gifts",
    serviceDescription:
      "Custom perfumes with printed names, decorative lamps, and premium curated gift sets designed to leave a lasting impression.",
    serviceImage: "/images/about-us/image.png",
  },
  {
    serviceTitle: "Event & Promotional Gifting",
    serviceDescription:
      "Bulk corporate gifts for exhibitions, conferences, product launches, and employee engagement programs.",
    serviceImage: "/images/about-us/image.png",
  },
  {
    serviceTitle: "Fully Customized Solutions",
    serviceDescription:
      "We print and customize on almost any merchandise as per your requirement — tailored gifting solutions that match your brand.",
    serviceImage: "/images/about-us/image.png",
  },
];

export default function CorporateGiftingPage() {
  return (
    <main className="text-foreground">
      {/* HERO SECTION */}
      <PageTitleSection
        pageTitleText="Premium Corporate Gifting Solutions"
        PageDescription="At Magic Prints Media, we transform ordinary merchandise into powerful brand statements. From daily office essentials to luxury personalized gifts, we provide creative, high-quality corporate gifting solutions tailored to your brand."
      />

      {/* ABOUT CORPORATE GIFTING */}
      <ServiceImageBlock
        title="Strengthen Relationships with Branded Corporate Gifts"
        description="Corporate gifting is more than just a gesture — it’s a strategic way to build relationships with employees, clients, and partners. We offer fully customized gifting solutions including diaries, pens, mugs, bags, umbrellas, raincoats, perfumes, writing pads, coasters, tents, canopies, lamps, and much more. Whether you need bulk promotional gifts or premium executive hampers, we ensure quality, elegance, and brand visibility."
        imgPath="/images/about-us/image.png"
      />

      {/* SERVICES GRID */}
      <section className="py-24 px-6 bg-blue-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-6">
            <h2 className="text-3xl md:text-5xl font-bold">
              Our Corporate Gifting Categories
            </h2>

            <p className="max-w-3xl mx-auto text-gray-300 text-lg">
              From practical office items to premium customized merchandise, we
              offer a wide range of corporate gifts that enhance brand recall
              and create meaningful impressions.
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
        title="Why Choose Magic Prints Media for Corporate Gifting?"
        description="We combine creative printing expertise with premium sourcing and customization capabilities. Whether it's logo printing, sublimation, engraving, or name personalization, we ensure high-quality finishes and timely bulk delivery. Our goal is to make your brand memorable through thoughtful and impactful gifting."
        imgPath="/images/about-us/image.png"
        reverse
      />

      {/* PROCESS SECTION */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto text-center space-y-16">
          <h2 className="text-3xl md:text-5xl font-bold text-black">
            Our Corporate Gifting Process
          </h2>

          <div className="grid md:grid-cols-4 gap-10 text-left">
            {[
              {
                step: "01",
                title: "Requirement Discussion",
                desc: "We understand your audience, budget, quantity, and branding requirements.",
              },
              {
                step: "02",
                title: "Product Selection",
                desc: "We suggest suitable merchandise options aligned with your brand positioning.",
              },
              {
                step: "03",
                title: "Customization & Branding",
                desc: "We apply printing, engraving, sublimation, or personalization with premium finish.",
              },
              {
                step: "04",
                title: "Bulk Production & Delivery",
                desc: "We ensure timely production, packaging, and dispatch with strict quality control.",
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
