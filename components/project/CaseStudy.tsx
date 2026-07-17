"use client";

import { motion } from "framer-motion";

import ProjectHeader from "./ProjectHeader";
import TechStack from "./TechStack";
import Metrics from "./Metrics";
import ProjectGallery from "./ProjectGallery";

interface Metric {
  label: string;
  value: string;
}

interface CaseStudyProps {
  category: string;
  title: string;
  description: string;

  github?: string;
  demo?: string;

  tech: string[];
  metrics: Metric[];
  gallery: string[];

  reverse?: boolean;
}

export default function CaseStudy({
  category,
  title,
  description,
  github,
  demo,
  tech,
  metrics,
  gallery,
  reverse = false,
}: CaseStudyProps) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className="py-32"
    >
      <div className="container">
        <div
          className={`grid items-start gap-20 lg:grid-cols-2 ${
            reverse ? "lg:[&>*:first-child]:order-2" : ""
          }`}
        >
          {/* Left */}

          <div className="sticky top-32">
            <ProjectHeader
              category={category}
              title={title}
              description={description}
              github={github}
              demo={demo}
            />

            <TechStack tech={tech} />

            <Metrics metrics={metrics} />
          </div>

          {/* Right */}

          <ProjectGallery images={gallery} />
        </div>
      </div>
    </motion.section>
  );
}