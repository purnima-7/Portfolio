"use client";

import { motion } from "framer-motion";
import { ComponentType } from "react";

interface SkillPillProps {
  name: string;
  icon: ComponentType<{ className?: string }>;
}

export default function SkillPill({
  name,
  icon: Icon,
}: SkillPillProps) {
  return (
    <motion.div
      whileHover={{
        y: -4,
        scale: 1.04,
      }}
      whileTap={{ scale: 0.96 }}
      transition={{
        type: "spring",
        stiffness: 350,
        damping: 22,
      }}
      className="
        group
        flex
        items-center
        gap-2
        rounded-full
        border
        border-[var(--border)]
        bg-white/80
        px-4
        py-2
        text-sm
        font-medium
        text-[var(--text-dark)]
        shadow-sm
        backdrop-blur
        transition-all
        duration-300
        hover:border-[var(--mauve)]
        hover:bg-white
        hover:shadow-lg
      "
    >
      <div
        className="
          flex
          h-8
          w-8
          items-center
          justify-center
          rounded-full
          bg-[var(--surface-alt)]
          transition-colors
          duration-300
          group-hover:bg-[var(--mauve)]
        "
      >
        <Icon
          className="
            h-4
            w-4
            text-[var(--prune)]
            transition-colors
            duration-300
            group-hover:text-white
          "
        />
      </div>

      <span className="whitespace-nowrap">
        {name}
      </span>
    </motion.div>
  );
}