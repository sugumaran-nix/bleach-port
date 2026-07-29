"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { label: "Reiatsu Class", value: "Your Experience Level" },
  { label: "Zanpakuto Type", value: "Your Stack Type" },
  { label: "Division", value: "Your Specialty" },
  { label: "Bankai Status", value: "Your Availability" },
];

const bioWords = "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor.".split(" ");

function WordReveal({ words }: { words: string[] }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <p ref={ref} className="font-body text-sm leading-7" style={{ color: "rgba(240,240,242,0.7)" }}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, filter: "blur(4px)" }}
          animate={inView ? { opacity: 1, filter: "blur(0px)" } : {}}
          transition={{ duration: 0.4, delay: i * 0.025 }}
          className="inline-block mr-1"
        >
          {word}
        </motion.span>
      ))}
    </p>
  );
}

function Card3D({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: React.MouseEvent) => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `perspective(800px) rotateY(${x * 12}deg) rotateX(${-y * 12}deg)`;
  };

  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "perspective(800px) rotateY(0) rotateX(0)";
    el.style.transition = "transform 0.5s ease";
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="relative"
      style={{ transition: "transform 0.1s ease", willChange: "transform" }}
    >
      {children}
    </div>
  );
}

export default function AboutSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-5%" });

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-32 px-6 overflow-hidden"
      style={{ backgroundColor: "var(--bg-void)" }}
    >
      {/* Subtle background accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 60% 50% at 0% 50%, rgba(193,18,31,0.04), transparent)",
        }}
      />

      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-16"
        >
          <div className="h-px flex-1 max-w-[60px]" style={{ backgroundColor: "var(--red-reiatsu)" }} />
          <span className="font-accent text-xs tracking-[0.5em] uppercase" style={{ color: "var(--gold-spirit)" }}>
            Shinigami Dossier
          </span>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left: 3D Profile Card */}
          <Card3D>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative p-8 rounded-sm overflow-hidden"
              style={{ backgroundColor: "var(--bg-surface)", border: "1px solid var(--ash)" }}
            >
              {/* Gold animated border */}
              <div
                className="absolute inset-0 rounded-sm pointer-events-none"
                style={{
                  background: "linear-gradient(90deg, var(--gold-spirit), var(--red-reiatsu), var(--gold-spirit))",
                  backgroundSize: "200% 100%",
                  animation: "goldBorder 4s linear infinite",
                  padding: "1px",
                  WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                  WebkitMaskComposite: "xor",
                  maskComposite: "exclude",
                  opacity: 0.5,
                }}
              />

              {/* Avatar */}
              <div className="flex justify-center mb-6">
                <div
                  className="w-28 h-28 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "var(--ash)", border: "2px solid var(--gold-spirit)" }}
                >
                  <svg viewBox="0 0 80 80" width="60" height="60" fill="none">
                    <circle cx="40" cy="28" r="16" stroke="var(--white-soul)" strokeWidth="1.5" />
                    <path
                      d="M10 72 C10 52 70 52 70 72"
                      stroke="var(--white-soul)"
                      strokeWidth="1.5"
                      fill="none"
                    />
                  </svg>
                </div>
              </div>

              {/* Name placeholder */}
              <h3
                className="font-display text-2xl text-center mb-1"
                style={{ color: "var(--white-soul)" }}
              >
                Your Name
              </h3>
              <p
                className="font-accent text-xs tracking-widest text-center uppercase mb-6"
                style={{ color: "var(--gold-spirit)" }}
              >
                Your Role
              </p>

              {/* Stats */}
              <div className="space-y-3 pt-6" style={{ borderTop: "1px solid var(--ash)" }}>
                {stats.map((s, i) => (
                  <motion.div
                    key={s.label}
                    initial={{ opacity: 0, x: -20, filter: "blur(4px)" }}
                    animate={inView ? { opacity: 1, x: 0, filter: "blur(0)" } : {}}
                    transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                    className="flex justify-between items-center"
                  >
                    <span
                      className="font-accent text-xs tracking-widest uppercase"
                      style={{ color: "var(--ash)" }}
                    >
                      {s.label}
                    </span>
                    <span
                      className="font-body text-xs"
                      style={{ color: "var(--white-soul)" }}
                    >
                      {s.value}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Division badge */}
              <div className="mt-6 flex justify-center">
                <svg viewBox="0 0 80 30" width="80" height="30" fill="none">
                  <path
                    d="M40 4 L76 26 L4 26 Z"
                    stroke="var(--gold-spirit)"
                    strokeWidth="1"
                    fill="none"
                    opacity="0.6"
                  />
                  <line x1="40" y1="10" x2="40" y2="26" stroke="var(--gold-spirit)" strokeWidth="0.5" opacity="0.4" />
                </svg>
              </div>
            </motion.div>
          </Card3D>

          {/* Right: Bio */}
          <div className="flex flex-col justify-start">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display text-4xl md:text-5xl mb-6"
              style={{ color: "var(--white-soul)" }}
            >
              About the
              <br />
              <span style={{ color: "var(--gold-spirit)" }}>Shinigami</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-8"
            >
              <WordReveal words={bioWords} />
            </motion.div>

            {/* Quick facts */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { num: "XX+", label: "Projects Built" },
                { num: "X+", label: "Years Experience" },
                { num: "XX", label: "Technologies" },
                { num: "∞", label: "Reiatsu Level" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="p-4 rounded-sm"
                  style={{ backgroundColor: "var(--bg-surface)", border: "1px solid var(--ash)" }}
                >
                  <div
                    className="font-display text-3xl font-bold mb-1"
                    style={{ color: "var(--gold-spirit)" }}
                  >
                    {item.num}
                  </div>
                  <div
                    className="font-accent text-xs tracking-widest uppercase"
                    style={{ color: "var(--ash)" }}
                  >
                    {item.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
