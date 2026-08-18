import type { Metadata } from "next";
import "./globals.css";
import LenisProvider from "@/components/LenisProvider";
import CustomCursor from "@/components/CustomCursor";

export const metadata: Metadata = {
  title: "The Living Blade Archive — Sugumaran S",
  description: "An interactive spiritual archive by Sugumaran S — MCA candidate, AI/ML and full-stack developer specializing in Python, FastAPI, React.js, and machine learning.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body><link rel="preload" as="image" href="/hero-spirit-night.webp" fetchPriority="high" />
        <LenisProvider>
          <CustomCursor />
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}
