"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Clock, Tag, ArrowRight } from "lucide-react";
import { BLOG_POSTS, ALL_BLOG_TAGS } from "@/data";
import ZanpakutoSlash from "@/components/effects/ZanpakutoSlash";
import ReiatsuOrbs from "@/components/effects/ReiatsuOrbs";

export default function BlogListClient() {
  const [activeTag, setActiveTag] = useState("All");

  const filtered =
    activeTag === "All"
      ? BLOG_POSTS
      : BLOG_POSTS.filter((p) => p.tags.includes(activeTag));

  return (
    <>
      <section className="relative pt-32 pb-16 overflow-hidden" style={{ backgroundColor: "var(--bg)" }}>
        <ReiatsuOrbs />
        <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="section-tag mb-3">Thoughts & Learnings</p>
            <h1 className="font-display text-5xl md:text-7xl mb-4" style={{ color: "var(--text)" }}>
              THE <span style={{ color: "var(--accent)" }}>BLOG</span>
            </h1>
            <ZanpakutoSlash />
            <p className="text-base" style={{ color: "var(--text-muted)" }}>
              Articles on web development, career growth, and things I discover while building.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tag filter */}
      <div style={{ backgroundColor: "var(--bg)", borderBottom: "1px solid var(--border)" }}>
        <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-3 flex-wrap">
            <span className="flex items-center gap-1.5 text-xs font-heading font-bold tracking-widest uppercase" style={{ color: "var(--text-faint)" }}>
              <Tag size={12} /> Topics:
            </span>
            {["All", ...ALL_BLOG_TAGS].map((tag) => (
              <button key={tag} onClick={() => setActiveTag(tag)} className={`tag ${activeTag === tag ? "active" : ""}`}>
                {tag}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Posts */}
      <section className="py-12 md:py-20" style={{ backgroundColor: "var(--bg)" }}>
        <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
          <AnimatePresence mode="popLayout">
            <div className="space-y-6">
              {filtered.map((post, i) => (
                <motion.article
                  key={post.slug}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.38, delay: i * 0.07 }}
                  className="card overflow-hidden group"
                >
                  <div className={`bg-gradient-to-r ${post.coverGradient} h-2`} />
                  <div className="p-6 md:p-7">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {post.tags.map(tag => (
                        <span key={tag} className="tag text-xs">{tag}</span>
                      ))}
                    </div>
                    <Link href={`/blog/${post.slug}`}>
                      <h2 className="font-heading text-xl md:text-2xl font-bold mb-2 group-hover:text-accent transition-colors leading-tight" style={{ color: "var(--text)" }}>
                        {post.title}
                      </h2>
                    </Link>
                    <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--text-muted)" }}>
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-xs font-mono" style={{ color: "var(--text-faint)" }}>
                        <span>{post.date}</span>
                        <span className="flex items-center gap-1"><Clock size={11} /> {post.readTime} min read</span>
                      </div>
                      <Link href={`/blog/${post.slug}`} className="flex items-center gap-1 text-xs font-heading font-bold transition-colors hover:text-accent" style={{ color: "var(--accent)" }}>
                        Read <ArrowRight size={12} />
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </AnimatePresence>
        </div>
      </section>
    </>
  );
}
