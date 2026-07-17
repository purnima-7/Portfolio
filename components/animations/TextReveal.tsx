"use client";

import { motion } from "framer-motion";

interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
}

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.045,
    },
  },
};

const word = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 1, 0.5, 1] as const,
    },
  },
};

export default function TextReveal({
  text,
  className = "",
  delay = 0,
}: TextRevealProps) {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.3,
      }}
      transition={{
        delay,
      }}
      className={className}
    >
      {text.split(" ").map((item, index) => (
        <span
          key={index}
          className="inline-block overflow-hidden mr-[0.25em]"
        >
          <motion.span
            variants={word}
            className="inline-block"
          >
            {item}
          </motion.span>
        </span>
      ))}
    </motion.div>
  );
}