import type { Metadata } from "next";
import "./globals.css";
import LenisProvider from "@/components/LenisProvider";
import CustomCursor from "@/components/CustomCursor";

export const metadata: Metadata = {
  title: "The Living Blade Archive — Yaswanth",
  description: "An interactive spiritual archive by Yaswanth — full-stack engineer, AI builder, and signal seeker.",
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
