"use client";

import Reveal from "@/components/animations/Reveal";

const skills = [
  {
    title: "Languages",
    items: [
      "C++",
      "Python",
      "JavaScript",
      "TypeScript",
      "SQL",
    ],
  },
  {
    title: "Frontend",
    items: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "HTML",
      "CSS",
      "Framer Motion",
    ],
  },
  {
    title: "Backend",
    items: [
      "Node.js",
      "Express",
      "REST APIs",
      "JWT",
      "MongoDB",
      "PostgreSQL",
    ],
  },
  {
    title: "AI & Core CS",
    items: [
      "OpenCV",
      "TensorFlow",
      "Scikit-Learn",
      "Feature Engineering",
      "Data Structures",
      "OOP",
      "DBMS",
      "Operating Systems",
      "Computer Networks",
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="section bg-white text-[var(--text-dark)]"
    >
      <div className="container">

        <Reveal>

          <p className="eyebrow">
            SKILLS
          </p>

          <h2 className="heading-lg mt-6 max-w-3xl">
            Technologies I use to build reliable software.
          </h2>

          <p className="copy mt-8">
            My focus isn&apos;t on collecting technologies—it&apos;s on
            understanding them deeply enough to build scalable,
            maintainable and efficient systems.
          </p>

        </Reveal>

        <div className="mt-20 grid gap-8 lg:grid-cols-2">

          {skills.map((category, index) => (

            <Reveal
              key={category.title}
              delay={index * 0.08}
            >

              <div
                className="
                  h-full
                  rounded-[32px]
                  border
                  border-[var(--border-light)]
                  bg-[var(--surface-alt)]
                  p-8
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:shadow-xl
                "
              >

                <h3 className="text-2xl font-bold">
                  {category.title}
                </h3>

                <div className="mt-8 flex flex-wrap gap-3">

                  {category.items.map((skill) => (

                    <span
                      key={skill}
                      className="
                        rounded-full
                        border
                        border-[var(--border-light)]
                        bg-white
                        px-4
                        py-2
                        text-sm
                        font-medium
                        transition-all
                        duration-300
                        hover:border-[var(--primary)]
                        hover:bg-[var(--primary)]
                        hover:text-white
                      "
                    >
                      {skill}
                    </span>

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