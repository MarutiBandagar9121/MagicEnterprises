"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface Props {
  title: string;
  description: string;
  image: string;
}

export default function ServiceCard({ title, description, image }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -8 }}
      className="group bg-blue-900/60 backdrop-blur-md rounded-2xl overflow-hidden 
                 border border-white/1
                 transition-all duration-300 shadow-lg"
    >
      {/* Image */}
      <div className="relative h-52 w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-110 transition duration-500"
        />
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <h3 className="text-xl font-semibold text-white transition">{title}</h3>

        <p className="text-gray-300 text-sm leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
}
