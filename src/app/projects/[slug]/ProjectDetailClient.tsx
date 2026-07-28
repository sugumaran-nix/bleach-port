"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ExternalLink, GitFork, Calendar, Layers, CheckCircle2, AlertCircle } from "lucide-react";
import type { Project } from "@/types";
import ZanpakutoSlash from "@/components/effects/ZanpakutoSlash";

export default function ProjectDetailClient({ project }: { project: Project }) {
  return (
    <div style={{ backgroundColor: "var(--bg)", minHeight: "100vh" }}>
      {/* Hero banner */}
      <div className={`bg-gradient-to-br ${project.gradient} pt-32 pb-16 relative overflow-hidden`}>
        <div className="absolute inset-0 opacity-5 font-mono text-sm leading-6 p-8 overflow-hidden select-none text-white pointer-events-none" aria-hidden="true">
          {project.techStack.map(t => `import { ${t.replace(/\s/g,'')} } from '${t.toLowerCase().replace(/\s/g,'-')}';`).join('\n')}
        </div>
        <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <Link href="/projects" className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm font-heading font-semibold mb-8 transition-colors">
            <ArrowLeft size={15} /> Back to Projects
          </Link>
          {project.featured && (
            <span className="block mb-3 text-xs font-mono text-white/60">⭐ Featured Project</span>
          )}
          <h1 className="font-display text-5xl md:text-7xl text-white mb-4">{project.title}</h1>
          <p className="text-white/80 text-lg max-w-2xl mb-6">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tags.map(tag => (
              <span key={tag} className="text-xs font-mono px-2.5 py-1 rounded" style={{ backgroundColor: "rgba(255,255,255,0.15)", color: "#fff" }}>{tag}</span>
            ))}
          </div>
          <div className="flex flex-wrap gap-3">
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 rounded font-heading font-semibold text-sm bg-white text-black hover:bg-white/90 transition-colors">
              <ExternalLink size={14} /> Live Demo
            </a>
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 rounded font-heading font-semibold text-sm bg-white/15 text-white hover:bg-white/25 transition-colors border border-white/25">
              <GitFork size={14} /> View Code
            </a>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-10">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <p className="section-tag mb-3">Overview</p>
              <h2 className="font-display text-3xl mb-3" style={{ color: "var(--text)" }}>ABOUT THIS PROJECT</h2>
              <ZanpakutoSlash />
              <p className="text-base leading-relaxed" style={{ color: "var(--text-muted)" }}>{project.longDescription}</p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
              <p className="section-tag mb-3">The Hard Parts</p>
              <h2 className="font-display text-3xl mb-3" style={{ color: "var(--text)" }}>CHALLENGES</h2>
              <ZanpakutoSlash />
              <div className="space-y-3">
                {project.challenges.map((c, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 rounded-lg" style={{ backgroundColor: "var(--surface)", border: "1px solid var(--border)" }}>
                    <AlertCircle size={18} style={{ color: "var(--accent)", marginTop: 2, flexShrink: 0 }} />
                    <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>{c}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
              <p className="section-tag mb-3">What I Achieved</p>
              <h2 className="font-display text-3xl mb-3" style={{ color: "var(--text)" }}>OUTCOMES</h2>
              <ZanpakutoSlash />
              <div className="space-y-3">
                {project.outcomes.map((o, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 rounded-lg" style={{ backgroundColor: "var(--surface)", border: "1px solid var(--border)" }}>
                    <CheckCircle2 size={18} style={{ color: "#22c55e", marginTop: 2, flexShrink: 0 }} />
                    <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>{o}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.15 }} className="space-y-6">
            {/* Date */}
            <div className="card p-5">
              <h3 className="text-xs font-heading font-bold tracking-widest uppercase mb-3 flex items-center gap-2" style={{ color: "var(--text-faint)" }}>
                <Calendar size={13} /> Completed
              </h3>
              <p className="font-heading font-semibold" style={{ color: "var(--text)" }}>{project.date}</p>
            </div>

            {/* Tech Stack */}
            <div className="card p-5">
              <h3 className="text-xs font-heading font-bold tracking-widest uppercase mb-3 flex items-center gap-2" style={{ color: "var(--text-faint)" }}>
                <Layers size={13} /> Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map(t => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className="card p-5">
              <h3 className="text-xs font-heading font-bold tracking-widest uppercase mb-3" style={{ color: "var(--text-faint)" }}>Links</h3>
              <div className="space-y-2">
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-heading font-semibold transition-colors hover:text-accent" style={{ color: "var(--text-muted)" }}>
                  <ExternalLink size={14} /> Live Demo
                </a>
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-heading font-semibold transition-colors hover:text-accent" style={{ color: "var(--text-muted)" }}>
                  <GitFork size={14} /> Source Code
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
