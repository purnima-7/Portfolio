"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface FooterNavLinkProps {
  href: string;
  children: React.ReactNode;
}

export default function FooterNavLink({
  href,
  children,
}: FooterNavLinkProps) {
  return (
    <Link
      href={href}
      className="
        group
        inline-flex
        items-center
        gap-2
        text-white/60
        transition-all
        duration-300
        hover:text-white
      "
    >
      <span>{children}</span>

      <ArrowUpRight
        size={14}
        className="
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