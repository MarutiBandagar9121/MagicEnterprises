import {
  RiMapPin2Line,
  RiPhoneLine,
  RiMailLine,
  RiInstagramLine,
  RiFacebookCircleLine,
  RiLinkedinBoxLine,
} from "@remixicon/react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-primary text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left: Company Info */}
          <div>
            {/* Logo */}
            <Image src="/images/magic-logo.png" alt="Magic Prints Media Logo" width={100} height={100} />
            <div className="text-2xl font-bold text-white">
              Magic Prints Media
            </div>

            <p className="mt-4 text-sm text-gray-400 max-w-md">
              We craft stunning designs and powerful brand experiences. From
              digital to print, we help your business stand out.
            </p>

            {/* Address */}
            <div className="mt-6 space-y-3 text-sm">
              <div className="flex items-start gap-3 max-w-80">
                <RiMapPin2Line className="w-5 h-5 mt-0.5 text-gray-400" />
                <span>
                  353, Shaniwar Peth, Radha Krushna Building, A8 Shop, Appa Balwant Chowk, Opp Prabath Theater, Pune-411030
                </span>
              </div>

              <div className="flex items-center gap-3">
                <RiPhoneLine className="w-5 h-5 text-gray-400" />
                <span>+91 7040332527 | +91 7744087354</span>
              </div>

              <div className="flex items-center gap-3">
                <RiMailLine className="w-5 h-5 text-gray-400" />
                <span>magicenterprises16@gmail.com</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 mt-6">
              <a
                href="#"
                className="hover:text-white transition"
                aria-label="Instagram"
              >
                <RiInstagramLine className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="hover:text-white transition"
                aria-label="Facebook"
              >
                <RiFacebookCircleLine className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="hover:text-white transition"
                aria-label="LinkedIn"
              >
                <RiLinkedinBoxLine className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right: Quick Info or Tagline */}
          <div className="flex flex-col justify-center md:items-end">
            <div className="max-w-md">
              <h3 className="text-white text-lg font-semibold">
                Let’s build something amazing together.
              </h3>
              <p className="mt-3 text-sm text-gray-400">
                Whether you need branding, printing, or digital creatives — our
                team is ready to help your business grow.
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mt-10 pt-6">
          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 text-sm text-gray-400">
            <div>
              © {new Date().getFullYear()} Magic Prints Media. All rights reserved.
            </div>
            <div>
              Designed & Developed by{" "}
              <span className="text-gray-200 font-medium">
                <a href="https://mantavy.in" target="_blank">Mantavy</a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
