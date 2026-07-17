"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

import TimelineNode from "./TimelineNode";

import { Experience } from "@/data/experience";

interface TimelineProps {
  experiences: Experience[];
  activeIndex: number;
  onSelect: (index: number) => void;
}

export default function Timeline({
  experiences,
  activeIndex,
  onSelect,
}: TimelineProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Automatically center active node
  useEffect(() => {
    const container = scrollRef.current;

    if (!container) return;

    const activeNode =
      container.querySelector(
        `[data-index="${activeIndex}"]`
      ) as HTMLElement;

    activeNode?.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  }, [activeIndex]);

  return (
    <div className="relative w-full">

      {/* Left Fade */}

      <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-20 bg-gradient-to-r from-[var(--background)] to-transparent" />

      {/* Right Fade */}

      <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-20 bg-gradient-to-l from-[var(--background)] to-transparent" />

      {/* Scroll Area */}

      <div
        ref={scrollRef}
        className="
          relative
          overflow-x-auto
          scrollbar-hide
          snap-x
          snap-mandatory
          px-12
          pt-12
          pb-20
          touch-pan-x
          overscroll-x-contain
          [-webkit-overflow-scrolling:touch]
        "
      >

        {/* Timeline Container */}

        <div
          className="
            relative
            flex
            min-w-max
            items-start
            justify-start
            gap-36
            px-20
          "
        >

          {/* Base Timeline */}

          <div
            className="
              absolute
              left-0
              right-0
              top-6
              h-[2px]
              bg-[var(--border)]
            "
          />

          {/* Timeline Nodes */}

{experiences.map((experience, index) => (
  <div
    key={experience.role}
    data-index={index}
    className="
      relative
      z-10
      flex
      snap-center
      justify-center
    "
  >
    <TimelineNode
      year={experience.year}
      organization={experience.organization}
      active={activeIndex === index}
      onClick={() => onSelect(index)}
    />
  </div>
))}

        </div>

      </div>

    </div>
  );
}