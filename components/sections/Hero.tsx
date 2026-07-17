"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import Reveal from "@/components/animations/Reveal";
import TextReveal from "@/components/animations/TextReveal";
import MagneticButton from "@/components/ui/MagneticButton";

export default function Hero() {
  return (
    <section
      id="home"
      className="
        relative
        overflow-hidden
        bg-[var(--navy)]
        pt-30
        pb-12
        text-white
      "
    >
      {/* Background */}

      <div className="absolute inset-0 overflow-hidden">

        {/* Top Glow */}

        <div
          className="
            absolute
            left-1/2
            top-[-260px]
            h-[760px]
            w-[760px]
            -translate-x-1/2
            rounded-full
            bg-[var(--primary)]
            opacity-[0.05]
            blur-[190px]
          "
        />

        {/* Portrait Glow */}

        <div
          className="
            absolute
            right-[5%]
            top-28
            h-[560px]
            w-[560px]
            rounded-full
            bg-[var(--primary)]
            opacity-[0.18]
            blur-[170px]
          "
        />

        {/* Light */}

        <div
          className="
            absolute
            right-0
            top-10
            h-[700px]
            w-[700px]
            rounded-full
            bg-gradient-to-br
            from-white/5
            via-transparent
            to-transparent
            blur-3xl
          "
        />

      </div>

      <div className="container relative z-10 mx-auto w-full max-w-[1250px] px-8 xl:px-10">

        <div
          className="
            grid
            items-end
            gap-4
            lg:grid-cols-[1.15fr_0.85fr]
          "
        >
          {/* LEFT */}

          <div className="max-w-2xl">

            <Reveal>

              <p className="eyebrow">

                SOFTWARE ENGINEER • FULL STACK • AI

              </p>

            </Reveal>

            <Reveal delay={0.1}>

              <h1
                className="
                  mt-6
                  text-[clamp(4rem,7vw,6.5rem)]
                  font-black
                  leading-[0.88]
                  tracking-[-0.08em]
                "
              >
                Purnima Singh
              </h1>

            </Reveal>

            <div className="mt-8">

              <TextReveal
                text="Building software people trust."
                className="
                  max-w-xl
                  text-[clamp(2rem,4vw,3.5rem)]
                  font-bold
                  leading-[1]
                  tracking-[-0.05em]
                "
              />

            </div>

            <Reveal delay={0.25}>

              <p
                className="
                  copy
                  mt-8
                  max-w-xl
                  text-white/70
                "
              >
                I build scalable full-stack applications,
                intelligent computer vision systems and
                AI-powered software focused on performance,
                simplicity and real-world impact.<br></br>
                Computer Science Undergraduate @ JIIT Noida
              </p>

            </Reveal>

            <Reveal delay={0.35}>

              <div
                className="
                  mt-5
                  flex
                  flex-wrap
                  gap-5
                "
              >
                <MagneticButton
                  href="#projects"
                  primary
                >
                  View Projects
                </MagneticButton>

                <MagneticButton href="/Purnima_Singh.pdf">

                  Download Resume

                </MagneticButton>

              </div>

            </Reveal>

            {/* Socials */}

            <Reveal delay={0.45}>

              <div
                className="
                  mt-5
                  flex
                  items-center
                  gap-6
                  text-sm
                  text-white/60
                "
              >
                <a
                  href="https://github.com/purnima-7"
                  target="_blank"
                  className="transition hover:text-white"
                >
                  GitHub
                </a>

                <span>•</span>

                <a
                  href="https://www.linkedin.com/in/purnimasingh07/"
                  target="_blank"
                  className="transition hover:text-white"
                >
                  LinkedIn
                </a>

                <span>•</span>

                <a
                  href="mailto:purnimasingh1519@gmail.com"
                  className="transition hover:text-white"
                >
                  Email
                </a>

              </div>

            </Reveal>

          </div>

          {/* RIGHT */}

          <Reveal delay={0.2}>

            <div
              className="
                relative
                flex
                justify-center
                lg:justify-end
                lg:-mt-20
                lg:-mb-10
              "
            >
              {/* Soft Glow */}

              <div
                className="
                  absolute
                  top-24
                  h-[520px]
                  w-[520px]
                  rounded-full
                  bg-[var(--primary)]
                  opacity-20
                  blur-[160px]
                "
              />

              {/* Portrait */}

              <motion.div
                animate={{
                  y: [0, -12, 0],
                  rotate: [0, 0.5, 0, -0.5, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative z-10"
              >
                <Image
                  src="/Profile2.png"
                  alt="Purnima Singh"
                  width={700}
                  height={900}
                  priority
                  className="
                    h-auto
                    w-full
                    max-w-[680px]
                    object-contain
                    drop-shadow-[0_60px_80px_rgba(0,0,0,.45)]
                    select-none
                  "
                />
              </motion.div>

            </div>

          </Reveal>

        </div>

      </div>
    </section>
  );
}