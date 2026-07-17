"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FloatingBadgeProps {
  children: ReactNode;
  className?: string;
}

export default function FloatingBadge({
  children,
  className = "",
}: FloatingBadgeProps) {
  return (
    <motion.div
      whileHover={{
        y: -3,
        scale: 1.03,
      }}
      transition={{
        type: "spring",
        stiffness: 220,
        damping: 18,
      }}
      className={`
        inline-flex
        items-center
        rounded-full
        border
        border-white/10
        bg-white/80
        backdrop-blur-xl
        px-5
        py-3
        shadow-[0_20px_60px_rgba(0,0,0,.15)]
        ${className}
      `}
    >
      <span
        className="
          text-xs
          font-medium
          uppercase
          tracking-[0.28em]
          text-zinc-700
        "
      >
        {children}
      </span>
    </motion.div>
  );
}