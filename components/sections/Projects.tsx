"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";

import Reveal from "@/components/animations/Reveal";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section
      id="projects"
      className="section dark-section"
    >
      <div className="container">

        <Reveal>
          <p className="eyebrow">
            Selected Projects
          </p>

          <h2 className="heading-lg mt-6 max-w-4xl">
            More things I&apos;ve built.
          </h2>

          <p className="copy mt-8">
            Beyond my featured work, these projects reflect my
            interest in building scalable web applications,
            AI-powered solutions and developer-focused tools.
          </p>
        </Reveal>

        <div className="mt-24 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {projects.map((project, index) => (

            <Reveal
              key={project.title}
              delay={index * 0.08}
            >

              <div
                className="
                  group
                  flex
                  h-full
                  flex-col
                  rounded-[28px]
                  border
                  border-white/10
                  bg-white/5
                  p-8
                  backdrop-blur-xl
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:border-[var(--primary)]
                "
              >

                <span
                  className="
                    text-xs
                    uppercase
                    tracking-[0.3em]
                    text-[var(--primary)]
                  "
                >
                  {project.category}
                </span>

                <h3 className="mt-5 text-3xl font-bold">
                  {project.title}
                </h3>

                <p className="mt-5 flex-1 leading-8 text-[var(--text-muted)]">
                  {project.description}
                </p>

                <div className="mt-8 flex flex-wrap gap-2">

                  {project.tech.map((item) => (

                    <span
                      key={item}
                      className="
                        rounded-full
                        border
                        border-white/10
                        px-4
                        py-2
                        text-xs
                      "
                    >
                      {item}
                    </span>

                  ))}

                </div>

                <div className="mt-10 flex items-center gap-6">

                  {project.github && (

                    <Link
                      href={project.github}
                      target="_blank"
                      className="
                        flex
                        items-center
                        gap-2
                        text-sm
                        transition-opacity
                        hover:opacity-70
                      "
                    >
                      <FaGithub />
                      GitHub
                    </Link>

                  )}

                  {project.demo && (

                    <Link
                      href={project.demo}
                      target="_blank"
                      className="
                        flex
                        items-center
                        gap-2
                        text-sm
                        transition-opacity
                        hover:opacity-70
                      "
                    >
                      Live Demo
                      <ArrowUpRight size={16} />
                    </Link>

                  )}

                </div>

              </div>

            </Reveal>

          ))}

        </div>

      </div>
    </section>
  );
}