import HeroSection from "./components/home/hero-section"
import OurServicesSection from "./components/home/our-services-section"
import Testimonials from "./components/home/testimonials"

export default function HomePage() {
  return(
    <>
      <HeroSection />
      <OurServicesSection />
      {/* connect with us section */}
      <div className="relative py-28"
        style={{backgroundImage:"url('/images/about-us/image.svg')"}}>
            <div className="absolute inset-0 bg-black/80"></div>
            <div className="content relative z-10 flex flex-col items-center">
                <h1 className="text-white text-4xl font-bold text-center mb-4">Start Your Project Today</h1>
                <p className="text-center text-white w-2/4">Partner with us for impeccable design and printing services that will elevate your brand. Contact us to unlock your creative potential.</p>
                <button className="mt-2 bg-white text-black px-6 py-3 rounded-full font-bold hover:bg-gray-200 transition duration-300">Get Started</button>
            </div>
      </div>
      <div className="testimonials">
        <Testimonials />
      </div>
    </>
  )
}