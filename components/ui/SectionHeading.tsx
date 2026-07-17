"use client";

import Reveal from "@/components/animations/Reveal";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const alignment =
    align === "center"
      ? "mx-auto text-center"
      : "text-left";

  return (
    <Reveal className={`max-w-4xl ${alignment}`}>
      <p className="eyebrow">{eyebrow}</p>

      <h2 className="heading-lg mt-6">
        {title}
      </h2>

      {description && (
        <p className="copy mt-8">
          {description}
        </p>
      )}
    </Reveal>
  );
}