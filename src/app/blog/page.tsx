import type { Metadata } from "next";
import BlogListClient from "./BlogListClient";
export const metadata: Metadata = { title: "Blog" };
export default function BlogPage() { return <BlogListClient />; }
