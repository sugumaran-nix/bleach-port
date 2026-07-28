"use client";
// Project card pattern: dribbble.com/shots/portfolio-cards, shadcn/ui card
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, GitFork, ExternalLink, Star } from "lucide-react";
import { PROJECTS } from "@/data";
import ZanpakutoSlash from "@/components/effects/ZanpakutoSlash";

const featured = PROJECTS.filter((p) => p.featured);

export default function FeaturedProjects() {
  return (
    <section className="py-20 md:py-28" style={{ backgroundColor: "var(--bg)" }}>
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6"
        >
          <div>
            <p className="section-tag mb-3">Portfolio</p>
            <h2 className="font-display text-4xl md:text-5xl mb-4" style={{ color: "var(--text)" }}>
              FEATURED WORK
            </h2>
            <ZanpakutoSlash />
            <p className="text-base max-w-md" style={{ color: "var(--text-muted)" }}>
              Projects I&apos;ve poured time and creativity into. Each one taught me something new.
            </p>
          </div>
          <Link href="/projects" className="btn-outline shrink-0">
            All Projects <ArrowRight size={15} />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {featured.map((project, i) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className={`card overflow-hidden group ${i === 0 ? "lg:col-span-2" : ""}`}
            >
              {/* Gradient banner */}
              <div
                className={`bg-gradient-to-r ${project.gradient} relative overflow-hidden`}
                style={{ height: i === 0 ? 200 : 160 }}
              >
                {/* Abstract code pattern */}
                <div
                  className="absolute inset-0 opacity-10 font-mono text-xs leading-5 p-4 overflow-hidden select-none"
                  style={{ color: "#fff" }}
                  aria-hidden="true"
                >
                  {`const ${project.slug.replace(/-/g, "_")} = async () => {\n  const data = await fetch('/api');\n  return transform(data);\n};\n\nexport default ${project.slug};`}
                </div>
                <div className="absolute top-4 right-4">
                  <span
                    className="inline-flex items-center gap-1 text-xs font-mono px-2 py-1 rounded"
                    style={{ backgroundColor: "rgba(0,0,0,0.35)", color: "#fff" }}
                  >
                    <Star size={10} fill="currentColor" /> Featured
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.slice(0, 4).map((tag) => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
                <h3 className="font-heading text-xl font-bold mb-2 group-hover:text-accent transition-colors" style={{ color: "var(--text)" }}>
                  {project.title}
                </h3>
                <p className="text-sm leading-relaxed mb-5" style={{ color: "var(--text-muted)" }}>
                  {project.description}
                </p>
                <div className="flex items-center gap-3">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-accent text-sm py-2 px-4"
                  >
                    <ExternalLink size={13} /> Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline text-sm py-2 px-4"
                  >
                    <GitFork size={13} /> GitHub
                  </a>
                  <Link
                    href={`/projects/${project.slug}`}
                    className="ml-auto text-sm font-heading font-semibold flex items-center gap-1 transition-colors"
                    style={{ color: "var(--text-muted)" }}
                  >
                    Details <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
