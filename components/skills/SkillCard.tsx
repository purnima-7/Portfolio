"use client";

import { motion } from "framer-motion";
import { ComponentType } from "react";
import SkillPill from "./SkillPill";

interface SkillItem {
  name: string;
  icon: ComponentType<{ className?: string }>;
}

interface SkillCardProps {
  title: string;
  description: string;
  icon: ComponentType<{ className?: string }>;
  items: SkillItem[];
  delay?: number;
}

export default function SkillCard({
  title,
  description,
  icon: Icon,
  items,
  delay = 0,
}: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.55,
        delay,
        ease: "easeOut",
      }}
      whileHover={{
        y: -8,
      }}
      className="
  group
  relative
  flex
  min-h-[300px]
  w-full
  flex-col
  overflow-hidden
  rounded-3xl
  border
  border-[var(--border)]
  bg-[var(--surface-light)]
  p-8
  shadow-sm
  transition-all
  duration-500
  hover:border-[var(--mauve)]
  hover:shadow-2xl
"
    >
      {/* Background Glow */}
      <div
        className="
          absolute
          -right-20
          -top-20
          h-48
          w-48
          rounded-full
          bg-[var(--mauve)]
          opacity-0
          blur-3xl
          transition-opacity
          duration-500
          group-hover:opacity-10
        "
      />

      {/* Header */}
      <div className="relative z-10 flex items-start gap-5">
        <div
          className="
            flex
            h-10
            w-14
            items-center
            justify-center
            rounded-2xl
            bg-white
            shadow-md
            transition-all
            duration-300
            group-hover:scale-110
            group-hover:bg-[var(--mauve)]
          "
        >
          <Icon
            className="
              h-7
              w-7
              text-[var(--prune)]
              transition-colors
              duration-300
              group-hover:text-white
            "
          />
        </div>

        <div className="flex-1">
          <h3 className="text-2xl font-bold text-[var(--text-dark)]">
            {title}
          </h3>
        </div>
      </div>

      {/* Divider */}
      <div className="my-7 h-px bg-gradient-to-r from-transparent via-[var(--border)] to-transparent" />

      {/* Skills */}
      <div className="flex flex-wrap gap-3">
        {items.map((skill) => (
          <SkillPill
            key={skill.name}
            name={skill.name}
            icon={skill.icon}
          />
        ))}
      </div>
    </motion.div>
  );
}