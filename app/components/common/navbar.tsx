"use client";
import {
  RiMenuLine,
  RiCloseLine,
  RiArrowDownSLine,
  RiArrowUpSLine,
} from "@remixicon/react";
import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const serviceLinks = [
  { label: "Graphic Design", href: "/service/graphic-design" },
  { label: "Printing Services", href: "/service/printing" },
  { label: "Corporate Gifting", href: "/service/corporate-gifting" },
  { label: "Perfume Manufacturing", href: "/service/perfume-manufacturing" },
  { label: "Hospital Essentials", href: "/service/hospital-essentials" },
];

const dropdownVariants = {
  hidden: { opacity: 0, y: -8, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.2, ease: "easeOut" as const },
  },
  exit: { opacity: 0, y: -8, scale: 0.97, transition: { duration: 0.15 } },
};

const accordionVariants = {
  hidden: { height: 0, opacity: 0 },
  visible: {
    height: "auto",
    opacity: 1,
    transition: { duration: 0.25, ease: "easeOut" as const },
  },
  exit: { height: 0, opacity: 0, transition: { duration: 0.2 } },
};

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setMobileServicesOpen(false);
  };

  return (
    <nav className="w-full bg-background px-4 py-2 flex justify-between items-center font-mono relative z-50">
      {/* Logo */}
      <div className="logo-container">
        <Link href="/">
          <Image
            src="/images/magic-logo.png"
            alt="Magic Enterprises"
            width={120}
            height={40}
            className="object-contain"
          />
        </Link>
      </div>

      {/* Desktop Nav */}
      <div className="hidden nav-items md:flex gap-4 justify-between items-center text-white">
        <Link className="hover:underline" href="/">
          Home &nbsp;|
        </Link>
        <Link className="hover:underline" href="/about-us">
          About Us &nbsp;|
        </Link>

        {/* Services Dropdown */}
        <div ref={dropdownRef} className="relative">
          <button
            onClick={() => setServicesOpen((prev) => !prev)}
            className="flex items-center gap-0.5 hover:underline cursor-pointer select-none"
          >
            Services
            {servicesOpen ? (
              <RiArrowUpSLine size={18} />
            ) : (
              <RiArrowDownSLine size={18} />
            )}
          </button>

          <AnimatePresence>
            {servicesOpen && (
              <motion.div
                variants={dropdownVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-56 rounded-xl overflow-hidden shadow-lg border"
                style={{
                  background: "var(--background-alt)",
                  borderColor: "var(--border)",
                }}
              >
                {serviceLinks.map((service, i) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    onClick={() => setServicesOpen(false)}
                    className="block px-4 py-2.5 text-sm text-white hover:text-white transition-colors"
                    style={{
                      borderBottom:
                        i < serviceLinks.length - 1
                          ? "1px solid var(--border)"
                          : "none",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.background =
                        "rgba(214,40,40,0.12)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.background = "transparent")
                    }
                  >
                    {service.label}
                  </Link>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <span className="text-white">&nbsp;|</span>

        <Link className="hover:underline" href="/our-work">
          Our Work &nbsp;|
        </Link>
        <Link className="hover:underline" href="/contact-us">
          Contact Us
        </Link>
      </div>

      {/* Mobile Hamburger */}
      <div className="md:hidden mobile-nav-links">
        {mobileMenuOpen ? (
          <RiCloseLine
            size={30}
            className="cursor-pointer"
            color="white"
            onClick={closeMobileMenu}
          />
        ) : (
          <RiMenuLine
            size={30}
            className="cursor-pointer"
            color="white"
            onClick={() => setMobileMenuOpen(true)}
          />
        )}
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.2 } }}
            exit={{ opacity: 0, y: -10, transition: { duration: 0.15 } }}
            className="mobile-menu absolute top-16 left-0 w-full md:hidden flex flex-col items-center text-white"
            style={{ background: "var(--background)", zIndex: 40 }}
          >
            <Link
              href="/"
              className="py-3 border-b w-full text-center"
              style={{ borderColor: "var(--border)" }}
              onClick={closeMobileMenu}
            >
              Home
            </Link>
            <Link
              href="/about-us"
              className="py-3 border-b w-full text-center"
              style={{ borderColor: "var(--border)" }}
              onClick={closeMobileMenu}
            >
              About Us
            </Link>

            {/* Mobile Services Accordion */}
            <div className="w-full border-b" style={{ borderColor: "var(--border)" }}>
              <button
                className="py-3 w-full flex justify-center items-center gap-1 cursor-pointer"
                onClick={() => setMobileServicesOpen((prev) => !prev)}
              >
                Services
                {mobileServicesOpen ? (
                  <RiArrowUpSLine size={18} />
                ) : (
                  <RiArrowDownSLine size={18} />
                )}
              </button>

              <AnimatePresence>
                {mobileServicesOpen && (
                  <motion.div
                    variants={accordionVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="overflow-hidden"
                    style={{ background: "var(--background-alt)" }}
                  >
                    {serviceLinks.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        className="block py-2.5 text-sm text-center border-t"
                        style={{
                          borderColor: "var(--border)",
                          color: "var(--foreground-muted)",
                        }}
                        onClick={closeMobileMenu}
                      >
                        {service.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href="/our-work"
              className="py-3 border-b w-full text-center"
              style={{ borderColor: "var(--border)" }}
              onClick={closeMobileMenu}
            >
              Our Work
            </Link>
            <Link
              href="/contact-us"
              className="py-3 w-full text-center"
              onClick={closeMobileMenu}
            >
              Contact Us
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
