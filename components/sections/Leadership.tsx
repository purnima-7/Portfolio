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
      className="relative overflow-hidden pt-32 pb-24"
      style={{
        background:
          "linear-gradient(180deg,#3E3942 0%, #35313A 45%, #2F2B33 100%)",
      }}
    >
      {/* Background Glow */}

      <div
        className="pointer-events-none absolute -left-32 top-0 h-[520px] w-[520px] rounded-full blur-[150px]"
        style={{
          background: "var(--experience-accent-soft)",
          opacity: 0.08,
        }}
      />

      <div
        className="pointer-events-none absolute right-0 bottom-0 h-[420px] w-[420px] rounded-full blur-[130px]"
        style={{
          background: "var(--experience-accent)",
          opacity: 0.06,
        }}
      />

      <div className="container relative z-10">

        {/* Header */}

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
                background: "#D7D2D8",
                borderColor: "rgba(255,255,255,.08)",
                color: "var(--experience-accent)",
              }}
            >
              Leadership
            </span>

            <h2
              className="
                mt-7
                text-4xl
                font-bold
                tracking-tight
                md:text-5xl
              "
              style={{
                color: "#F8F7F8",
              }}
            >
              Leading teams while
              <br />
              continuing to build as an engineer
            </h2>

            <p
              className="
                mx-auto
                mt-7
                max-w-2xl
                text-lg
                leading-8
              "
              style={{
                color: "#D7D2D8",
              }}
            >
              Beyond writing code, I&apos;ve enjoyed organizing communities,
              mentoring teammates and delivering events that required
              ownership, communication and collaboration.
            </p>

          </div>
        </Reveal>

        {/* Cards */}

        <div className="mt-24 grid gap-8 lg:grid-cols-2">

          {leadership.map((item, index) => (
            <Reveal
              key={item.organization}
              delay={index * 0.12}
            >
              <div
                className="
                  group
                  relative
                  h-full
                  overflow-hidden
                  rounded-[34px]
                  border
                  p-10
                  backdrop-blur-xl
                  transition-all
                  duration-500
                  hover:-translate-y-2
                "
                style={{
                  background: "#d7d2d8",
                  borderColor: "rgba(255,255,255,.08)",
                }}
              >

                {/* Accent Line */}

                <div
                  className="absolute left-0 top-0 h-full w-[3px]"
                  style={{
                    background: "var(--experience-accent)",
                  }}
                />

                <div className="relative flex items-start justify-between gap-8">

                  <div>

                    <p
                      className="
                        text-xs
                        font-semibold
                        uppercase
                        tracking-[0.35em]
                      "
                      style={{
                        color: "var(--experience-accent)",
                      }}
                    >
                      {item.period}
                    </p>

                    <h3
                      className="
                        mt-5
                        text-3xl
                        font-bold
                      "
                      style={{
                        color: "var(--experience-accent)",
                      }}
                    >
                      {item.role}
                    </h3>

                    <p
                      className="mt-3 text-lg"
                      style={{
                        color: "var(--experience-accent)",
                      }}
                    >
                      {item.organization}
                    </p>

                  </div>

                  <div
                    className="
                      rounded-full
                      border
                      px-5
                      py-3
                      text-sm
                      font-semibold
                      whitespace-nowrap
                    "
                    style={{
                      background: "var(--experience-accent)",
                      borderColor: "rgba(196,207,223,.12)",
                      color: "#d7d2d8",
                    }}
                  >
                    {item.impact}
                  </div>

                </div>

                <p
                  className="
                    relative
                    mt-9
                    leading-8
                  "
                  style={{
                    color: "var(--experience-accent)",
                  }}
                >
                  {item.description}
                </p>

                <div
                  className="my-10 h-px"
                  style={{
                    background: "var(--experience-accent)",
                  }}
                />

                <div className="space-y-5">

                  {item.points.map((point) => (
                    <div
                      key={point}
                      className="flex items-start gap-4"
                    >
                      <div
                        className="
                          mt-2.5
                          h-2.5
                          w-2.5
                          shrink-0
                          rounded-full
                        "
                        style={{
                          background: "var(--experience-accent)",
                        }}
                      />

                      <p
                        className="leading-7"
                        style={{
                          color: "var(--experience-accent)",
                        }}
                      >
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