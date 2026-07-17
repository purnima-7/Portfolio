"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import Timeline from "@/components/experience/Timeline";
import ExperienceCard from "@/components/experience/ExperienceCard";

import { experiences } from "@/data/experience";

export default function Experience() {
  // Latest experience selected by default
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      id="experience"
      className="
        relative
        overflow-hidden
        bg-[var(--background)]
        py-32
      "
    >
      {/* Background Glow */}

      <div
        className="
          absolute
          left-1/2
          top-0
          h-[600px]
          w-[600px]
          -translate-x-1/2
          rounded-full
          bg-[var(--mauve)]
          opacity-5
          blur-[140px]
        "
      />

      <div className="container mx-auto max-w-7xl px-6">

        {/* Section Header */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p
            className="
              text-sm
              font-semibold
              uppercase
              tracking-[0.35em]
              text-[var(--primary)]
            "
          >
            Experience
          </p>

          <h2
            className="
              mt-5
              text-5xl
              font-bold
              text-[var(--primary)]
            "
          >
            Building Through
            <br />
            Real Experiences
          </h2>

          <p
            className="
              mx-auto
              mt-6
              max-w-2xl
              text-lg
              leading-8
              text-[var(--text-light)]
            "
          >
            From technical communities to enterprise internships,
            every milestone has shaped how I approach engineering,
            collaboration, and product thinking.
          </p>
        </motion.div>

        {/* Timeline */}

        <div className="mt-24">
          <Timeline
            experiences={experiences}
            activeIndex={activeIndex}
            onSelect={setActiveIndex}
          />
        </div>

        {/* Experience Card */}

        <motion.div
          key={activeIndex}
          initial={{
            opacity: 0,
            y: 25,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.45,
          }}
          className="
            mx-auto
            mt-20
            max-w-5xl
          "
        >
          <ExperienceCard
            experience={experiences[activeIndex]}
          />
        </motion.div>

      </div>
    </section>
  );
}