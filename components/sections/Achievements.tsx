"use client";

import Reveal from "@/components/animations/Reveal";
import { ArrowUpRight } from "lucide-react";

const achievements = [
  {
    title: "Flipkart GRID",
    subtitle: "Software Development Track",
    badge: "Semi Finalist",
    certificate:
      "https://drive.google.com/file/d/1Po3WBIRw-b_3s13ymQnUEv-Ip8uX9psv/view",
  },
  {
    title: "Adobe India Hackathon",
    subtitle: "National Level Hackathon",
    badge: "Participant",
    certificate:
      "https://drive.google.com/file/d/185V2WEN9n7XcwGka45WRXUm055uIPFCY/view",
  },
  {
    title: "Deloitte Technology Job Simulation",
    subtitle: "Forage",
    badge: "Completed",
    certificate:
      "https://drive.google.com/file/d/142lENsIj_xXftwUUA-s_AHvKLciclPj1/view",
  },
];

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="section bg-[var(--blush)] text-[var(--text-dark)] py-32"
    >
      <div className="container max-w-5xl">

        {/* Heading */}

<Reveal>
  <div className="mx-auto max-w-3xl text-center">

    <span
            className="
              inline-flex
              rounded-full
              bg-[var(--experience-accent)]
              px-4
              py-2
              text-sm
              font-semibold
              text-[var(--pink)]
            "
          >
      ACHIEVEMENTS
    </span>

    <h2
      className="
        mt-4
        text-5xl
        font-bold
        tracking-tight
        text-[var(--experience-accent)]
        lg:text-6xl
      "
    >
      Beyond the Classroom
    </h2>

    <p
      className="
        mx-auto
        mt-5
        max-w-xl
        text-lg
        leading-8
        text-[var(--experience-text)]
      "
    >
      Hackathons, competitions & certifications.
    </p>

  </div>
</Reveal>

        {/* List */}

        <div className="mt-14">

          {achievements.map((item, index) => (

            <Reveal
              key={item.title}
              delay={index * 0.08}
            >

              <a
                href={item.certificate}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group
                  relative
                  flex
                  items-center
                  justify-between
                  gap-8
                  border-b
                  border-[var(--border-light)]
                  py-7
                  transition-all
                  duration-300
                  hover:bg-[var(--surface-alt)]
                  hover:px-6
                "
              >

                {/* Accent */}

                <div
                  className="
                    absolute
                    left-0
                    top-0
                    h-full
                    w-1
                    origin-center
                    scale-y-0
                    rounded-full
                    bg-[var(--experience-accent)]
                    transition-transform
                    duration-300
                    group-hover:scale-y-100
                  "
                />

                {/* Left */}

                <div>

                  <div className="flex items-center gap-3">

                    <h3
                      className="
                        text-2xl
                        font-bold
                        transition-colors
                        text-[var(--mauve)]
                        group-hover:text-[var(--primary)]
                      "
                    >
                      {item.title}
                    </h3>

                    <ArrowUpRight
                      size={18}
                      className="
                        transition-transform
                        duration-300
                        group-hover:-translate-y-1
                        group-hover:translate-x-1
                      "
                    />

                  </div>

                  <p className="mt-1 text-[var(--text-light)]">
                    {item.subtitle}
                  </p>

                </div>

                {/* Right */}

                <div className="flex items-center gap-4">

                  <span
                    className="
                      rounded-full
                      bg-[var(--mauve)]
                      px-4
                      py-2
                      text-sm
                      font-semibold
                      text-[var(--surface-alt)]
                    "
                  >
                    {item.badge}
                  </span>

                </div>

              </a>

            </Reveal>

          ))}

        </div>

      </div>
    </section>
  );
}