import type { Metadata } from "next";
import "./globals.css";
import LenisProvider from "@/components/LenisProvider";
import CustomCursor from "@/components/CustomCursor";
import FontLoader from "@/components/FontLoader";

export const metadata: Metadata = {
  title: "The Living Blade Archive — Sugumaran S",
  description: "An interactive spiritual archive by Sugumaran S — MCA candidate, AI/ML and full-stack developer specializing in Python, FastAPI, React.js, and machine learning.",
  icons: {
    icon: "/icon.svg",
    apple: "/apple-icon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body><link rel="preload" as="image" href="/ichigo-reiatsu-hero.webp" fetchPriority="high" />
        <LenisProvider>
          <CustomCursor />
          <FontLoader />
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}
