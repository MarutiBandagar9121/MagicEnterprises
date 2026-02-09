import Link from "next/link";


export default function HeroSection() {
  return (
    <div
      className="hero-section relative bg-cover bg-center h-svh flex flex-col justify-center text-black"
      style={{ backgroundImage: "url('/images/magic-bg.jpeg')" }}
    >
      <div className="absolute inset-0 bg-black/70"></div>
      <div className="relative z-10 flex flex-col items-center">
        <h1 className="font-orbitron font-extrabold text-white text-xl md:text-5xl text-center">MAGIC PRINTS MEDIA</h1>
        <p className="mt-4 w-3/6 text-white text-center md:text-2xl">
          Delivering outstanding Design and Printing Solutions tailored to your
          unique needs. Transform your brand’s identity with our Expert services
          and Quality craftsmanship.
        </p>
        <Link href="/contact-us">
        <button className="mt-4 px-6 py-2 text-white bg-blue-700 hover:bg-blue-600 rounded-4xl transition">
          Get Started
        </button>
        </Link>
      </div>
    </div>
  );
}
