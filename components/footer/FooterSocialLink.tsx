"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface FooterSocialLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

export default function FooterSocialLink({
  href,
  icon,
  label,
}: FooterSocialLinkProps) {
  return (
    <Link
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      className="
        group
        flex
        items-center
        gap-3
        text-white/60
        transition-all
        duration-300
        hover:text-white
      "
    >
      <span className="text-base">
        {icon}
      </span>

      <span>{label}</span>

      <ArrowUpRight
        size={14}
        className="
          ml-auto
          opacity-0
          transition-all
          duration-300
          group-hover:-translate-y-1
          group-hover:translate-x-1
          group-hover:opacity-100
        "
      />
    </Link>
  );
}