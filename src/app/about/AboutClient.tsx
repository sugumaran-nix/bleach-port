"use client";
import { motion } from "framer-motion";
import { User, MapPin, Mail, GitFork, Globe, Heart, Coffee, Code, Gamepad2, Music, BookOpen } from "lucide-react";
import ZanpakutoSlash from "@/components/effects/ZanpakutoSlash";
import ReiatsuOrbs from "@/components/effects/ReiatsuOrbs";
import SkillsSection from "@/components/sections/SkillsSection";
import EducationSection from "@/components/sections/EducationSection";
import CertificatesSection from "@/components/sections/CertificatesSection";

const STATS = [
  { label: "Projects Built", value: "15+" },
  { label: "GitHub Commits", value: "500+" },
  { label: "Technologies", value: "20+" },
  { label: "Cups of Coffee", value: "∞" },
];

const INTERESTS = [
  { icon: <Code size={18} />, label: "Open Source" },
  { icon: <Gamepad2 size={18} />, label: "Gaming" },
  { icon: <Music size={18} />, label: "Music" },
  { icon: <BookOpen size={18} />, label: "Tech Blogs" },
  { icon: <Coffee size={18} />, label: "Coffee" },
  { icon: <Heart size={18} />, label: "UI Design" },
];

export default function AboutClient() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden" style={{ backgroundColor: "var(--bg)" }}>
        <ReiatsuOrbs />
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <p className="section-tag mb-3">Get to Know Me</p>
              <h1 className="font-display text-5xl md:text-7xl mb-4" style={{ color: "var(--text)" }}>
                ABOUT <span style={{ color: "var(--accent)" }}>ME</span>
              </h1>
              <ZanpakutoSlash />
              <p className="text-base md:text-lg leading-relaxed mb-5" style={{ color: "var(--text-muted)" }}>
                I&apos;m a final-year Computer Science undergraduate with a deep love for building things on the web. My journey started in high school when I built my first &quot;Hello World&quot; in Python and I&apos;ve been hooked ever since.
              </p>
              <p className="text-base md:text-lg leading-relaxed mb-8" style={{ color: "var(--text-muted)" }}>
                I specialise in React and Next.js on the frontend with Node.js and Python on the backend. I care deeply about code quality, developer experience, and making software that&apos;s genuinely useful to people. When I&apos;m not coding, you&apos;ll find me reading tech blogs, contributing to open source, or rewatching anime.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                <span className="flex items-center gap-2 text-sm" style={{ color: "var(--text-muted)" }}>
                  <MapPin size={14} style={{ color: "var(--accent)" }} /> Your City, Country
                </span>
                <span className="flex items-center gap-2 text-sm" style={{ color: "var(--text-muted)" }}>
                  <Mail size={14} style={{ color: "var(--accent)" }} /> yourname@email.com
                </span>
                <span className="flex items-center gap-2 text-sm" style={{ color: "var(--text-muted)" }}>
                  <User size={14} style={{ color: "var(--accent)" }} /> Available Immediately
                </span>
              </div>
              <div className="flex gap-3">
                <a href="https://github.com/yourname" target="_blank" rel="noopener noreferrer" className="btn-accent py-2 px-4 text-sm">
                  <GitFork size={14} /> GitHub
                </a>
                <a href="https://linkedin.com/in/yourname" target="_blank" rel="noopener noreferrer" className="btn-outline py-2 px-4 text-sm">
                  <Globe size={14} /> LinkedIn
                </a>
              </div>
            </motion.div>

            {/* Avatar placeholder */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex justify-center"
            >
              <div className="relative">
                {/* Outer reiatsu ring */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute -inset-4 rounded-full"
                  style={{
                    border: "2px dashed var(--accent)",
                    opacity: 0.3,
                  }}
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
                  className="absolute -inset-8 rounded-full"
                  style={{
                    border: "1px dashed var(--accent)",
                    opacity: 0.15,
                  }}
                />
                {/* Avatar box */}
                <div
                  className="relative w-64 h-64 md:w-72 md:h-72 rounded-2xl flex flex-col items-center justify-center overflow-hidden"
                  style={{
                    background: "linear-gradient(135deg, var(--surface) 0%, var(--surface-2) 100%)",
                    border: "2px solid var(--card-border)",
                    boxShadow: "0 0 40px var(--accent-glow)",
                  }}
                >
                  <div
                    className="w-28 h-28 rounded-full flex items-center justify-center mb-4"
                    style={{ backgroundColor: "var(--accent-glow)", border: "3px solid var(--accent)" }}
                  >
                    <User size={56} style={{ color: "var(--accent)" }} />
                  </div>
                  <p className="font-heading font-bold text-lg" style={{ color: "var(--text)" }}>Your Name</p>
                  <p className="text-sm font-mono" style={{ color: "var(--text-muted)" }}>Your Job Title</p>
                  <p className="text-xs mt-1 font-mono" style={{ color: "var(--text-faint)" }}>Your University</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ backgroundColor: "var(--bg-secondary)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="text-center p-5 card"
              >
                <div className="font-display text-4xl md:text-5xl mb-1" style={{ color: "var(--accent)" }}>
                  {stat.value}
                </div>
                <div className="text-sm font-heading font-semibold" style={{ color: "var(--text-muted)" }}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interests */}
      <section className="py-16" style={{ backgroundColor: "var(--bg)" }}>
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <p className="section-tag mb-3">Beyond Code</p>
            <h2 className="font-display text-3xl" style={{ color: "var(--text)" }}>INTERESTS & HOBBIES</h2>
            <ZanpakutoSlash />
          </motion.div>
          <div className="flex flex-wrap gap-3">
            {INTERESTS.map((interest, i) => (
              <motion.span
                key={interest.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.07 }}
                className="skill-pill text-base"
              >
                {interest.icon} {interest.label}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      <SkillsSection />
      <EducationSection />
      <CertificatesSection />
    </>
  );
}
