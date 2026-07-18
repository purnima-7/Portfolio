"use client";

import { motion } from "framer-motion";

interface TimelineNodeProps {
  active?: boolean;
}

export default function TimelineNode({
  active = true,
}: TimelineNodeProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.8,
      }}
      whileInView={{
        opacity: 1,
        scale: 1,
      }}
      viewport={{ once: true }}
      transition={{
        duration: 0.45,
      }}
      className="relative flex items-center justify-center"
    >
      {/* Soft Glow */}

      {active && (
        <motion.div
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.18, 0.3, 0.18],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            h-20
            w-20
            rounded-full
            blur-3xl
          "
          style={{
            background: "var(--experience-accent-soft)",
          }}
        />
      )}

      {/* Outer Ring */}

      <div
        className="
          relative
          flex
          h-9
          w-9
          items-center
          justify-center
          rounded-full
          border-2
        "
        style={{
          background: "var(--experience-card)",
          borderColor: "var(--experience-accent)",
        }}
      >
        {/* Inner Circle */}

        <motion.div
          animate={{
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            h-4
            w-4
            rounded-full
          "
          style={{
            background: "var(--experience-accent)",
          }}
        />
      </div>

      {/* Year Badge */}

      <motion.div
        initial={{
          opacity: 0,
          x: -10,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={{ once: true }}
        transition={{
          delay: 0.15,
        }}
        className="
          absolute
          -left-20
          rounded-full
          border
          px-3
          py-1
          text-xs
          font-semibold
          tracking-[0.2em]
          uppercase
        "
        style={{
          background: "var(--experience-surface)",
          borderColor: "var(--experience-border)",
          color: "var(--experience-accent)",
        }}
      >
        2026
      </motion.div>
    </motion.div>
  );
}