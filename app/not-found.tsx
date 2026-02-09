import Navbar from "@/app/components/common/navbar";
import Footer from "@/app/components/common/footer";
import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 flex items-center justify-center my-8">
        <div className="max-w-3xl text-center">
          {/* SVG Illustration */}
          <div className="flex justify-center items-center mb-8">
            <Image
              src="/svg/not-found.svg"
              alt="Page not found"
              width={320}
              height={320}
              priority
            />
          </div>

          {/* Text */}
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            Oops! Page not found
          </h1>
          <p className="mt-4 text-gray-600 text-lg">
            The page you’re looking for doesn’t exist or has been moved.
          </p>

          {/* CTA */}
          <div className="mt-8 flex justify-center gap-4">
            <Link
              href="/"
              className="px-6 py-3 rounded-full bg-linear-to-r from-purple-600 to-indigo-600 text-white font-medium hover:from-purple-700 hover:to-indigo-700 transition"
            >
              Go to Home
            </Link>

            <Link
              href="/contact-us"
              className="px-6 py-3 rounded-full border border-purple-300 text-purple-700 hover:bg-purple-50 transition"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
