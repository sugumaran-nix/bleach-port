import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PROJECTS } from "@/data";
import ProjectDetailClient from "./ProjectDetailClient";

export async function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const project = PROJECTS.find((p) => p.slug === params.slug);
  if (!project) return { title: "Project Not Found" };
  return { title: project.title, description: project.description };
}

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = PROJECTS.find((p) => p.slug === params.slug);
  if (!project) notFound();
  return <ProjectDetailClient project={project} />;
}
