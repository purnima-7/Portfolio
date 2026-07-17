"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface ProjectMockupProps {
  image: string;
  title: string;
  className?: string;
}

export default function ProjectMockup({
  image,
  title,
  className = "",
}: ProjectMockupProps) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.01,
      }}
      transition={{
        type: "spring",
        stiffness: 220,
        damping: 22,
      }}
      className={`relative ${className}`}
    >
      {/* Glow */}

      <div
        className="
          absolute
          inset-0
          rounded-[40px]
          bg-gradient-to-br
          from-[var(--primary)]/20
          via-transparent
          to-[var(--secondary)]/20
          blur-3xl
          opacity-60
        "
      />

      {/* Window */}

      <div
        className="
          relative
          overflow-hidden
          rounded-[32px]
          border
          border-white/10
          bg-[var(--surface)]
          shadow-[var(--shadow-lg)]
        "
      >
        {/* Top Bar */}

        <div
          className="
            flex
            items-center
            justify-between
            border-b
            border-white/10
            px-6
            py-4
          "
        >
          <div className="flex gap-2">
            <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
            <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
            <span className="h-3 w-3 rounded-full bg-[#28c840]" />
          </div>

          <p className="text-xs uppercase tracking-[0.3em] text-[var(--text-muted)]">
            {title}
          </p>

          <div className="w-10" />
        </div>

        {/* Image */}

        <div className="relative aspect-[16/10]">
          <Image
            src={image}
            alt={title}
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
        </div>
      </div>
    </motion.div>
  );
}