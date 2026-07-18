"use client";

import { motion } from "framer-motion";
import { Code2 } from "lucide-react";

interface TechStackProps {
  technologies: string[];
}

export default function TechStack({
  technologies,
}: TechStackProps) {
  return (
    <div>

      {/* Heading */}

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
          Technologies
        </h4>

      </div>

      {/* Tech Grid */}

      <div className="mt-7 flex flex-wrap gap-3">

        {technologies.map((tech, index) => (
          <motion.div
            key={tech}
            initial={{
              opacity: 0,
              y: 10,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              delay: index * 0.05,
            }}
            whileHover={{
              y: -2,
              scale: 1.03,
            }}
            className="
              group
              flex
              items-center
              gap-2.5
              rounded-full
              border
              px-4
              py-2.5
              transition-all
              duration-300
            "
            style={{
              background: "var(--experience-chip)",
              borderColor: "var(--experience-border)",
            }}
          >
            <Code2
              size={15}
              className="transition-transform duration-300 group-hover:rotate-6"
              color="var(--experience-accent)"
            />

            <span
              className="
                text-sm
                font-medium
              "
              style={{
                color: "var(--experience-heading)",
              }}
            >
              {tech}
            </span>
          </motion.div>
        ))}

      </div>

    </div>
  );
}