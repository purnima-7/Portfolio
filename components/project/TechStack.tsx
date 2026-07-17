"use client";

import { motion } from "framer-motion";

interface TechStackProps {
  tech: string[];
}

export default function TechStack({ tech }: TechStackProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mt-12 flex flex-wrap gap-3"
    >
      {tech.map((item, index) => (
        <motion.span
          key={item}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            delay: index * 0.05,
            duration: 0.35,
          }}
          whileHover={{
            y: -2,
            scale: 1.03,
          }}
          className="
            rounded-full
            border
            border-black/10
            bg-white
            px-5
            py-2.5
            text-sm
            font-medium
            text-zinc-700
            shadow-sm
          "
        >
          {item}
        </motion.span>
      ))}
    </motion.div>
  );
}