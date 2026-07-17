"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import MagneticButton from "@/components/ui/MagneticButton";

interface ProjectHeaderProps {
  category: string;
  title: string;
  description: string;
  github?: string;
  demo?: string;
}

export default function ProjectHeader({
  category,
  title,
  description,
  github,
  demo,
}: ProjectHeaderProps) {
  return (
    <header className="max-w-3xl">

      {/* Category */}

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="
          mb-6
          text-xs
          uppercase
          tracking-[0.45em]
          text-[#C96B3C]
        "
      >
        {category}
      </motion.p>

      {/* Title */}

      <motion.h2
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          delay: 0.1,
          duration: 0.6,
        }}
        className="
          text-5xl
          font-bold
          leading-[0.95]
          tracking-[-0.04em]
          text-[#111]
          md:text-7xl
        "
      >
        {title}
      </motion.h2>

      {/* Description */}

      <motion.p
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          delay: 0.2,
          duration: 0.6,
        }}
        className="
          mt-10
          max-w-2xl
          text-lg
          leading-9
          text-zinc-600
        "
      >
        {description}
      </motion.p>

      {/* Buttons */}

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          delay: 0.3,
          duration: 0.6,
        }}
        className="mt-14 flex flex-wrap gap-5"
      >
        {github && (
          <MagneticButton href={github}>
            <span className="flex items-center gap-2">
              <FaGithub className="text-lg" />
              GitHub
            </span>
          </MagneticButton>
        )}

        {demo && (
          <MagneticButton primary href={demo}>
            <span className="flex items-center gap-2">
              Live Demo
              <ArrowUpRight size={18} />
            </span>
          </MagneticButton>
        )}
      </motion.div>
    </header>
  );
}