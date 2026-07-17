"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

import Reveal from "@/components/animations/Reveal";
import MagneticButton from "@/components/ui/MagneticButton";

export default function Contact() {
  return (
    <section
      id="contact"
      className="section dark-section"
    >
      <div className="container">

        <Reveal>

          <p className="eyebrow">
            Contact
          </p>

          <h2 className="heading-lg mt-6 max-w-4xl">
            Let&apos;s build something meaningful together.
          </h2>

          <p className="copy mt-8 max-w-2xl">
            I&apos;m currently looking for Software Engineering,
            Full-Stack and AI/ML internship opportunities.
            If you think we&apos;d be a good fit, I&apos;d love to hear
            from you.
          </p>

        </Reveal>

        <Reveal delay={0.2}>

          <div
            className="
              mt-20
              rounded-[32px]
              border
              border-white/10
              bg-white/5
              p-10
              backdrop-blur-xl
            "
          >

            <div className="flex flex-wrap gap-5">

              <MagneticButton href="mailto:purnimasingh1519@gmail.com" primary>
                <span className="flex items-center gap-3">
                  <FaEnvelope />
                  Email Me
                </span>
              </MagneticButton>

              <MagneticButton href="https://github.com/purnima-7">
                <span className="flex items-center gap-3">
                  <FaGithub />
                  GitHub
                </span>
              </MagneticButton>

              <MagneticButton href="https://www.linkedin.com/in/purnimasingh07/">
                <span className="flex items-center gap-3">
                  <FaLinkedin />
                  LinkedIn
                </span>
              </MagneticButton>

            </div>

            <div className="mt-14 border-t border-white/10 pt-10">

              <Link
                href="mailto:purnimasingh1519@gmail.com"
                className="
                  flex
                  items-center
                  gap-3
                  text-3xl
                  font-bold
                  transition-opacity
                  hover:opacity-70
                "
              >
                purnimasingh1519@gmail.com
                <ArrowUpRight size={24} />
              </Link>

            </div>

          </div>

        </Reveal>

      </div>
    </section>
  );
}