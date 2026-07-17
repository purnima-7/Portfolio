"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";

import BrowserWindow from "@/components/ui/BrowserWindow";
import Parallax from "@/components/animations/Parallax";

interface Metric {
  value: string;
  label: string;
}

interface FeaturedProject {
  category: string;
  title: string;
  description: string;
  github?: string;
  demo?: string;
  tech: string[];
  metrics: Metric[];
  images: string[];
}

interface EngineeringHighlightProps {
  project: FeaturedProject;
  reverse?: boolean;
}

export default function EngineeringHighlight({
  project,
  reverse = false,
}: EngineeringHighlightProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.7 }}
      className={`grid gap-20 items-start lg:grid-cols-2 ${
        reverse ? "lg:[&>*:first-child]:order-2" : ""
      }`}
    >
      {/* LEFT */}

      <div className="lg:sticky lg:top-28">
        <p className="eyebrow">{project.category}</p>

        <h2 className="mt-5 text-5xl font-black text-[var(--text-dark)] md:text-6xl">
          {project.title}
        </h2>

        <p className="mt-8 max-w-xl text-lg leading-9 text-[var(--text-light)]">
          {project.description}
        </p>

        {/* Buttons */}

        <div className="mt-10 flex flex-wrap gap-4 ">
          {project.github && (
            <Link
              href={project.github}
              target="_blank"
              className="inline-flex items-center gap-2 rounded-full border border-[var(--border-light)] bg-[var(--prune)] px-6 py-3 transition hover:bg-[var(--navy)] hover:text-white"
            >
              <FaGithub size={18} />
              GitHub
            </Link>
          )}

          {project.demo && (
            <Link
              href={project.demo}
              target="_blank"
              className="inline-flex items-center gap-2 rounded-full border border-[var(--border-light)] bg-[var(--prune)] px-6 py-3 transition hover:bg-[var(--navy)] hover:text-white"
            >
              Live Demo
              <ArrowUpRight size={18} />
            </Link>
          )}
        </div>

        {/* Tech */}

        <div className="mt-12 flex flex-wrap gap-3">
          {project.tech.map((item) => (
            <span
              key={item}
              className="rounded-full border border-[var(--border-light)] bg-white px-4 py-2 text-sm font-medium text-[var(--text-dark)] shadow-sm"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Metrics */}

        <div className="mt-14 grid grid-cols-3 gap-5">
          {project.metrics.map((metric) => (
            <div
              key={metric.label}
              className="rounded-3xl border border-[var(--border-light)] bg-white p-6 shadow-sm"
            >
              <h3 className="text-4xl font-black text-[var(--prune)]">
                {metric.value}
              </h3>

              <p className="mt-2 text-xs uppercase tracking-[0.28em] text-[var(--prune)]">
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT */}

      <div className="space-y-10">
        {project.images.map((image, index) => (
          <Parallax
            key={image}
            offset={120 - index * 25}
          >
            <BrowserWindow
                title={`${project.title} ${index + 1}`}
            >
                <Image
                    src={image}
                    alt={`${project.title} Screenshot ${index + 1}`}
                    width={1600}
                    height={900}
                    className="w-full object-cover"
                />
            </BrowserWindow>
          </Parallax>
        ))}
      </div>
    </motion.div>
  );
}