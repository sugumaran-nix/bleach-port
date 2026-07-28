"use client";
// Hero typewriter: react-type-animation (npmjs.com/package/react-type-animation)
// Animation: framer-motion
// Floating badge pattern: magicui.design
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Download, Sparkles } from "lucide-react";
import { HERO_ROLES } from "@/data";
import ReiatsuOrbs from "@/components/effects/ReiatsuOrbs";
import HollowMask from "@/components/effects/HollowMask";

const typeSequence: (string | number)[] = HERO_ROLES.flatMap((r) => [r, 2000]);

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: "var(--bg)" }}
    >
      <ReiatsuOrbs />

      {/* Dark-theme hollow mask decoration */}
      <HollowMask className="w-96 h-96 top-10 right-10 text-current dark:opacity-5 opacity-0 transition-opacity duration-500" />

      {/* Light-theme Zanpakuto kanji watermark */}
      <div
        className="absolute right-16 top-1/2 -translate-y-1/2 font-display text-[160px] leading-none select-none pointer-events-none dark:opacity-0 opacity-[0.035] transition-opacity duration-500"
        style={{ color: "var(--accent)", letterSpacing: "0.05em" }}
        aria-hidden="true"
      >
        斬月
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-24 md:py-32">
        <div className="max-w-3xl">
          {/* Floating badge — magicui.design badge pattern */}
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full text-sm font-heading font-semibold"
            style={{
              backgroundColor: "var(--surface-2)",
              border: "1px solid var(--card-border)",
              color: "var(--accent)",
            }}
          >
            <Sparkles size={14} />
            Available for Opportunities
            <span
              className="inline-block w-2 h-2 rounded-full animate-pulse"
              style={{ backgroundColor: "#22c55e" }}
            />
          </motion.div>

          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-mono text-sm mb-3"
            style={{ color: "var(--text-muted)" }}
          >
            Hi there 👋, I&apos;m
          </motion.p>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-display text-6xl md:text-8xl lg:text-9xl mb-4 leading-none"
            style={{ color: "var(--text)" }}
          >
            Your{" "}
            <span
              className="relative inline-block"
              style={{ color: "var(--accent)" }}
            >
              Name
              {/* Slash underline */}
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.5, delay: 0.7, ease: "easeOut" }}
                className="absolute -bottom-1 left-0 right-0 block"
                style={{
                  height: 4,
                  background: "linear-gradient(90deg, var(--accent), transparent)",
                  transformOrigin: "left",
                  borderRadius: 2,
                }}
              />
            </span>
          </motion.h1>

          {/* Typewriter */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex items-center gap-3 mb-6"
          >
            <span
              className="font-heading text-xl md:text-2xl font-semibold"
              style={{ color: "var(--text-muted)" }}
            >
              I&apos;m a
            </span>
            <span
              className="font-heading text-xl md:text-2xl font-bold"
              style={{ color: "var(--accent)" }}
            >
              <TypeAnimation
                sequence={typeSequence}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
                style={{ display: "inline-block" }}
              />
            </span>
          </motion.div>

          {/* Bio */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-base md:text-lg leading-relaxed mb-10 max-w-2xl"
            style={{ color: "var(--text-muted)" }}
          >
            A final-year Computer Science student who loves turning ideas into clean, 
            functional software. I build full-stack web apps, contribute to open source, 
            and am always learning something new. Let&apos;s create something impactful together.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <Link href="/projects" className="btn-accent animate-reiatsu-pulse">
              View My Work <ArrowRight size={16} />
            </Link>
            <Link href="/contact" className="btn-outline">
              Get In Touch
            </Link>
            <a
              href="/Your-Name-Resume.pdf"
              download
              className="btn-outline"
              style={{ borderColor: "var(--border)", color: "var(--text-muted)" }}
            >
              <Download size={15} /> Resume
            </a>
          </motion.div>

          {/* Social quick-links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="flex items-center gap-2 mt-12"
          >
            <span className="text-xs font-mono" style={{ color: "var(--text-faint)" }}>
              Also on:
            </span>
            {[
              { label: "GitHub", href: "https://github.com/yourname" },
              { label: "LinkedIn", href: "https://linkedin.com/in/yourname" },
              { label: "Twitter", href: "https://twitter.com/yourname" },
            ].map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono px-3 py-1 rounded transition-all duration-200 hover:scale-105"
                style={{
                  color: "var(--text-muted)",
                  border: "1px solid var(--border)",
                  backgroundColor: "var(--surface)",
                }}
              >
                {label}
              </a>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs font-mono tracking-widest uppercase" style={{ color: "var(--text-faint)" }}>
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-10"
          style={{ background: "linear-gradient(to bottom, var(--accent), transparent)" }}
        />
      </motion.div>
    </section>
  );
}
