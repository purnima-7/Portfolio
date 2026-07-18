"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

import Reveal from "@/components/animations/Reveal";
import MagneticButton from "@/components/ui/MagneticButton";

export default function Contact() {
  return (
    <section
      id="contact"
      className="
        relative
        overflow-hidden
        bg-[var(--navy)]
        pt-32
        pb-12
        text-white
      "
    >
      {/* Background Glow */}

      <div
        className="
          absolute
          left-1/2
          top-20
          h-[420px]
          w-[420px]
          -translate-x-1/2
          rounded-full
          bg-[var(--mauve)]
          opacity-10
          blur-[120px]
        "
      />

      <div className="container relative z-10 max-w-5xl">

        <Reveal>

          <div className="text-center">

            <span
            className="
              inline-flex
              rounded-full
              bg-[var(--pink)]
              px-4
              py-2
              text-sm
              font-semibold
              text-[var(--prune)]
            "
          >
            LET&apos;S CONNECT
          </span>

            <h2
              className="
                mt-6
                text-5xl
                font-black
                leading-[1.05]
                tracking-tight
                lg:text-7xl
              "
            >
              Ready to build
              <br />
              something meaningful?
            </h2>

            <p
              className="
                mx-auto
                mt-8
                max-w-2xl
                text-lg
                leading-9
                text-white/70
              "
            >
              I&apos;m currently looking for Software Engineering,
              Full-Stack and AI/ML internship opportunities.
              If you think we&apos;d be a great fit, I&apos;d love to
              hear from you.
            </p>

          </div>

        </Reveal>

        {/* CTA */}

        <Reveal delay={0.15}>

          <div className="mt-16 flex flex-col items-center">

            <MagneticButton
              href="mailto:purnimasingh1519@gmail.com"
              primary
            >
              <span className="flex items-center gap-3">
                Say Hello
                <ArrowUpRight size={18} />
              </span>
            </MagneticButton>

            <Link
              href="/Purnima_Singh.pdf"
              target="_blank"
              className="
                mt-6
                inline-flex
                items-center
                gap-2
                text-lg
                font-medium
                text-white/70
                transition-all
                hover:text-white
              "
            >
              Download Resume

              <ArrowUpRight size={18} />
            </Link>

          </div>

        </Reveal>

        {/* Social */}

        <Reveal delay={0.25}>

          <div
            className="
              mt-16
              flex
              flex-wrap
              justify-center
              gap-10
              border-t
              border-white/10
              pt-10
            "
          >

            <Link
              href="https://github.com/purnima-7"
              target="_blank"
              className="
                group
                flex
                items-center
                gap-3
                text-white/60
                transition
                hover:text-white
              "
            >
              <FaGithub />

              GitHub

              <ArrowUpRight
                size={14}
                className="
                  opacity-0
                  transition-all
                  duration-300
                  group-hover:translate-x-1
                  group-hover:-translate-y-1
                  group-hover:opacity-100
                "
              />
            </Link>

            <Link
              href="https://www.linkedin.com/in/purnimasingh07/"
              target="_blank"
              className="
                group
                flex
                items-center
                gap-3
                text-white/60
                transition
                hover:text-white
              "
            >
              <FaLinkedin />

              LinkedIn

              <ArrowUpRight
                size={14}
                className="
                  opacity-0
                  transition-all
                  duration-300
                  group-hover:translate-x-1
                  group-hover:-translate-y-1
                  group-hover:opacity-100
                "
              />
            </Link>

            <Link
              href="mailto:purnimasingh1519@gmail.com"
              className="
                group
                flex
                items-center
                gap-3
                text-white/60
                transition
                hover:text-white
              "
            >
              <FaEnvelope />

              Email

              <ArrowUpRight
                size={14}
                className="
                  opacity-0
                  transition-all
                  duration-300
                  group-hover:translate-x-1
                  group-hover:-translate-y-1
                  group-hover:opacity-100
                "
              />
            </Link>

          </div>

        </Reveal>

      </div>

    </section>
  );
}