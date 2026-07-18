"use client";

import { Check } from "lucide-react";
import { motion } from "framer-motion";

interface KeyContributionsProps {
  contributions: string[];
}

export default function KeyContributions({
  contributions,
}: KeyContributionsProps) {
  return (
    <div>

      {/* Heading */}

      <div className="flex items-center gap-4">

        <div
          className="h-px w-12"
          style={{
            background: "var(--experience-accent)",
          }}
        />

        <h4
          className="
            text-sm
            font-semibold
            uppercase
            tracking-[0.28em]
          "
          style={{
            color: "var(--experience-heading)",
          }}
        >
          Key Contributions
        </h4>

      </div>

      {/* List */}

<div className="mt-7 flex flex-wrap gap-4">
  {contributions.map((item, index) => (
    <motion.div
      key={item}
      initial={{
        opacity: 0,
        y: 10,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{ once: true }}
      transition={{
        delay: index * 0.08,
      }}
      className="
        flex
        items-center
        gap-3
        rounded-full
        border
        px-5
        py-3
      "
      style={{
        background: "var(--experience-chip)",
        borderColor: "var(--experience-border)",
      }}
    >
      <Check
        size={16}
        strokeWidth={2.5}
        color="var(--experience-accent)"
      />

      <span
        className="text-sm font-medium"
        style={{
          color: "var(--experience-heading)",
        }}
      >
        {item}
      </span>
    </motion.div>
  ))}
</div>

    </div>
  );
}