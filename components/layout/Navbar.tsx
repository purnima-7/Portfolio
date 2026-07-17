"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

import { navigation } from "@/data/navigation";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
  const handleScroll = () => {
    setScrolled(window.scrollY > 20);

    const sections = navigation.map((item) => item.id);

    const scrollPosition = window.scrollY + 140;

    for (const section of sections) {
      const element = document.getElementById(section);

      if (!element) continue;

      if (
        scrollPosition >= element.offsetTop &&
        scrollPosition < element.offsetTop + element.offsetHeight
      ) {
        setActiveSection(section);
      }
    }
  };

  handleScroll();

  window.addEventListener("scroll", handleScroll);

  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed inset-x-0 top-6 z-50 flex justify-center px-5"
      >
        <motion.nav
          animate={{
            width: scrolled ? "min(1220px,94vw)" : "min(1280px,96vw)",
          }}
          transition={{
            type: "spring",
            stiffness: 180,
            damping: 24,
          }}
          className="
            flex
            h-[62px]
            items-center
            justify-between
            rounded-full
            border
            border-black/8
            bg-white/85
            px-7
            backdrop-blur-xl
            shadow-[0_18px_60px_rgba(0,0,0,.08)]
          "
        >
          {/* Logo */}

          <Link
            href="/"
            className="
              text-[2rem]
              font-black
              tracking-tight
              text-[var(--navy)]
            "
          >
            P.
          </Link>

          {/* Desktop */}

          <div className="hidden items-center gap-10 lg:flex">
            {navigation.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className={`
                  relative
                  text-[15px]
                  font-medium
                  transition-colors
                  duration-300
                  ${
                    activeSection === item.id
                      ? "text-[var(--navy)]"
                      : "text-[var(--text-light)] hover:text-[var(--navy)]"
                  }
                `}
              >
                {item.label}

                <motion.span
                  layoutId="navbar-indicator"
                  className={`
                    absolute
                    left-0
                    -bottom-1.5
                    h-[2px]
                    rounded-full
                    bg-[var(--primary)]
                    ${
                      activeSection === item.id
                        ? "w-full"
                        : "w-0"
                    }
                  `}
  transition={{
    type: "spring",
    stiffness: 350,
    damping: 30,
  }}
/>
              </Link>
            ))}
          </div>

          {/* CTA */}

          <Link
            href="#contact"
            className="
              hidden
              lg:inline-flex
              items-center
              gap-2
              rounded-full
              bg-[var(--primary)]
              px-6
              py-3
              text-sm
              font-semibold
              text-white
              transition-all
              duration-300
              hover:bg-[var(--secondary)]
              hover:scale-[1.03]
            "
          >
            Say Hello
            <ArrowUpRight size={16} />
          </Link>

          {/* Mobile */}

          <button
            onClick={() => setOpen(true)}
            className="text-[var(--navy)] lg:hidden"
            aria-label="Open Menu"
          >
            <Menu size={24} />
          </button>
        </motion.nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm"
            />

            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                type: "spring",
                stiffness: 240,
                damping: 28,
              }}
              className="
                fixed
                right-0
                top-0
                z-50
                flex
                h-screen
                w-80
                flex-col
                bg-white
                p-8
              "
            >
              <button
                onClick={() => setOpen(false)}
                className="ml-auto text-[var(--navy)]"
              >
                <X />
              </button>

              <div className="mt-16 flex flex-col gap-8">
                {navigation.map((item) => (
                  <Link
                    key={item.id}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="
                      text-3xl
                      font-bold
                      text-[var(--navy)]
                    "
                  >
                    {item.label}
                  </Link>
                ))}

                <Link
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="
                    mt-8
                    inline-flex
                    w-fit
                    items-center
                    gap-2
                    rounded-full
                    bg-[var(--primary)]
                    px-6
                    py-3
                    font-medium
                    text-white
                  "
                >
                  Say Hello
                  <ArrowUpRight size={18} />
                </Link>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}