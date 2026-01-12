import Navbar from "./components/common/navbar"
import HeroSection from "./components/home/hero-section"
import OurServicesSection from "./components/home/our-services-section"

export default function HomePage() {
  return(
    <>
      <Navbar />
      <HeroSection />
      <OurServicesSection />
    </>
  )
}