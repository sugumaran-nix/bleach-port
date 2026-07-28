"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar, Tag } from "lucide-react";
import type { BlogPost } from "@/types";

function renderContent(content: string) {
  const lines = content.split("\n");
  const elements: React.ReactNode[] = [];
  let i = 0;
  while (i < lines.length) {
    const line = lines[i];
    if (line.startsWith("## ")) {
      elements.push(<h2 key={i} className="font-heading text-2xl font-bold mt-8 mb-3" style={{ color: "var(--text)" }}>{line.slice(3)}</h2>);
    } else if (line.startsWith("# ")) {
      elements.push(<h1 key={i} className="font-heading text-3xl font-bold mt-8 mb-3" style={{ color: "var(--text)" }}>{line.slice(2)}</h1>);
    } else if (line.startsWith("```")) {
      
      const codeLines: string[] = [];
      i++;
      while (i < lines.length && !lines[i].startsWith("```")) {
        codeLines.push(lines[i]);
        i++;
      }
      elements.push(
        <pre key={i} className="my-5 overflow-x-auto">
          <code>{codeLines.join("\n")}</code>
        </pre>
      );
    } else if (line.trim() === "") {
      elements.push(<div key={i} className="mb-2" />);
    } else {
      // Handle inline backtick code
      const parts = line.split(/(`[^`]+`)/g);
      const rendered = parts.map((part, pi) =>
        part.startsWith("`") && part.endsWith("`")
          ? <code key={pi}>{part.slice(1, -1)}</code>
          : part
      );
      elements.push(
        <p key={i} className="text-base leading-relaxed mb-3" style={{ color: "var(--text-muted)" }}>
          {rendered}
        </p>
      );
    }
    i++;
  }
  return elements;
}

export default function BlogPostClient({ post }: { post: BlogPost }) {
  return (
    <div style={{ backgroundColor: "var(--bg)", minHeight: "100vh" }}>
      {/* Header */}
      <div className={`bg-gradient-to-br ${post.coverGradient} pt-32 pb-14`}>
        <div className="max-w-3xl mx-auto px-4 md:px-6 lg:px-8">
          <Link href="/blog" className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm font-heading font-semibold mb-8 transition-colors">
            <ArrowLeft size={15} /> Back to Blog
          </Link>
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map(tag => (
              <span key={tag} className="text-xs font-mono px-2.5 py-1 rounded" style={{ backgroundColor: "rgba(255,255,255,0.15)", color: "#fff" }}>
                <Tag size={10} className="inline mr-1" />{tag}
              </span>
            ))}
          </div>
          <h1 className="font-heading text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">{post.title}</h1>
          <div className="flex items-center gap-5 text-sm font-mono text-white/65">
            <span className="flex items-center gap-1.5"><Calendar size={13} />{post.date}</span>
            <span className="flex items-center gap-1.5"><Clock size={13} />{post.readTime} min read</span>
          </div>
        </div>
      </div>

      {/* Article */}
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto px-4 md:px-6 lg:px-8 py-12"
      >
        {renderContent(post.content)}

        {/* Footer */}
        <div className="mt-14 pt-8" style={{ borderTop: "1px solid var(--border)" }}>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <Link href="/blog" className="btn-outline text-sm py-2 px-4">
              <ArrowLeft size={14} /> More Articles
            </Link>
            <p className="text-xs font-mono" style={{ color: "var(--text-faint)" }}>
              Written by Your Name · {post.date}
            </p>
          </div>
        </div>
      </motion.article>
    </div>
  );
}
