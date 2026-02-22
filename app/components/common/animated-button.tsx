"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function AnimatedButton() {
  return (
    <Link href="/contact-us">
      <motion.div
        className="relative p-[2px] rounded-full inline-block cursor-pointer"
        animate={{
          background: [
            "linear-gradient(90deg, #ff7a00, #ffffff)",
            "linear-gradient(270deg, #ffffff, #ff7a00)",
          ],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <motion.button
          whileTap={{ scale: 0.95 }}
          className="px-8 py-3 rounded-full bg-blue-950 text-white font-mono text-lg"
        >
          Connect With Us
        </motion.button>
      </motion.div>
    </Link>
  );
}
