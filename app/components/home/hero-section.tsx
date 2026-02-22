import AnimatedHeading from "@/app/components/common/animated-heading";
import AnimatedButton from "@/app/components/common/animated-button";

export default function HeroSection() {
  return (
    <section
      className="flex items-center justify-center text-white
      bg-linear-to-br bg-background
      min-h-[calc(100vh-80px)] px-6"
    >
      <div className="max-w-4xl text-center space-y-8">
        <AnimatedHeading />

        <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
          We bring your brand to life with premium graphic design and
          high-quality printing solutions. Backed by the trust of our beloved
          customers, we proudly deliver the best design and printing services in
          Pune — where creativity meets perfection.
        </p>

        <AnimatedButton />
      </div>
    </section>
  );
}
