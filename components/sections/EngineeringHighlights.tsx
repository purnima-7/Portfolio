"use client";

import { motion } from "framer-motion";

import EngineeringHighlight from "@/components/project/EngineeringHighlight";
import { engineeringhighlights } from "@/data/EngineeringHighlights";

export default function EngineeringHighlights() {
  return (
    <section
      id="engineering-highlights"
      className="bg-[#FCF5F4] rounded-t-[48px] pt-32 pb-20"
    >
      <div className="container mx-auto px-6 lg:px-20">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center pb-30"
        >
          <div className="flex justify-center">
          <span
                      className="
                        inline-flex
                        rounded-full
                        bg-[var(--pink)]
                        px-4
                        py-2
                        text-sm
                        font-semibold
                        text-[var(--prune)]
                      "
                    >
                      HIGHLIGHTS
                    </span>
                    </div>
          
                    <h2 className="mt-6 text-4xl font-bold tracking-tight text-[var(--text-dark)] md:text-5xl">
                      Engineering projects built for real world impact
                    </h2>
          
                    <p className="mt-6 text-lg leading-8 text-[var(--text-light)]">
                      A collection of projects spanning computer vision,
                      artificial intelligence and full-stack development,
                      with an emphasis on thoughtful engineering,
                      scalability and user experience.
                    </p>
        </motion.div>

        {/* Highlights */}

        <div className="mt-28 space-y-44">
          {engineeringhighlights.map((project, index) => (
            <EngineeringHighlight
              key={project.title}
              project={project}
              reverse={index % 2 !== 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}