"use client";
// Skills grid pattern: mantine.dev card grid, uiverse.io skill cards
// Progress bar animation inspired by: smashingmagazine.com
import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Code2, Monitor, Server, Cloud } from "lucide-react";
import { SKILLS } from "@/data";
import ZanpakutoSlash from "@/components/effects/ZanpakutoSlash";

const ICON_MAP: Record<string, React.ReactNode> = {
  Code2: <Code2 size={20} />,
  Monitor: <Monitor size={20} />,
  Server: <Server size={20} />,
  Cloud: <Cloud size={20} />,
};

function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  const fillRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = fillRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => el.classList.add("animated"), delay * 100);
          observer.unobserve(el);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div className="group">
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-sm font-heading font-semibold" style={{ color: "var(--text)" }}>
          {name}
        </span>
        <span className="text-xs font-mono" style={{ color: "var(--text-muted)" }}>
          {level}%
        </span>
      </div>
      <div className="progress-bar">
        <div
          ref={fillRef}
          className="progress-bar-fill"
          style={{ transform: `scaleX(${level / 100})` }}
        />
      </div>
    </div>
  );
}

export default function SkillsSection() {
  return (
    <section className="py-20 md:py-28" style={{ backgroundColor: "var(--bg-secondary)" }}>
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mb-14"
        >
          <p className="section-tag mb-3">My Arsenal</p>
          <h2 className="font-display text-4xl md:text-5xl mb-4" style={{ color: "var(--text)" }}>
            SKILLS & TOOLS
          </h2>
          <ZanpakutoSlash />
          <p className="text-base max-w-xl" style={{ color: "var(--text-muted)" }}>
            Technologies I&apos;ve worked with across personal projects, coursework, and open-source contributions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SKILLS.map((cat, ci) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: ci * 0.1 }}
              className="card p-6"
            >
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-9 h-9 rounded flex items-center justify-center"
                  style={{ backgroundColor: "var(--accent-glow)", color: "var(--accent)" }}
                >
                  {ICON_MAP[cat.icon] || <Code2 size={20} />}
                </div>
                <h3 className="font-heading text-lg font-bold" style={{ color: "var(--text)" }}>
                  {cat.category}
                </h3>
              </div>
              <div className="space-y-3.5">
                {cat.skills.map((skill, si) => (
                  <SkillBar key={skill.name} name={skill.name} level={skill.level} delay={si + ci * 3} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quick skill pills overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 p-6 rounded-lg"
          style={{ backgroundColor: "var(--surface)", border: "1px solid var(--border)" }}
        >
          <p className="text-sm font-heading font-semibold tracking-widest uppercase mb-4" style={{ color: "var(--text-faint)" }}>
            Also familiar with
          </p>
          <div className="flex flex-wrap gap-2">
            {["Figma", "Notion", "Jira", "Webpack", "Vite", "CI/CD", "Jest", "Vitest", "Pandas", "NumPy", "Matplotlib", "Firebase", "Vercel", "Netlify", "Nginx"].map((s) => (
              <span key={s} className="tag">{s}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
