"use client";

import Reveal from "@/components/animations/Reveal";
import { experiences } from "@/data/experience";

import Timeline from "@/components/experience/Timeline";
import ExperienceCard from "@/components/experience/ExperienceCard";

export default function Experience() {
  const experience = experiences[0];

  return (
    <section
      id="experience"
      className="relative overflow-hidden py-28"
      style={{
        background: "var(--experience-bg)",
      }}
    >
      {/* Background Glow */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-0
          h-[480px]
          w-[480px]
          -translate-x-1/2
          rounded-full
          blur-[140px]
        "
        style={{
          background: "var(--experience-accent-soft)",
          opacity: 0.16,
        }}
      />

      <div className="container relative z-10">

        {/* Heading */}

        <Reveal>
          <div className="mx-auto max-w-3xl text-center">

            <span
              className="
                inline-flex
                items-center
                rounded-full
                border
                px-5
                py-2
                text-sm
                font-semibold
                uppercase
                tracking-[0.28em]
              "
              style={{
                background: "var(--experience-accent)",
                borderColor: "var(--experience-border)",
                color: "var(--experience-surface)",
              }}
            >
              Experience
            </span>

            <h2
              className="
                mt-6
                text-4xl
                font-bold
                tracking-tight
                md:text-5xl
              "
              style={{
                color: "var(--experience-heading)",
              }}
            >
              Building practical engineering
              <br />
              experience through real work.
            </h2>

            <p
              className="
                mx-auto
                mt-6
                max-w-2xl
                text-lg
                leading-8
              "
              style={{
                color: "var(--experience-text)",
              }}
            >
              My professional journey so far has focused on applying software
              engineering principles in real-world environments while learning
              from experienced teams.
            </p>

          </div>
        </Reveal>

        {/* Timeline + Card */}

        <div
          className="
            mx-auto
            mt-20
            grid
            max-w-6xl
            grid-cols-1
            gap-10
            lg:grid-cols-[90px_1fr]
            lg:items-start
          "
        >
          <Timeline />

          <Reveal delay={0.15}>
            <ExperienceCard experience={experience} />
          </Reveal>
        </div>

      </div>
    </section>
  );
}