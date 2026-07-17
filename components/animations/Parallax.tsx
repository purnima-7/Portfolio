"use client";

import {
  motion,
  MotionValue,
  useScroll,
  useTransform,
} from "framer-motion";
import { ReactNode, RefObject } from "react";

interface ParallaxProps {
  children: ReactNode;
  offset?: number;
  className?: string;
  target?: RefObject<HTMLElement | null>;
}

export default function Parallax({
  children,
  offset = 120,
  className = "",
  target,
}: ParallaxProps) {
  const { scrollYProgress } = useScroll(
    target
      ? {
          target,
          offset: ["start end", "end start"],
        }
      : undefined
  );

  const y: MotionValue<number> = useTransform(
    scrollYProgress,
    [0, 1],
    [-offset, offset]
  );

  return (
    <motion.div
      style={{ y }}
      className={className}
    >
      {children}
    </motion.div>
  );
}