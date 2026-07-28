"use client";
// Tag filter pattern: radix-ui.com toggle group
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ExternalLink, GitFork, ArrowRight, Filter } from "lucide-react";
import { PROJECTS, ALL_PROJECT_TAGS } from "@/data";
import ZanpakutoSlash from "@/components/effects/ZanpakutoSlash";
import ReiatsuOrbs from "@/components/effects/ReiatsuOrbs";

export default function ProjectsClient() {
  const [activeTag, setActiveTag] = useState<string>("All");

  const filtered =
    activeTag === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.tags.includes(activeTag));

  return (
    <>
      {/* Header */}
      <section className="relative pt-32 pb-16 overflow-hidden" style={{ backgroundColor: "var(--bg)" }}>
        <ReiatsuOrbs />
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="section-tag mb-3">My Work</p>
            <h1 className="font-display text-5xl md:text-7xl mb-4" style={{ color: "var(--text)" }}>
              ALL <span style={{ color: "var(--accent)" }}>PROJECTS</span>
            </h1>
            <ZanpakutoSlash />
            <p className="text-base max-w-xl" style={{ color: "var(--text-muted)" }}>
              A complete collection of things I&apos;ve built — from solo projects to collaborative efforts.
              Each reflects a different challenge I wanted to solve.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter */}
      <div style={{ backgroundColor: "var(--bg)", borderBottom: "1px solid var(--border)" }}>
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-5">
          <div className="flex items-center gap-3 flex-wrap">
            <span className="flex items-center gap-1.5 text-xs font-heading font-bold tracking-widest uppercase" style={{ color: "var(--text-faint)" }}>
              <Filter size={13} /> Filter:
            </span>
            {["All", ...ALL_PROJECT_TAGS].map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveTag(tag)}
                className={`tag ${activeTag === tag ? "active" : ""}`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid */}
      <section className="py-12 md:py-20" style={{ backgroundColor: "var(--bg)" }}>
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <AnimatePresence mode="popLayout">
            <motion.div
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filtered.map((project, i) => (
                <motion.div
                  key={project.slug}
                  layout
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.38, delay: i * 0.05 }}
                  className="card overflow-hidden group flex flex-col"
                >
                  {/* Gradient banner */}
                  <div
                    className={`bg-gradient-to-br ${project.gradient} h-36 relative overflow-hidden`}
                  >
                    <div className="absolute inset-0 opacity-10 font-mono text-xs leading-5 p-3 overflow-hidden select-none text-white" aria-hidden="true">
                      {`// ${project.title}\n${project.techStack.slice(0, 3).join(' + ')}\n> npm run build\n✓ compiled successfully`}
                    </div>
                    {project.featured && (
                      <span className="absolute top-3 right-3 text-xs font-mono px-2 py-0.5 rounded" style={{ backgroundColor: "rgba(0,0,0,0.4)", color: "#fff" }}>
                        ⭐ Featured
                      </span>
                    )}
                  </div>

                  <div className="p-5 flex flex-col flex-1">
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span key={tag} className="tag text-xs">{tag}</span>
                      ))}
                    </div>
                    <h2 className="font-heading text-lg font-bold mb-2 group-hover:text-accent transition-colors" style={{ color: "var(--text)" }}>
                      {project.title}
                    </h2>
                    <p className="text-sm leading-relaxed flex-1 mb-4" style={{ color: "var(--text-muted)" }}>
                      {project.description}
                    </p>
                    <div className="flex items-center gap-2 mt-auto pt-4" style={{ borderTop: "1px solid var(--border)" }}>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-accent text-xs py-1.5 px-3">
                        <ExternalLink size={12} /> Demo
                      </a>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-outline text-xs py-1.5 px-3">
                        <GitFork size={12} /> Code
                      </a>
                      <Link href={`/projects/${project.slug}`} className="ml-auto text-xs font-heading font-semibold flex items-center gap-1 transition-colors hover:text-accent" style={{ color: "var(--text-faint)" }}>
                        Details <ArrowRight size={12} />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="font-heading text-xl" style={{ color: "var(--text-muted)" }}>
                No projects found for <span style={{ color: "var(--accent)" }}>{activeTag}</span>
              </p>
              <button onClick={() => setActiveTag("All")} className="btn-outline mt-4 text-sm py-2 px-4">
                Clear Filter
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
