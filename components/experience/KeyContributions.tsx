"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface KeyContributionsProps {
  contributions: string[];
}

export default function KeyContributions({
  contributions,
}: KeyContributionsProps) {
  return (
    <div className="mt-10">
      {/* Heading */}

      <div className="mb-6 flex items-center gap-3">
        <div className="h-px w-8 bg-[var(--mauve)]" />

        <h4
          className="
            text-sm
            font-semibold
            uppercase
            tracking-[0.2em]
            text-[var(--text-light)]
          "
        >
          Key Contributions
        </h4>
      </div>

      {/* Contribution List */}

      <div className="grid gap-4 sm:grid-cols-2">
        {contributions.map((item, index) => (
          <motion.div
            key={item}
            initial={{
              opacity: 0,
              y: 10,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: index * 0.08,
            }}
            whileHover={{
              x: 6,
            }}
            className="
              group
              flex
              items-center
              gap-3
              rounded-2xl
              border
              border-[var(--border)]
              bg-white/70
              px-5
              py-4
              transition-all
              duration-300
              hover:border-[var(--mauve)]
              hover:shadow-md
            "
          >
            <div
              className="
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-full
                bg-[var(--surface-alt)]
                transition-colors
                duration-300
                group-hover:bg-[var(--mauve)]
              "
            >
              <ArrowUpRight
                size={16}
                className="
                  text-[var(--mauve)]
                  transition-colors
                  duration-300
                  group-hover:text-white
                "
              />
            </div>

            <span
              className="
                text-sm
                font-medium
                text-[var(--text-dark)]
              "
            >
              {item}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}