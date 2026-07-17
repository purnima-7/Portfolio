"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

import { navigation } from "@/data/navigation";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-[var(--navy)] text-white">

      {/* Top Border */}

      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="container py-20">

        {/* CTA */}

        <div className="flex flex-col items-start justify-between gap-12 border-b border-white/10 pb-16 lg:flex-row lg:items-end">

          <div>

            <p className="eyebrow">
              LET&apos;S CONNECT
            </p>

            <h2 className="mt-6 max-w-3xl text-5xl font-black leading-tight tracking-[-0.04em]">
              Interested in building
              <br />
              something together?
            </h2>

          </div>

          <Link
            href="mailto:your.email@gmail.com"
            className="
              inline-flex
              items-center
              gap-3
              rounded-full
              bg-[var(--primary)]
              px-7
              py-4
              font-medium
              transition-all
              duration-300
              hover:scale-105
            "
          >
            Say Hello
            <ArrowUpRight size={18} />
          </Link>

        </div>

        {/* Middle */}

        <div className="grid gap-14 py-16 md:grid-cols-3">

          {/* Brand */}

          <div>

            <h3 className="text-4xl font-black">
              P.
            </h3>

            <p className="mt-6 max-w-sm leading-8 text-white/65">
              Software Engineer passionate about
              building scalable web applications,
              AI-powered products and reliable
              digital experiences.
            </p>

          </div>

          {/* Navigation */}

          <div>

            <h4 className="mb-6 text-sm font-semibold uppercase tracking-[0.3em] text-[var(--primary)]">
              Navigation
            </h4>

            <div className="space-y-4">

              {navigation.map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  className="
                    block
                    text-white/70
                    transition-colors
                    hover:text-white
                  "
                >
                  {item.label}
                </Link>
              ))}

            </div>

          </div>

          {/* Social */}

          <div>

            <h4 className="mb-6 text-sm font-semibold uppercase tracking-[0.3em] text-[var(--primary)]">
              Connect
            </h4>

            <div className="space-y-5">

              <Link
                href="https://github.com/purnima-7"
                target="_blank"
                className="flex items-center gap-3 text-white/70 transition hover:text-white"
              >
                <FaGithub />
                GitHub
              </Link>

              <Link
                href="https://linkedin.com/in/YOUR-LINKEDIN"
                target="_blank"
                className="flex items-center gap-3 text-white/70 transition hover:text-white"
              >
                <FaLinkedin />
                LinkedIn
              </Link>

              <Link
                href="mailto:your.email@gmail.com"
                className="flex items-center gap-3 text-white/70 transition hover:text-white"
              >
                <FaEnvelope />
                Email
              </Link>

            </div>

          </div>

        </div>

        {/* Bottom */}

        <div className="flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 text-sm text-white/50 md:flex-row">

          <p>
            © {year} Purnima Singh. All rights reserved.
          </p>

          <div className="flex items-center gap-2">

            <span>Built with</span>

            <span className="font-semibold text-white">
              Next.js
            </span>

            <span>·</span>

            <span className="font-semibold text-white">
              Tailwind CSS
            </span>

            <span>·</span>

            <span className="font-semibold text-white">
              Framer Motion
            </span>

          </div>

          <Link
            href="#home"
            className="
              rounded-full
              border
              border-white/10
              px-5
              py-2
              transition-all
              duration-300
              hover:border-[var(--primary)]
              hover:text-white
            "
          >
            Back to Top ↑
          </Link>

        </div>

      </div>

    </footer>
  );
}