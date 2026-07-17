"use client";

import { motion } from "framer-motion";

interface Metric {
  label: string;
  value: string;
}

interface MetricsProps {
  metrics: Metric[];
}

export default function Metrics({ metrics }: MetricsProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-4"
    >
      {metrics.map((metric, index) => (
        <motion.div
          key={metric.label}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            delay: index * 0.1,
            duration: 0.4,
          }}
          whileHover={{
            y: -4,
          }}
          className="
            rounded-3xl
            border
            border-black/10
            bg-white
            p-6
            shadow-sm
          "
        >
          <h3 className="text-4xl font-bold text-[#111]">
            {metric.value}
          </h3>

          <p className="mt-2 text-sm uppercase tracking-[0.18em] text-zinc-500">
            {metric.label}
          </p>
        </motion.div>
      ))}
    </motion.div>
  );
}