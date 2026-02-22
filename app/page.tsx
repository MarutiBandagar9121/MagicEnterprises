import Link from "next/link";
import HeroSection from "./components/home/hero-section";
import OurServicesSection from "./components/home/our-services-section";
import Testimonials from "./components/home/testimonials";
import ConnectWithUsSection from "./components/common/connect-with-us-section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <OurServicesSection />
      <Testimonials />
      <ConnectWithUsSection />
    </>
  );
}
