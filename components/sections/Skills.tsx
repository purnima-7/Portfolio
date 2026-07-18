"use client";

import { motion } from "framer-motion";

import SkillCard from "../skills/SkillCard";
import { skills } from "@/data/skills";

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-[var(--background)] py-28"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-0 top-24 h-72 w-72 rounded-full bg-[var(--mauve)]/10 blur-3xl" />
        <div className="absolute right-0 bottom-20 h-80 w-80 rounded-full bg-[var(--pink)]/20 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <span
            className="
              inline-flex
              rounded-full
              bg-[var(--pink)]
              px-4
              py-2
              text-sm
              font-semibold
              text-[var(--prune)]
            "
          >
            TECHNICAL EXPERTISE
          </span>

          <h2 className="mt-6 text-4xl font-bold tracking-tight text-[var(--primary)] md:text-5xl">
            Skills & Technologies
          </h2>

          <p className="mt-6 text-lg leading-8 text-[var(--text-light)]">
            From building scalable web applications to developing AI-powered
            solutions, these are the technologies and engineering fundamentals
            I use to turn ideas into production-ready software.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid gap-8 lg:grid-cols-12">
          {/* Languages */}
          <div className="lg:col-span-4 flex">
            <SkillCard {...skills[0]} delay={0.05} />
          </div>

          {/* Frontend */}
          <div className="lg:col-span-5 flex">
            <SkillCard {...skills[1]} delay={0.1} />
          </div>

          {/* Databases */}
          <div className="lg:col-span-3 flex">
            <SkillCard {...skills[3]} delay={0.2} />
          </div>

          {/* Backend */}
          <div className="lg:col-span-6 flex">
            <SkillCard {...skills[2]} delay={0.15} />
          </div>

          {/* Cloud */}
          <div className="lg:col-span-6 flex">
            <SkillCard {...skills[5]} delay={0.3} />
          </div>

          {/* AI */}
          <div className="lg:col-span-5 flex">
            <SkillCard {...skills[4]} delay={0.25} />
          </div>

          {/* Core CS */}
          <div className="lg:col-span-7 flex">
            <SkillCard {...skills[6]} delay={0.35} />
          </div>
        </div>
      </div>
    </section>
  );
}