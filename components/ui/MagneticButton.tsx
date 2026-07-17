"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import Link from "next/link";
import { ReactNode } from "react";

interface MagneticButtonProps {
  children: ReactNode;
  href?: string;
  primary?: boolean;
  className?: string;
}

export default function MagneticButton({
  children,
  href,
  primary = false,
  className = "",
}: MagneticButtonProps) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const x = useSpring(mouseX, {
    stiffness: 180,
    damping: 18,
  });

  const y = useSpring(mouseY, {
    stiffness: 180,
    damping: 18,
  });

  function handleMove(
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) {
    const rect = e.currentTarget.getBoundingClientRect();

    const offsetX =
      e.clientX - rect.left - rect.width / 2;

    const offsetY =
      e.clientY - rect.top - rect.height / 2;

    mouseX.set(offsetX * 0.18);

    mouseY.set(offsetY * 0.18);
  }

  function reset() {
    mouseX.set(0);
    mouseY.set(0);
  }

  const classes = `
        inline-flex
        items-center
        justify-center
        rounded-full
        px-8
        py-4
        text-sm
        font-medium
        transition-colors
        ${
          primary
            ? "bg-white text-black hover:bg-zinc-200"
            : "border border-white/10 bg-white/[0.02] text-white hover:bg-white/[0.05]"
        }
        ${className}
    `;

  return (
    <motion.div
      style={{
        x,
        y,
      }}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      whileTap={{ scale: 0.96 }}
    >
      {href ? (
        <Link href={href} className={classes}>
          {children}
        </Link>
      ) : (
        <button className={classes}>
          {children}
        </button>
      )}
    </motion.div>
  );
}