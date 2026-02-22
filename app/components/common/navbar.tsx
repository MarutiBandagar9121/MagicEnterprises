"use client";
import { RiMenuLine, RiCloseLine } from "@remixicon/react";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <nav className="w-full bg-background px-4 py-2 flex justify-between items-center font-mono">
      <div className="logo-container">
        <a href="/">
          <Image
            src="/images/magic-logo.png"
            alt="Magic Arts"
            width={120}
            height={40}
            className="object-contain"
          />
        </a>
      </div>
      <div className="hidden nav-items md:flex gap-4 justify-between items-center text-white">
        <a className="hover:underline" href="/">
          Home &nbsp;|
        </a>
        <a className="hover:underline" href="/about-us">
          About Us &nbsp;|
        </a>
        <a className="hover:underline" href="/our-work">
          Our Work &nbsp;|
        </a>
        <a className="hover:underline" href="/contact-us">
          Contact Us
        </a>
      </div>
      <div className="md:hidden mobile-nav-links">
        {!mobileMenuOpen && (
          <RiMenuLine
            size={30}
            className="cursor-pointer"
            color="white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          />
        )}
        {mobileMenuOpen && (
          <RiCloseLine
            size={30}
            className="cursor-pointer"
            color="white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          />
        )}
      </div>
      {mobileMenuOpen && (
        <div className="mobile-menu absolute z-20 top-16 left-0 w-full bg-background flex flex-col items-center text-white md:hidden">
          <a href="/" className="py-2 border-b w-full text-center">
            Home
          </a>
          <a href="/about-us" className="py-2 border-b w-full text-center">
            About Us
          </a>
          <a href="/our-work" className="py-2 border-b w-full text-center">
            Our Work
          </a>
          <a href="/contact-us" className="py-2 border-b w-full text-center">
            Contact Us
          </a>
        </div>
      )}
    </nav>
  );
}
