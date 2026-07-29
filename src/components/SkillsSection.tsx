"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

type Category = "All" | "Frontend" | "Backend" | "AI-ML" | "Tools";

const skills = [
  { id: 1, name: "Skill One", release: "Shikai", form: "Your Form", category: "Frontend", pressure: 90 },
  { id: 2, name: "Skill Two", release: "Bankai", form: "Your Form", category: "Backend", pressure: 85 },
  { id: 3, name: "Skill Three", release: "Shikai", form: "Your Form", category: "Frontend", pressure: 78 },
  { id: 4, name: "Skill Four", release: "Bankai", form: "Your Form", category: "AI-ML", pressure: 82 },
  { id: 5, name: "Skill Five", release: "Shikai", form: "Your Form", category: "Backend", pressure: 75 },
  { id: 6, name: "Skill Six", release: "Shikai", form: "Your Form", category: "Tools", pressure: 88 },
  { id: 7, name: "Skill Seven", release: "Shikai", form: "Your Form", category: "AI-ML", pressure: 72 },
  { id: 8, name: "Skill Eight", release: "Bankai", form: "Your Form", category: "Frontend", pressure: 93 },
];

const categories: Category[] = ["All", "Frontend", "Backend", "AI-ML", "Tools"];

function SkillCard({ skill, inView }: { skill: typeof skills[0]; inView: boolean }) {
  const [hovered, setHovered] = useState(false);
  const isBankai = skill.release === "Bankai";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: skill.id * 0.07 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover={{ scale: 1.02 }}
      className="relative p-6 rounded-sm cursor-default overflow-hidden"
      style={{
        backgroundColor: "var(--bg-surface)",
        border: `1px solid ${hovered ? (isBankai ? "var(--gold-spirit)" : "var(--red-reiatsu)") : "var(--ash)"}`,
        transition: "border-color 0.3s",
      }}
    >
      {/* Hover glow */}
      {hovered && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: isBankai
              ? "radial-gradient(ellipse at 50% 0%, rgba(212,175,55,0.08), transparent 70%)"
              : "radial-gradient(ellipse at 50% 0%, rgba(193,18,31,0.08), transparent 70%)",
          }}
        />
      )}

      {/* Release badge */}
      <div className="flex justify-between items-start mb-4">
        <span
          className="font-accent text-xs tracking-widest uppercase px-2 py-0.5"
          style={{
            color: isBankai ? "var(--gold-spirit)" : "var(--red-reiatsu)",
            border: `1px solid ${isBankai ? "var(--gold-spirit)" : "var(--red-reiatsu)"}`,
            opacity: 0.8,
          }}
        >
          {skill.release}
        </span>
        <span
          className="font-accent text-xs tracking-widest uppercase"
          style={{ color: "var(--ash)" }}
        >
          {skill.category}
        </span>
      </div>

      {/* Skill name */}
      <h3
        className="font-display text-xl mb-1"
        style={{ color: "var(--white-soul)" }}
      >
        {skill.name}
      </h3>
      <p
        className="font-body text-xs mb-5"
        style={{ color: "var(--ash)" }}
      >
        {skill.form}
      </p>

      {/* Spiritual pressure bar */}
      <div>
        <div className="flex justify-between mb-1">
          <span className="font-accent text-xs tracking-widest uppercase" style={{ color: "var(--ash)" }}>
            Spiritual Pressure
          </span>
          <span className="font-accent text-xs" style={{ color: isBankai ? "var(--gold-spirit)" : "var(--red-reiatsu)" }}>
            {skill.pressure}%
          </span>
        </div>
        <div
          className="h-px w-full overflow-hidden"
          style={{ backgroundColor: "var(--ash)" }}
        >
          <motion.div
            initial={{ width: 0 }}
            animate={inView ? { width: `${skill.pressure}%` } : { width: 0 }}
            transition={{ duration: 1, delay: 0.5 + skill.id * 0.07, ease: "easeOut" }}
            className="h-full"
            style={{
              background: isBankai
                ? "linear-gradient(90deg, var(--gold-spirit), rgba(212,175,55,0.4))"
                : "linear-gradient(90deg, var(--red-reiatsu), rgba(193,18,31,0.4))",
            }}
          />
        </div>
      </div>
    </motion.div>
  );
}

export default function SkillsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-5%" });
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const filtered = activeCategory === "All"
    ? skills
    : skills.filter((s) => s.category === activeCategory);

  return (
    <section
      id="skills"
      ref={ref}
      className="relative py-32 px-6 overflow-hidden"
      style={{ backgroundColor: "var(--bg-void)" }}
    >
      {/* Stars background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 40 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 2 + 1 + "px",
              height: Math.random() * 2 + 1 + "px",
              top: Math.random() * 100 + "%",
              left: Math.random() * 100 + "%",
              backgroundColor: "var(--white-soul)",
              opacity: Math.random() * 0.3 + 0.05,
              animation: `blink ${Math.random() * 3 + 2}s ease-in-out infinite`,
              animationDelay: Math.random() * 3 + "s",
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-4"
        >
          <div className="h-px w-12" style={{ backgroundColor: "var(--red-reiatsu)" }} />
          <span className="font-accent text-xs tracking-[0.5em] uppercase" style={{ color: "var(--gold-spirit)" }}>
            Zanpakuto Arsenal
          </span>
        </motion.div>

        {/* Title - wavy */}
        <div className="mb-12 overflow-hidden">
          {"Zanpakuto Arsenal".split("").map((char, i) => (
            <motion.span
              key={i}
              initial={{ y: 60, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.03 }}
              className="font-display text-5xl md:text-6xl font-bold inline-block"
              style={{
                color: "var(--white-soul)",
                marginRight: char === " " ? "0.3em" : "0",
              }}
            >
              {char === " " ? "\u00a0" : char}
            </motion.span>
          ))}
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="font-accent text-xs tracking-widest uppercase px-4 py-2 transition-all duration-300"
              style={{
                color: activeCategory === cat ? "var(--bg-void)" : "var(--ash)",
                backgroundColor: activeCategory === cat ? "var(--gold-spirit)" : "transparent",
                border: `1px solid ${activeCategory === cat ? "var(--gold-spirit)" : "var(--ash)"}`,
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filtered.map((skill) => (
            <SkillCard key={skill.id} skill={skill} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
