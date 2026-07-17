"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface BrowserWindowProps {
  children: ReactNode;
  title?: string;
  className?: string;
}

export default function BrowserWindow({
  children,
  title = "Preview",
  className = "",
}: BrowserWindowProps) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.01,
      }}
      transition={{
        type: "spring",
        stiffness: 220,
        damping: 18,
      }}
      className={`
        relative
        overflow-hidden
        rounded-[32px]
        border
        border-black/10
        bg-[#f8f6f2]
        shadow-[0_80px_160px_rgba(0,0,0,0.18)]
        ${className}
      `}
    >
      {/* Top Bar */}

      <div className="flex items-center justify-between border-b border-black/10 px-6 py-4">

        <div className="flex items-center gap-2">

          <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />

          <span className="h-3 w-3 rounded-full bg-[#febc2e]" />

          <span className="h-3 w-3 rounded-full bg-[#28c840]" />

        </div>

        <span className="text-xs tracking-[0.25em] uppercase text-zinc-600">

          {title}

        </span>

        <div className="w-12" />

      </div>

      {/* Content */}

      <div className="relative">

        {children}

      </div>

    </motion.div>
  );
}