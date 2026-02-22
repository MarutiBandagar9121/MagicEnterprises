"use client";

import { motion } from "framer-motion";

export default function AnimatedHeading() {
  return (
    <motion.h1
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-2xl md:text-3xl lg:text-4xl font-mono text-center leading-tight"
    >
      <motion.span
        className="bg-clip-text text-transparent bg-[linear-gradient(90deg,#FF4400,#ffffff,#FF4400)] bg-size-[200%_200%]"
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        Pune’s Most Trusted
        <br />
        Graphic Design & Printing Experts
      </motion.span>
    </motion.h1>
  );
}
