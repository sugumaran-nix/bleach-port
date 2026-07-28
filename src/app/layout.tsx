import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BackToTop from "@/components/ui/BackToTop";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: {
    default: "Your Name — Developer Portfolio",
    template: "%s | Your Name",
  },
  description:
    "Fresher full-stack developer portfolio. Built with Next.js 14, TypeScript, and Tailwind CSS. Inspired by Bleach's Ichigo Kurosaki.",
  keywords: ["portfolio", "developer", "fresher", "react", "nextjs", "fullstack"],
  openGraph: {
    title: "Your Name — Developer Portfolio",
    description: "Fresher full-stack developer portfolio.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                var t = localStorage.getItem('bleach-portfolio-theme');
                if (t === 'dark' || (!t && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark');
                }
              } catch(e) {}
            `,
          }}
        />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <BackToTop />
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              background: "var(--surface)",
              color: "var(--text)",
              border: "1px solid var(--border)",
              fontFamily: "'Rajdhani', sans-serif",
              fontWeight: 600,
            },
          }}
        />
      </body>
    </html>
  );
}
