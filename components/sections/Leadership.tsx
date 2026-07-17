"use client";

import Reveal from "@/components/animations/Reveal";

const leadership = [
  {
    organization: "Parola — The Literary Hub",
    role: "Delegate Affairs Head",
    period: "Aug 2025 — May 2026",
    impact: "200+ Delegates Managed",
    description:
      "Led delegate operations for one of the university's largest literary events by coordinating registrations, communication and on-ground execution while ensuring a smooth participant experience.",
    points: [
      "Managed delegate operations from registration to event execution.",
      "Coordinated volunteers across multiple event teams.",
      "Improved communication workflows and participant support.",
    ],
  },
  {
    organization: "AI/ML HUB",
    role: "Technical Team Member",
    period: "May 2024 — May 2025",
    impact: "AI & Computer Vision Projects",
    description:
      "Worked alongside students on machine learning and computer vision initiatives, contributing to technical discussions, experimentation and prototype development.",
    points: [
      "Built AI-powered prototypes.",
      "Worked with OpenCV and TensorFlow.",
      "Collaborated on research-oriented development.",
    ],
  },
];

export default function Leadership() {
  return (
    <section
      id="leadership"
      className="section bg-[var(--navy)] text-white"
    >
      <div className="container">

        <Reveal>
          <p className="eyebrow">
            LEADERSHIP
          </p>

          <h2 className="heading-lg mt-6 max-w-4xl text-white">
            Leading teams while continuing
            to build as an engineer.
          </h2>

          <p className="copy mt-8 max-w-2xl text-white/70">
            Beyond writing code, I&apos;ve enjoyed organizing
            communities, mentoring teammates and delivering
            events that required ownership, communication and
            collaboration.
          </p>
        </Reveal>

        <div className="mt-24 grid gap-8 lg:grid-cols-2">

          {leadership.map((item, index) => (

            <Reveal
              key={item.organization}
              delay={index * 0.12}
            >

              <div
                className="
                  group
                  h-full
                  rounded-[34px]
                  border
                  border-white/10
                  bg-white/5
                  p-10
                  backdrop-blur-xl
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:border-[var(--primary)]
                "
              >

                <div className="flex items-center justify-between">

                  <div>

                    <p className="text-sm uppercase tracking-[0.3em] text-[var(--primary)]">
                      {item.period}
                    </p>

                    <h3 className="mt-4 text-3xl font-bold">
                      {item.role}
                    </h3>

                    <p className="mt-2 text-lg text-white/70">
                      {item.organization}
                    </p>

                  </div>

                  <div
                    className="
                      rounded-full
                      border
                      border-white/10
                      px-5
                      py-3
                      text-sm
                      font-semibold
                      text-[var(--primary)]
                    "
                  >
                    {item.impact}
                  </div>

                </div>

                <p className="mt-8 leading-8 text-white/70">
                  {item.description}
                </p>

                <div className="mt-10 space-y-4">

                  {item.points.map((point) => (

                    <div
                      key={point}
                      className="flex items-start gap-4"
                    >

                      <div
                        className="
                          mt-2
                          h-2
                          w-2
                          rounded-full
                          bg-[var(--primary)]
                        "
                      />

                      <p className="text-white/80">
                        {point}
                      </p>

                    </div>

                  ))}

                </div>

              </div>

            </Reveal>

          ))}

        </div>

      </div>
    </section>
  );
}