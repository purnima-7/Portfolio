"use client";

import TimelineNode from "./TimelineNode";

export default function Timeline() {
  return (
    <div
      className="
        relative
        flex
        justify-center
        lg:justify-start
      "
    >
      <div
        className="
          relative
          flex
          flex-col
          items-center
        "
      >
        {/* Node */}

        <TimelineNode active />

        {/* Vertical Line */}

        <div
          className="mt-3 w-px rounded-full"
          style={{
            height: "360px",
            background:
              "linear-gradient(to bottom, var(--experience-accent), var(--experience-border))",
          }}
        />

        {/* End Dot */}

        <div
          className="mt-2 h-2 w-2 rounded-full"
          style={{
            background: "var(--experience-border)",
          }}
        />
      </div>
    </div>
  );
}