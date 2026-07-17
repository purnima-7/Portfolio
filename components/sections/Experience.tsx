"use client";

import Reveal from "@/components/animations/Reveal";

const experience = [
  {
    period: "Aug 2025 — May 2026",
    role: "Delegate Affairs Head",
    organization: "Parola — The Literary Hub",
    description:
      "Led delegate management for large-scale events, coordinated cross-functional teams and streamlined communication for 200+ participants.",
    highlights: [
      "Managed 200+ delegates",
      "Led volunteer coordination",
      "Improved event operations",
    ],
  },
  {
    period: "May 2024 — May 2025",
    role: "Technical Team Member",
    organization: "AI/ML HUB",
    description:
      "Collaborated on AI and computer vision projects, explored machine learning workflows and contributed to prototype development.",
    highlights: [
      "Computer Vision",
      "Machine Learning",
      "Prototype Development",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="section bg-[var(--surface-light)]"
    >
      <div className="container">

        <Reveal>

          <p className="eyebrow">
            EXPERIENCE
          </p>

          <h2 className="heading-lg mt-6 max-w-3xl text-[var(--text-dark)]">
            Building technical expertise through projects,
            leadership and collaborative environments.
          </h2>

        </Reveal>

        <div className="relative mt-24">

          {/* Timeline */}

          <div
            className="
              absolute
              left-[18px]
              top-0
              bottom-0
              hidden
              w-px
              bg-[var(--border-light)]
              md:block
            "
          />

          <div className="space-y-20">

            {experience.map((item, index) => (

              <Reveal
                key={item.role}
                delay={index * 0.1}
              >

                <div className="grid gap-8 md:grid-cols-[60px_220px_1fr]">

                  {/* Dot */}

                  <div className="hidden md:flex justify-center">

                    <div
                      className="
                        mt-2
                        h-9
                        w-9
                        rounded-full
                        border-4
                        border-white
                        bg-[var(--primary)]
                        shadow-lg
                      "
                    />

                  </div>

                  {/* Date */}

                  <div>

                    <p
                      className="
                        text-sm
                        font-semibold
                        uppercase
                        tracking-[0.25em]
                        text-[var(--primary)]
                      "
                    >
                      {item.period}
                    </p>

                  </div>

                  {/* Content */}

                  <div
                    className="
                      rounded-[30px]
                      border
                      border-[var(--border-light)]
                      bg-white
                      p-8
                      shadow-sm
                      transition-all
                      duration-300
                      hover:-translate-y-2
                      hover:shadow-xl
                    "
                  >

                    <h3 className="text-3xl font-bold text-[var(--text-dark)]">
                      {item.role}
                    </h3>

                    <p className="mt-2 text-lg text-[var(--primary)]">
                      {item.organization}
                    </p>

                    <p className="mt-6 leading-8 text-[var(--text-light)]">
                      {item.description}
                    </p>

                    <div className="mt-8 flex flex-wrap gap-3">

                      {item.highlights.map((highlight) => (

                        <span
                          key={highlight}
                          className="
                            rounded-full
                            bg-[var(--surface-alt)]
                            px-4
                            py-2
                            text-sm
                            font-medium
                            text-[var(--text-dark)]
                          "
                        >
                          {highlight}
                        </span>

                      ))}

                    </div>

                  </div>

                </div>

              </Reveal>

            ))}

          </div>

        </div>

      </div>
    </section>
  );
}