"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const projects = [
  {
    id: 1,
    name: "Project One",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    tags: ["Stack Tag A", "Stack Tag B", "Stack Tag C"],
    github: "#",
    live: "#",
  },
  {
    id: 2,
    name: "Project Two",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    tags: ["Stack Tag A", "Stack Tag B", "Stack Tag C"],
    github: "#",
    live: "#",
  },
  {
    id: 3,
    name: "Project Three",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    tags: ["Stack Tag A", "Stack Tag B", "Stack Tag C"],
    github: "#",
    live: "#",
  },
  {
    id: 4,
    name: "Project Four",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    tags: ["Stack Tag A", "Stack Tag B", "Stack Tag C"],
    github: "#",
    live: "#",
  },
  {
    id: 5,
    name: "Project Five",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    tags: ["Stack Tag A", "Stack Tag B", "Stack Tag C"],
    github: "#",
    live: "#",
  },
];

const MARQUEE_TAGS = [
  "Stack Tag A", "Stack Tag B", "Stack Tag C", "Stack Tag D",
  "Stack Tag E", "Stack Tag F", "Stack Tag G", "Stack Tag H",
  "Stack Tag A", "Stack Tag B", "Stack Tag C", "Stack Tag D",
];

function DirectionAwareCard({ project, delay }: { project: typeof projects[0]; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-5%" });
  const [overlayStyle, setOverlayStyle] = useState({ opacity: 0, y: 20 });
  const [hovered, setHovered] = useState(false);

  const onEnter = () => {
    setHovered(true);
    setOverlayStyle({ opacity: 1, y: 0 });
  };
  const onLeave = () => {
    setHovered(false);
    setOverlayStyle({ opacity: 0, y: 20 });
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      className="relative overflow-hidden rounded-sm group"
      style={{
        backgroundColor: "var(--bg-surface)",
        border: `1px solid ${hovered ? "var(--gold-spirit)" : "var(--ash)"}`,
        transition: "border-color 0.3s",
      }}
    >
      {/* Project image placeholder */}
      <div
        className="relative h-44 overflow-hidden"
        style={{ backgroundColor: "var(--ash)" }}
      >
        {/* Abstract placeholder art */}
        <svg
          className="absolute inset-0 w-full h-full opacity-20"
          viewBox="0 0 400 180"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <linearGradient id={`g${project.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="var(--red-reiatsu)" />
              <stop offset="100%" stopColor="var(--blue-getsuga)" />
            </linearGradient>
          </defs>
          <rect width="400" height="180" fill={`url(#g${project.id})`} />
          <line x1="0" y1={30 * project.id} x2="400" y2={180 - 20 * project.id} stroke="white" strokeWidth="0.5" opacity="0.3" />
          <line x1={project.id * 60} y1="0" x2={200 + project.id * 20} y2="180" stroke="white" strokeWidth="0.5" opacity="0.3" />
        </svg>

        {/* Number label */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span
            className="font-display text-5xl font-bold opacity-10"
            style={{ color: "var(--white-soul)" }}
          >
            {String(project.id).padStart(2, "0")}
          </span>
        </div>

        {/* Hover overlay */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center gap-3"
          animate={overlayStyle}
          transition={{ duration: 0.25 }}
          style={{ backgroundColor: "rgba(10,10,11,0.85)" }}
        >
          <a
            href={project.github}
            className="font-accent text-xs tracking-widest uppercase px-4 py-2"
            style={{
              color: "var(--white-soul)",
              border: "1px solid var(--ash)",
            }}
          >
            GitHub
          </a>
          <a
            href={project.live}
            className="font-accent text-xs tracking-widest uppercase px-4 py-2"
            style={{
              color: "var(--bg-void)",
              backgroundColor: "var(--gold-spirit)",
            }}
          >
            Live →
          </a>
        </motion.div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3
          className="font-display text-xl mb-2"
          style={{ color: "var(--white-soul)" }}
        >
          {project.name}
        </h3>
        <p
          className="font-body text-sm leading-6 mb-4"
          style={{ color: "rgba(240,240,242,0.5)" }}
        >
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="font-accent text-xs tracking-wider uppercase px-2 py-0.5"
              style={{ color: "var(--ash)", border: "1px solid var(--ash)" }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Beam lines on hover */}
      {hovered && (
        <>
          <div
            className="absolute top-0 left-0 right-0 h-px pointer-events-none"
            style={{ background: "linear-gradient(90deg, transparent, var(--gold-spirit), transparent)" }}
          />
          <div
            className="absolute bottom-0 left-0 right-0 h-px pointer-events-none"
            style={{ background: "linear-gradient(90deg, transparent, var(--red-reiatsu), transparent)" }}
          />
        </>
      )}
    </motion.div>
  );
}

export default function ProjectsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-5%" });

  return (
    <section
      id="projects"
      ref={ref}
      className="relative py-32 px-6 overflow-hidden"
      style={{ backgroundColor: "var(--bg-void)" }}
    >
      {/* Background beams */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              top: `${i * 20}%`,
              left: "-10%",
              width: "120%",
              height: "1px",
              background: `linear-gradient(90deg, transparent, rgba(27,79,228,${0.04 + i * 0.01}), transparent)`,
              transform: `rotate(${-5 + i * 2.5}deg)`,
            }}
            animate={{ x: ["-100%", "200%"] }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "linear",
              delay: i * 1.5,
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-4"
        >
          <div className="h-px w-12" style={{ backgroundColor: "var(--red-reiatsu)" }} />
          <span className="font-accent text-xs tracking-[0.5em] uppercase" style={{ color: "var(--gold-spirit)" }}>
            「 BANKAI SHOWCASE 」
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-5xl md:text-6xl font-bold mb-14"
          style={{ color: "var(--white-soul)" }}
        >
          Selected Work
        </motion.h2>

        {/* Project grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.slice(0, 3).map((p, i) => (
            <DirectionAwareCard key={p.id} project={p} delay={i * 0.12} />
          ))}
        </div>
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          {projects.slice(3).map((p, i) => (
            <DirectionAwareCard key={p.id} project={p} delay={(i + 3) * 0.12} />
          ))}
        </div>

        {/* Marquee */}
        <div className="mt-16 overflow-hidden border-t border-b py-4" style={{ borderColor: "var(--ash)" }}>
          <motion.div
            className="flex gap-8 whitespace-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            {[...MARQUEE_TAGS, ...MARQUEE_TAGS].map((tag, i) => (
              <span
                key={i}
                className="font-accent text-xs tracking-widest uppercase flex-shrink-0"
                style={{ color: "var(--ash)" }}
              >
                {tag} <span style={{ color: "var(--red-reiatsu)", marginLeft: "1rem" }}>·</span>
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
