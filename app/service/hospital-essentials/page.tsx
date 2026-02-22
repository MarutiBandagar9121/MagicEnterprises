import type { Metadata } from "next";
import ServiceImageBlock from "@/app/components/service/service-image-block";
import ConnectWithUsSection from "@/app/components/common/connect-with-us-section";
import PageTitleSection from "@/app/components/common/page-title-section";
import ServiceCard from "@/app/components/service/service-card-component";

export const metadata: Metadata = {
  title: "Hospital Printing & Essential Supplies in Pune | Magic Prints Media",
  description:
    "Comprehensive hospital printing and essential supply solutions in Pune. We provide hospital stationery, printed bedsheets, standees, banners, flex printing, writing pads, and healthcare branding materials.",
  keywords: [
    "Hospital Printing Services Pune",
    "Hospital Stationery Suppliers Pune",
    "Healthcare Printing Pune",
    "Printed Bedsheets for Hospitals",
    "Medical Print Solutions Pune",
  ],
};

interface serviceCardType {
  serviceTitle: string;
  serviceDescription: string;
  serviceImage: string;
}

const service: serviceCardType[] = [
  {
    serviceTitle: "Hospital Stationery & Forms",
    serviceDescription:
      "Prescription pads, case papers, patient files, billing books, writing pads, letterheads, envelopes, and all customized hospital stationery.",
    serviceImage: "/images/about-us/image.png",
  },
  {
    serviceTitle: "Printed Bedsheets & Fabric Branding",
    serviceDescription:
      "Durable, hygienic, and professionally printed hospital bedsheets, pillow covers, curtains, and fabric branding solutions.",
    serviceImage: "/images/about-us/image.png",
  },
  {
    serviceTitle: "Standies, Banners & Flex Printing",
    serviceDescription:
      "Informational standees, safety boards, directional signage, awareness banners, and large-format flex printing for hospitals.",
    serviceImage: "/images/about-us/image.png",
  },
  {
    serviceTitle: "Medical Branding & Signage",
    serviceDescription:
      "Department boards, OPD/IPD signages, reception branding, and clear hospital navigation systems.",
    serviceImage: "/images/about-us/image.png",
  },
  {
    serviceTitle: "Printing Inks & Supply Materials",
    serviceDescription:
      "Quality printing inks and consumables for healthcare facilities requiring in-house printing support.",
    serviceImage: "/images/about-us/image.png",
  },
  {
    serviceTitle: "Complete Custom Print Solutions",
    serviceDescription:
      "We handle bulk hospital requirements — from small stationery to large-scale branding and print production.",
    serviceImage: "/images/about-us/image.png",
  },
];

export default function HospitalEssentialsPage() {
  return (
    <main className="text-foreground">
      {/* HERO SECTION */}
      <PageTitleSection
        pageTitleText="Hospital Printing & Essential Supply Solutions"
        PageDescription="Magic Prints Media provides comprehensive printing and essential supply services for hospitals, clinics, diagnostic centers, and healthcare institutions. We ensure reliability, hygiene standards, and consistent quality in every order."
      />

      {/* ABOUT SECTION */}
      <ServiceImageBlock
        title="Reliable Print & Supply Partner for Healthcare Sector"
        description="Healthcare institutions require precision, consistency, and timely delivery. We work closely with hospitals, clinics, nursing homes, and diagnostic centers to supply customized stationery, printed bedsheets, branding materials, and medical printing essentials. Our solutions are designed to maintain professionalism, hygiene standards, and operational efficiency."
        imgPath="/images/about-us/image.png"
      />

      {/* SERVICES GRID */}
      <section className="py-24 px-6 bg-blue-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-6">
            <h2 className="text-3xl md:text-5xl font-bold">
              Our Hospital Essential Services
            </h2>

            <p className="max-w-3xl mx-auto text-gray-300 text-lg">
              From patient documentation to hospital branding and bulk fabric
              printing, we provide end-to-end solutions tailored for the
              healthcare industry.
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
        title="Why Healthcare Providers Trust Magic Prints Media"
        description="We understand the importance of accuracy, durability, and timely supply in the healthcare sector. Our team ensures bulk production capability, consistent print quality, hygienic fabric handling, and long-term supply support. We aim to become a dependable partner for hospitals and medical institutions across Pune."
        imgPath="/images/about-us/image.png"
        reverse
      />

      {/* PROCESS SECTION */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto text-center space-y-16">
          <h2 className="text-3xl md:text-5xl font-bold text-black">
            Our Service Process
          </h2>

          <div className="grid md:grid-cols-4 gap-10 text-left">
            {[
              {
                step: "01",
                title: "Requirement Assessment",
                desc: "We understand your hospital’s operational and branding requirements.",
              },
              {
                step: "02",
                title: "Sample & Approval",
                desc: "We provide samples or proofs for approval before bulk production.",
              },
              {
                step: "03",
                title: "Bulk Production",
                desc: "We ensure consistent quality control during large-scale printing and manufacturing.",
              },
              {
                step: "04",
                title: "Timely Supply & Support",
                desc: "We deliver on schedule and support recurring supply needs.",
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
