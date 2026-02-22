import Link from "next/link";

export default function ConnectWithUsSection() {
  return (
    <div
      className="relative py-28"
      style={{ backgroundImage: "url('/images/headerBannerImage.png')" }}
    >
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="content relative z-10 flex flex-col items-center">
        <h1 className="text-white text-4xl font-bold text-center mb-4">
          Start Your Project Today
        </h1>
        <p className="text-center text-white w-2/4">
          Partner with us for impeccable design and printing services that will
          elevate your brand. Contact us to unlock your creative potential.
        </p>
        <Link href="/contact-us">
          <button className="mt-2 bg-white text-black px-6 py-3 rounded-full font-bold hover:bg-gray-200 transition duration-300">
            Get Started
          </button>
        </Link>
      </div>
    </div>
  );
}
