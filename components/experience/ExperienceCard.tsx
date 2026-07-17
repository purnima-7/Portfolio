"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  Briefcase,
  Code2,
  Crown,
  GraduationCap,
} from "lucide-react";

import KeyContributions from "./KeyContributions";
import { Experience } from "@/data/experience";

interface Props {
  experience: Experience;
}

function getIcon(type: Experience["type"]) {
  switch (type) {
    case "Internship":
      return Briefcase;

    case "Leadership":
      return Crown;

    case "Technical":
      return Code2;

    case "Research":
      return GraduationCap;

    default:
      return Briefcase;
  }
}

const ICONS = {
  Internship: Briefcase,
  Leadership: Crown,
  Technical: Code2,
  Research: GraduationCap,
} as const;

export default function ExperienceCard({
  experience,
}: Props) {
  const Icon = ICONS[experience.type] ?? Briefcase;

  return (
    <AnimatePresence mode="wait">

      <motion.article
        key={experience.role}
        initial={{
          opacity: 0,
          y: 40,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        exit={{
          opacity: 0,
          y: -30,
        }}
        transition={{
          duration: 0.45,
        }}
        className="
          relative
          overflow-hidden
          rounded-[36px]
          border
          border-[var(--border)]
          bg-white/85
          backdrop-blur-xl
          shadow-xl
        "
      >

        {/* Decorative Glow */}

        <div
          className="
            absolute
            -right-24
            -top-24
            h-72
            w-72
            rounded-full
            bg-[var(--mauve)]
            opacity-10
            blur-3xl
          "
        />

        {/* Main Content */}

        <div className="relative p-10 lg:p-14">

          {/* Header */}

          <div className="flex items-start justify-between gap-6">

            <div>

              <span
                className="
                  inline-flex
                  items-center
                  rounded-full
                  border
                  border-[var(--border)]
                  bg-[var(--surface-alt)]
                  px-4
                  py-2
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                  text-[var(--primary)]
                "
              >
                {experience.type}
              </span>

              <h2
                className="
                  mt-6
                  text-3xl
                  font-bold
                  text-[var(--text-dark)]
                "
              >
                {experience.role}
              </h2>

              <p
                className="
                  mt-3
                  text-lg
                  font-medium
                  text-[var(--primary)]
                "
              >
                {experience.organizationFull}
              </p>

            </div>

            <motion.div
              whileHover={{
                rotate: 8,
                scale: 1.08,
              }}
              className="
                flex
                h-16
                w-16
                items-center
                justify-center
                rounded-2xl
                bg-[var(--surface-alt)]
              "
            >
              <Icon
                className="
                  h-8
                  w-8
                  text-[var(--primary)]
                "
              />
            </motion.div>

          </div>

          {/* Description */}

          <p
            className="
              mt-10
              max-w-3xl
              text-lg
              leading-9
              text-[var(--text-light)]
            "
          >
            {experience.description}
          </p>

          {/* Highlights */}

          <KeyContributions
            contributions={experience.highlights}
          />

          {/* Footer */}

          <div
            className="
              mt-12
              flex
              flex-wrap
              items-center
              justify-between
              gap-4
              border-t
              border-[var(--border)]
              pt-8
            "
          >

            <div>

              <p
                className="
                  text-xs
                  uppercase
                  tracking-[0.2em]
                  text-[var(--text-light)]
                "
              >
                Duration
              </p>

              <p
                className="
                  mt-2
                  font-semibold
                  text-[var(--text-dark)]
                "
              >
                {experience.duration}
              </p>

            </div>

            <div>

              <p
                className="
                  text-xs
                  uppercase
                  tracking-[0.2em]
                  text-[var(--text-light)]
                "
              >
                Experience Type
              </p>

              <p
                className="
                  mt-2
                  font-semibold
                  text-[var(--text-dark)]
                "
              >
                {experience.type}
              </p>

            </div>

          </div>

        </div>

      </motion.article>

    </AnimatePresence>
  );
}