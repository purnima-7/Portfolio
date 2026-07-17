"use client";

import Reveal from "@/components/animations/Reveal";

const achievements = [
  {
    year: "2025",
    title: "Flipkart GRID",
    subtitle: "Software Development Track",
    description:
      "Qualified for the Semi-Finals by developing scalable solutions and solving real-world engineering challenges.",
    badge: "Semi Finalist",
  },
  {
    year: "2025",
    title: "Adobe India Hackathon",
    subtitle: "National Level Hackathon",
    description:
      "Collaborated on innovative product ideas, rapid prototyping and technical problem solving under strict timelines.",
    badge: "Participant",
  },
  {
    year: "2025",
    title: "Deloitte Technology Job Simulation",
    subtitle: "Forage",
    description:
      "Completed practical software engineering tasks involving system design, development workflows and technical documentation.",
    badge: "Completed",
  },
];

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="section bg-white text-[var(--text-dark)]"
    >
      <div className="container">

        <Reveal>

          <p className="eyebrow">
            ACHIEVEMENTS
          </p>

          <h2 className="heading-lg mt-6 max-w-4xl">
            Milestones that reflect my
            growth as an engineer.
          </h2>

          <p className="copy mt-8">
            Competitions, hackathons and technical programs
            have helped me strengthen problem-solving,
            collaboration and software engineering skills.
          </p>

        </Reveal>

        <div className="mt-24 space-y-8">

          {achievements.map((item, index) => (

            <Reveal
              key={item.title}
              delay={index * 0.1}
            >

              <div
                className="
                  grid
                  gap-10
                  rounded-[32px]
                  border
                  border-[var(--border-light)]
                  bg-[var(--surface-alt)]
                  p-10
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-xl
                  lg:grid-cols-[120px_1fr_auto]
                "
              >

                {/* Year */}

                <div>

                  <p
                    className="
                      text-5xl
                      font-black
                      tracking-tight
                      text-[var(--primary)]
                    "
                  >
                    {item.year}
                  </p>

                </div>

                {/* Content */}

                <div>

                  <h3 className="text-3xl font-bold">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-lg text-[var(--primary)]">
                    {item.subtitle}
                  </p>

                  <p className="mt-6 leading-8 text-[var(--text-light)]">
                    {item.description}
                  </p>

                </div>

                {/* Badge */}

                <div className="flex items-start lg:justify-end">

                  <span
                    className="
                      rounded-full
                      bg-[var(--primary)]
                      px-5
                      py-3
                      text-sm
                      font-semibold
                      text-white
                    "
                  >
                    {item.badge}
                  </span>

                </div>

              </div>

            </Reveal>

          ))}

        </div>

      </div>
    </section>
  );
}