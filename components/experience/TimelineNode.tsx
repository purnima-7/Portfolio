"use client";

import { motion } from "framer-motion";

interface TimelineNodeProps {
  year: string;
  organization: string;
  active: boolean;
  onClick: () => void;
}

export default function TimelineNode({
  year,
  organization,
  active,
  onClick,
}: TimelineNodeProps) {

  return (
    <motion.button
      type="button"
      onClick={onClick}
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.96 }}
      className="
        group
        relative
        flex
        w-[180px]
        flex-col
        items-center
        text-center
        outline-none
      "
    >
      {/* Timeline Node */}

      <motion.div
        animate={{
  scale: active ? 1.15 : 1,
  boxShadow: active
    ? "0 0 0 8px rgba(189,142,137,0.12)"
    : "0 0 0 0 rgba(189,142,137,0)",
}}
        transition={{
          type: "spring",
          stiffness: 350,
          damping: 20,
        }}
        className="relative"
      >
        {/* Glow */}

        {active && (
          <motion.div
            layoutId="timeline-glow"
            className="
              absolute
              inset-0
              rounded-full
              bg-[var(--mauve)]
              blur-xl
              opacity-25
              scale-[2.5]
            "
          />
        )}

        {/* Circle */}

        <div
          className={`
            relative
            z-10
            flex
            h-6
            w-6
            items-center
            justify-center
            rounded-full
            border-2
            transition-all
            duration-300

            ${
              active
                ? "border-[var(--mauve)] bg-[var(--mauve)]"
                : "border-[var(--border)] bg-white group-hover:border-[var(--mauve)]"
            }
          `}
        >
          {active && (
            <motion.div
              layoutId="active-dot"
              className="
                h-2
                w-2
                rounded-full
                bg-white
              "
            />
          )}
        </div>
      </motion.div>

      {/* Year */}

      <motion.p
        animate={{
          opacity: active ? 1 : 0.7,
          y: active ? 0 : 2,
        }}
        className="
          mt-6
          text-xs
          font-bold
          tracking-[0.35em]
          uppercase
          text-[var(--text-light)]
        "
      >
        {year}
      </motion.p>

      {/* Organization */}

      <motion.p
        animate={{
          opacity: active ? 1 : 0.7,
          y: active ? 0 : 2,
        }}
        className={`
          mt-2
          text-lg
          font-semibold
          transition-colors
          duration-300

          ${
            active
              ? "text-[var(--text-dark)]"
              : "text-[var(--text-light)]"
          }
        `}
      >
        {organization}
      </motion.p>
    </motion.button>
  );
}