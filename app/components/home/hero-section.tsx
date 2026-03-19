"use client";

import { motion, type Variants } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const stats = [
  { value: "500+", label: "Happy Clients" },
  { value: "10+", label: "Years Active" },
  { value: "5K+", label: "Projects Done" },
  { value: "5", label: "Services" },
];

const serviceTags = [
  "Graphic Design",
  "Printing",
  "Corporate Gifting",
  "Perfumes",
  "Hospital Essentials",
];

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65 } },
};

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.7 } },
};

export default function HeroSection() {
  return (
    <section
      className="relative min-h-[calc(100vh-80px)] flex items-center overflow-hidden"
      style={{ background: "var(--background)" }}
    >
      {/* ── Background layers ─────────────────────────────────── */}

      {/* Dot-grid texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Red glow blob — top right */}
      <div
        className="absolute -top-32 -right-32 w-150 h-150 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(214,40,40,0.18) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      {/* Subtle bottom-left glow */}
      <div
        className="absolute -bottom-24 -left-24 w-100 h-100 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(214,40,40,0.08) 0%, transparent 70%)",
          filter: "blur(50px)",
        }}
      />

      {/* Diagonal stripe texture */}
      <div
        className="absolute top-0 right-0 w-1/2 h-full pointer-events-none opacity-[0.03]"
        style={{
          background:
            "repeating-linear-gradient(-55deg, #ffffff 0px, #ffffff 1px, transparent 1px, transparent 40px)",
        }}
      />

      {/* ── Main content ──────────────────────────────────────── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 xl:px-10 py-16 grid lg:grid-cols-2 gap-10 xl:gap-16 items-center">

        {/* ── LEFT: Copy ──────────────────────────────────────── */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-7"
        >
          {/* Eyebrow pill */}
          <motion.div variants={item}>
            <span
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full text-sm font-semibold text-white/90"
              style={{
                border: "1px solid var(--border-accent)",
                background: "rgba(214,40,40,0.12)",
              }}
            >
              <span
                className="w-2 h-2 rounded-full animate-pulse"
                style={{ background: "var(--accent)" }}
              />
              Pune&apos;s Premier Design &amp; Print Studio
            </span>
          </motion.div>

          {/* H1 */}
          <motion.h1
            variants={item}
            className="text-4xl md:text-5xl xl:text-6xl font-bold leading-tight text-white"
          >
            Bring Your{" "}
            <motion.span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, #ff4444 0%, #ffffff 50%, #ff4444 100%)",
                backgroundSize: "200% 100%",
              }}
              animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            >
              Brand to Life
            </motion.span>
            <br />
            <span className="text-white">with Pune&apos;s Best.</span>
          </motion.h1>

          {/* Body */}
          <motion.p
            variants={item}
            className="text-base md:text-lg leading-relaxed max-w-lg"
            style={{ color: "var(--foreground-muted)" }}
          >
            Premium graphic design, high-quality printing, bespoke corporate
            gifting, and more — all under one roof. Trusted by 500+ businesses
            across Pune for quality that speaks for itself.
          </motion.p>

          {/* Service tags */}
          <motion.div variants={item} className="flex flex-wrap gap-2">
            {serviceTags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1.5 rounded-full text-xs font-semibold text-white/70 transition-colors hover:text-white"
                style={{
                  background: "rgba(255,255,255,0.07)",
                  border: "1px solid var(--border)",
                }}
              >
                {tag}
              </span>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div variants={item} className="flex flex-wrap gap-4 items-center">
            <Link href="/contact-us">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="px-7 py-3.5 rounded-full font-semibold text-white text-sm shadow-lg"
                style={{
                  background: "var(--accent)",
                  boxShadow: "0 0 24px rgba(214,40,40,0.4)",
                }}
              >
                Get a Free Quote
              </motion.button>
            </Link>
            <Link href="/our-work">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="px-7 py-3.5 rounded-full font-semibold text-sm flex items-center gap-2"
                style={{
                  border: "1px solid var(--border)",
                  color: "var(--foreground)",
                  background: "rgba(255,255,255,0.05)",
                }}
              >
                View Our Work
                <span className="text-base">→</span>
              </motion.button>
            </Link>
          </motion.div>

          {/* Stats bar */}
          <motion.div
            variants={item}
            className="grid grid-cols-4 gap-3 pt-2 border-t"
            style={{ borderColor: "var(--border)" }}
          >
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <p
                  className="text-xl md:text-2xl font-bold"
                  style={{ color: "var(--accent-light)" }}
                >
                  {stat.value}
                </p>
                <p
                  className="text-xs mt-0.5"
                  style={{ color: "var(--foreground-muted)" }}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* ── RIGHT: Image ────────────────────────────────────── */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          className="relative hidden lg:flex justify-center items-center"
        >
          {/* Corner accents */}
          <div
            className="absolute -top-3 -left-3 w-12 h-12 pointer-events-none"
            style={{
              borderTop: "3px solid var(--accent)",
              borderLeft: "3px solid var(--accent)",
              borderRadius: "4px 0 0 0",
            }}
          />
          <div
            className="absolute -bottom-3 -right-3 w-12 h-12 pointer-events-none"
            style={{
              borderBottom: "3px solid var(--accent)",
              borderRight: "3px solid var(--accent)",
              borderRadius: "0 0 4px 0",
            }}
          />

          {/* Glow ring */}
          <div
            className="absolute inset-0 rounded-2xl pointer-events-none"
            style={{ boxShadow: "0 0 60px rgba(214,40,40,0.2)" }}
          />

          {/* Main image */}
          <div
            className="relative w-full rounded-2xl overflow-hidden aspect-4/3"
            style={{
              border: "1px solid rgba(255,255,255,0.1)",
              background: "var(--background-alt)",
            }}
          >
            <Image
              src="/images/magic_hero_section.png"
              alt="Magic Enterprises — graphic design and printing studio in Pune"
              fill
              className="object-cover"
              priority
            />
            {/* Bottom gradient for card legibility */}
            <div
              className="absolute bottom-0 left-0 right-0 h-1/3 pointer-events-none"
              style={{
                background:
                  "linear-gradient(to top, rgba(10,30,61,0.7), transparent)",
              }}
            />
          </div>

          {/* Floating card — top right */}
          <motion.div
            initial={{ opacity: 0, x: 20, y: -10 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="absolute -top-5 -right-5 flex items-center gap-3 px-4 py-3 rounded-xl shadow-xl"
            style={{
              background: "rgba(15,40,84,0.95)",
              border: "1px solid var(--border-accent)",
              backdropFilter: "blur(12px)",
            }}
          >
            <div
              className="w-9 h-9 rounded-full flex items-center justify-center text-white text-lg shrink-0"
              style={{ background: "var(--accent)" }}
            >
              ✦
            </div>
            <div>
              <p className="text-white font-bold text-sm leading-none">
                500+ Clients
              </p>
              <p
                className="text-xs mt-1"
                style={{ color: "var(--foreground-muted)" }}
              >
                Trust Magic Enterprises
              </p>
            </div>
          </motion.div>

          {/* Floating card — bottom left */}
          <motion.div
            initial={{ opacity: 0, x: -20, y: 10 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.7, delay: 0.75 }}
            className="absolute -bottom-5 -left-5 flex items-center gap-3 px-4 py-3 rounded-xl shadow-xl"
            style={{
              background: "rgba(15,40,84,0.95)",
              border: "1px solid var(--border-accent)",
              backdropFilter: "blur(12px)",
            }}
          >
            <div
              className="w-9 h-9 rounded-full flex items-center justify-center text-white text-base shrink-0"
              style={{ background: "var(--accent)" }}
            >
              🏆
            </div>
            <div>
              <p className="text-white font-bold text-sm leading-none">
                10+ Years of Excellence
              </p>
              <p
                className="text-xs mt-1"
                style={{ color: "var(--foreground-muted)" }}
              >
                Pune&apos;s Trusted Name
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* ── Scroll hint ───────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 1.1 }}
        className="absolute bottom-7 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
      >
        <span className="text-xs" style={{ color: "var(--foreground-muted)" }}>
          scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-8 rounded-full flex items-start justify-center pt-1.5"
          style={{ border: "1.5px solid var(--border)" }}
        >
          <div
            className="w-1 h-2 rounded-full"
            style={{ background: "var(--accent)" }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
