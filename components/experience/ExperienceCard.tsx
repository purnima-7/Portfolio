"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Building2,
  CalendarDays,
} from "lucide-react";

import { Experience } from "@/data/experience";
import KeyContributions from "./KeyContributions";
import TechStack from "@/components/experience/TechStack";

interface ExperienceCardProps {
  experience: Experience;
}

export default function ExperienceCard({
  experience,
}: ExperienceCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55 }}
      className="rounded-[32px] border p-8 lg:p-10"
      style={{
        background: "var(--experience-card)",
        borderColor: "var(--experience-border)",
      }}
    >
      {/* Header */}

      <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">

        <div>

          <span
            className="
              inline-flex
              items-center
              rounded-full
              border
              px-4
              py-2
              text-xs
              font-semibold
              uppercase
              tracking-[0.28em]
            "
            style={{
              background: "var(--experience-chip)",
              borderColor: "var(--experience-border)",
              color: "var(--experience-accent)",
            }}
          >
            {experience.type}
          </span>

          <h3
            className="
              mt-5
              text-3xl
              font-bold
              tracking-tight
            "
            style={{
              color: "var(--experience-heading)",
            }}
          >
            {experience.role}
          </h3>

          <div className="mt-6 flex flex-col gap-4">

            <div className="flex items-center gap-3">

              <Building2
                size={18}
                color="var(--experience-accent)"
              />

              <div>

                <p
                  className="font-semibold"
                  style={{
                    color: "var(--experience-heading)",
                  }}
                >
                  {experience.organization}
                </p>

                <p
                  className="text-sm"
                  style={{
                    color: "var(--experience-text)",
                  }}
                >
                  {experience.organizationFull}
                </p>

              </div>

            </div>

            <div className="flex items-center gap-3">

              <CalendarDays
                size={18}
                color="var(--experience-accent)"
              />

              <span
                style={{
                  color: "var(--experience-text)",
                }}
              >
                {experience.duration}
              </span>

            </div>

          </div>

        </div>

        {experience.certificate && (
          <a
            href={experience.certificate}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex
              items-center
              gap-2
              self-start
              rounded-full
              border
              px-5
              py-3
              text-sm
              font-medium
              transition-all
              duration-300
              hover:-translate-y-1
            "
            style={{
              background: "var(--experience-chip)",
              borderColor: "var(--experience-border)",
              color: "var(--experience-accent)",
            }}
          >
            View Certificate

            <ArrowUpRight size={16} />
          </a>
        )}

      </div>

      {/* Divider */}

      <div
        className="my-10 h-px"
        style={{
          background: "var(--experience-border)",
        }}
      />

      {/* About */}

      <div>

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
            About
          </h4>

        </div>

        <p
          className="
            mt-6
            leading-8
          "
          style={{
            color: "var(--experience-text)",
          }}
        >
          {experience.description}
        </p>

      </div>

      {/* Divider */}

      <div
        className="my-10 h-px"
        style={{
          background: "var(--experience-border)",
        }}
      />

      <KeyContributions
        contributions={experience.highlights}
      />

      {/* Divider */}

      <div
        className="my-10 h-px"
        style={{
          background: "var(--experience-border)",
        }}
      />

      <TechStack
        technologies={experience.tech}
      />

    </motion.article>
  );
}