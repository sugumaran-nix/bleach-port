"use client";

import { useEffect } from "react";
import { animate, stagger } from "animejs";

export default function ArchiveInteractions() {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const activeAnimations: Array<{ pause?: () => void; cancel?: () => void }> = [];

    const heroSigil = document.querySelector<HTMLElement>(".hero-mark .glyph");
    const loaderRing = document.querySelector<HTMLElement>(".loader-ring");
    if (!reduced && loaderRing) {
      activeAnimations.push(animate(loaderRing, { rotate: "1turn", duration: 14000, loop: true, ease: "linear" }));
    }

    const revealTargets = document.querySelectorAll<HTMLElement>(".archive-section .section-meta, .display-kicker, .vault-intro, .ranks-layout, .arsenal-heading, .transmission-inner");
    revealTargets.forEach((element) => {
      element.dataset.revealed = "false";
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting || element.dataset.revealed === "true") return;
          element.dataset.revealed = "true";
          if (reduced) {
            element.classList.add("is-revealed");
            return;
          }
          activeAnimations.push(animate(element, { opacity: [0, 1], translateY: [22, 0], duration: 850, ease: "out(4)" }));
        });
      }, { threshold: 0.15 });
      observer.observe(element);
    });

    const onPointerMove = (event: PointerEvent) => {
      if (reduced) return;
      const x = event.clientX / window.innerWidth - 0.5;
      const y = event.clientY / window.innerHeight - 0.5;
      if (heroSigil) activeAnimations.push(animate(heroSigil, { rotate: x * 14, translateX: x * 8, translateY: y * 8, duration: 600, ease: "out(3)" }));
      document.documentElement.style.setProperty("--pressure-x", `${x * 18}px`);
      document.documentElement.style.setProperty("--pressure-y", `${y * 18}px`);
    };

    const onScroll = () => {
      if (reduced) return;
      const progress = window.scrollY / Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      document.documentElement.style.setProperty("--archive-pressure", `${progress}`);
      const rail = document.querySelector<HTMLElement>(".rail-track i");
      if (rail) rail.style.transform = `translateY(${progress * 240}px)`;
      const halo = document.querySelector<HTMLElement>(".transmission-glow");
      if (halo) halo.style.setProperty("--halo-pressure", `${1 + progress * 0.18}`);
    };

    const onRelicEnter = (event: Event) => {
      const row = event.currentTarget as HTMLElement;
      if (reduced) return;
      const bar = row.querySelector<HTMLElement>(".relic-signal-bar");
      if (bar) activeAnimations.push(animate(bar, { scaleX: [0, 1], duration: 520, ease: "out(4)" }));
    };

    const relicRows = document.querySelectorAll<HTMLElement>(".relic-row");
    relicRows.forEach((row) => row.addEventListener("pointerenter", onRelicEnter));
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    const menuLinks = document.querySelectorAll<HTMLElement>(".chapter-rail a");
    if (!reduced && menuLinks.length) activeAnimations.push(animate(menuLinks, { translateX: [0, 4, 0], delay: stagger(90), duration: 700, ease: "out(3)" }));

    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("scroll", onScroll);
      relicRows.forEach((row) => row.removeEventListener("pointerenter", onRelicEnter));
      activeAnimations.forEach((animation) => animation.pause?.());
    };
  }, []);

  return null;
}
