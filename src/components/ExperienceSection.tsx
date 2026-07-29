"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

const entries = [
  {
    id: 1,
    title: "Your Degree",
    sub: "Your University",
    period: "Your Start Year — Your End Year",
    desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore.",
    type: "education",
  },
  {
    id: 2,
    title: "Your Degree",
    sub: "Your University",
    period: "Your Start Year — Your End Year",
    desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore.",
    type: "education",
  },
  {
    id: 3,
    title: "Your Role",
    sub: "Your Company",
    period: "Your Start Year — Your End Year",
    desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore.",
    type: "work",
  },
];

function GoldSeal() {
  return (
    <svg viewBox="0 0 32 32" width="32" height="32" fill="none">
      <circle cx="16" cy="16" r="14" stroke="var(--gold-spirit)" strokeWidth="1" opacity="0.7" />
      <circle cx="16" cy="16" r="10" stroke="var(--gold-spirit)" strokeWidth="0.5" opacity="0.4" />
      <path
        d="M16 6 L18 13 L25 13 L19.5 17.5 L21.5 24.5 L16 20 L10.5 24.5 L12.5 17.5 L7 13 L14 13 Z"
        stroke="var(--gold-spirit)" strokeWidth="0.8" fill="none" opacity="0.8"
      />
    </svg>
  );
}

function TextGenerate({ text, inView }: { text: string; inView: boolean }) {
  return (
    <p className="font-body text-sm leading-7" style={{ color: "rgba(240,240,242,0.55)" }}>
      {text.split(" ").map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.3, delay: i * 0.04 }}
          className="inline-block mr-1"
        >
          {word}
        </motion.span>
      ))}
    </p>
  );
}

function TimelineEntry({ entry }: { entry: typeof entries[0] }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <div ref={ref} className="relative">
      {/* Gold seal on line */}
      <div className="absolute top-0" style={{ left: "-2.75rem" }}>
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={inView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <GoldSeal />
        </motion.div>
      </div>

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="relative p-6 rounded-sm overflow-hidden"
        style={{ backgroundColor: "var(--bg-surface)", border: "1px solid var(--ash)" }}
      >
        {/* Parchment lines */}
        <div
          className="absolute inset-0 rounded-sm pointer-events-none opacity-5"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent, transparent 28px, rgba(212,175,55,0.3) 28px, rgba(212,175,55,0.3) 29px)",
          }}
        />
        <div className="flex justify-between items-start mb-3 flex-wrap gap-2">
          <div>
            <h3 className="font-display text-xl" style={{ color: "var(--white-soul)" }}>
              {entry.title}
            </h3>
            <p className="font-body text-sm" style={{ color: "var(--gold-spirit)", opacity: 0.8 }}>
              {entry.sub}
            </p>
          </div>
          <span
            className="font-accent text-xs tracking-widest uppercase px-3 py-1"
            style={{
              color: entry.type === "work" ? "var(--red-reiatsu)" : "var(--ash)",
              border: `1px solid ${entry.type === "work" ? "var(--red-reiatsu)" : "var(--ash)"}`,
            }}
          >
            {entry.period}
          </span>
        </div>
        <TextGenerate text={entry.desc} inView={inView} />
      </motion.div>
    </div>
  );
}

export default function ExperienceSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-5%" });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 80%", "end 20%"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="relative py-32 px-6 overflow-hidden"
      style={{ backgroundColor: "var(--bg-void)" }}
    >
      {/* Shooting stars */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              top: `${15 + i * 12}%`,
              left: "-5%",
              width: `${60 + i * 20}px`,
              height: "1px",
              background: "linear-gradient(90deg, transparent, rgba(240,240,242,0.6), transparent)",
              rotate: `${-5 + i * 2}deg`,
            }}
            animate={{ x: ["-10%", "120vw"] }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              delay: i * 2.5,
              ease: "easeIn",
            }}
          />
        ))}
      </div>

      <div className="max-w-4xl mx-auto relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-4"
        >
          <div className="h-px w-12" style={{ backgroundColor: "var(--red-reiatsu)" }} />
          <span className="font-accent text-xs tracking-[0.5em] uppercase" style={{ color: "var(--gold-spirit)" }}>
            Soul Society Records
          </span>
        </motion.div>

        {/* Wavy title */}
        <div className="mb-16">
          {"Soul Society Records".split("").map((char, i) => (
            <motion.span
              key={i}
              initial={{ y: 40, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.04 }}
              className="font-display text-4xl md:text-5xl font-bold inline-block"
              style={{ color: "var(--white-soul)", marginRight: char === " " ? "0.25em" : "0" }}
            >
              {char === " " ? "\u00a0" : char}
            </motion.span>
          ))}
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-px" style={{ backgroundColor: "var(--ash)" }}>
            <motion.div
              className="w-full"
              style={{
                height: lineHeight,
                background: "linear-gradient(180deg, var(--gold-spirit), var(--red-reiatsu))",
                transformOrigin: "top",
              }}
            />
          </div>

          <div className="space-y-14 pl-14">
            {entries.map((entry) => (
              <TimelineEntry key={entry.id} entry={entry} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
